const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
    const {id} = ctx.request.query
    await mysql('books')
        .where('id', id)
        .increment('count', 1)
    const bookInfo = await mysql('books')
        .select('books.*', 'cSessionInfo.user_info')
        .join('cSessionInfo', 'books.openid', 'cSessionInfo.open_id')
        .where('id', id)
        .first()
    const info = JSON.parse(bookInfo.user_info)

    ctx.state.data = Object.assign({}, bookInfo, {
        tags: bookInfo.tags.split(','),
        summary: bookInfo.summary.split('\n'),
        user_info: {
            name: info.nickName,
            avatar: info.avatarUrl,
            openid: info.openId
        }
    })
}
