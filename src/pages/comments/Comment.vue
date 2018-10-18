<template>
  <div class="container">
      <CommentList :comments='comments' v-if='userinfo.openId' user='current'></CommentList>
      <div v-if='userinfo.openId'>
        <div class="page-title">我添加的图书</div>
        <Card v-for='book in books' :key='book.id' :book='book'></Card> 
        <div v-if='!books.length'>暂时还没添加图书</div>
      </div>
      <div v-else class="text-footer">请先登录</div>
  </div>
</template>
<script>
import CommentList from '@/components/CommentList'
import Card from '@/components/Card'
import {get} from '@/util'
export default {
  components: {
    CommentList,
    Card
  },
  data () {
    return {
      comments: [],
      userinfo: {},
      books: []
    }
  },
  methods: {
    async getComments () {
      const comments = await get('/weapp/commentlist', {openid: this.userinfo.openId})
      this.comments = comments.commentlist
    },

    async getBooks () {
      const books = await get('/weapp/booklist', {openid: this.userinfo.openId})
      this.books = books.list
    },
    init () {
      wx.setNavigationBarTitle({
        title: '评论列表'
      })
      wx.showNavigationBarLoading()
      this.getComments()
      this.getBooks()
      wx.stopPullDownRefresh()
      wx.hideNavigationBarLoading()
    }
  },
  onPullDownRefresh () {
    this.init()
  },
  onShow () {
    this.userinfo = wx.getStorageSync('userinfo')
    if (this.userinfo) {
      this.init()
    }
  }
}
</script>
<style>


</style>
