<template>
    <div class="comment-list">
        <div class="page-title">我的评论</div>
        <div class="comment" v-for='comment in comments' :key='comment.id' @click='handleClick(comment)'>
            <div class="user">
                <div class="inline">
                    <img :src="comment.user_info.avatar" alt="" class="avatar" mode="aspectFit">
                    {{comment.user_info.nickName}}
                </div>
                <div class="right">
                    {{comment.location||'未知地点'}}
                    <span class="text-primary">--</span>
                    {{comment.phone||'未知型号'}}
                </div>
            </div>
            <div class="content">
                {{comment.comment}}
            </div>

        </div>
    </div>
</template>

<script>
export default {
  props: ['comments', 'user'],
  methods: {
    handleClick (comment) {
      if (this.user === 'current') {
        wx.navigateTo({
          url: '/pages/details/main?id=' + comment.bookid
        })
      }
    }
  }
}
</script>

<style lang='scss'>
.comment-list{
    background: #eee;
    font-size: 14px;
    overflow: hidden;
    .comment{
        background: #fff;
        padding: 5px 10px;
        border: 1px solid #eee;
        .content{
            margin: 10px 0 0;
        }
        .user{
            .inline{
                display: inline-block;
                .avatar{
                width:20px;
                height: 20px;
                border-radius: 50%;
                }
            }
        }
    }
}
</style>
