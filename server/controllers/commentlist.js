const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
    const {bookid, openid} = ctx.request.query
    const commentselect = mysql('comments')
        .select('comments.*', 'cSessionInfo.user_info')
        .join('cSessionInfo', 'comments.openid', 'cSessionInfo.open_id')

    let commentlist
    if (bookid) {
        commentlist = await commentselect.where('bookid', bookid)
    } else if (openid) {
        commentlist = await commentselect.where('openid', openid)
    }

    ctx.state.data = {
        commentlist: commentlist.map(v => {
            const info = JSON.parse(v.user_info)
            return Object.assign({}, v, {
                user_info: {
                    nickName: info.nickName,
                    avatar: info.avatarUrl,
                    openid: info.open_id
                }
            })
        })
    }
}
