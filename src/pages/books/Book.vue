<template>
  <div>
    <TopSwiper :tops='tops'></TopSwiper>
    <card v-for='book in books' :key='book.id' :book='book'></card>
    <p class="text-footer" v-if="!more">没有更多数据了</p>
  </div>
</template>
<script>
// 35条数据
// 每次加载10条
// 0页 0-10
// 1页 10-20
// 2页 20-30
// 3页 30-40（5）
// page 当前第几页

// 没有更多数据
// 1.page=0 不能显示这条提醒
// 2.page >0数据长度<10 停止触底加载

import {get} from '@/util'
import Card from '@/components/Card'
import TopSwiper from '@/components/TopSwiper'
export default {
  components: {
    Card,
    TopSwiper
  },
  data () {
    return {
      books: [],
      page: 0,
      more: true,
      tops: []
    }
  },
  methods: {
    async getList (init) {
      if (init) {
        this.page = 0
        this.more = true
      }
      wx.showNavigationBarLoading()
      const books = await get('/weapp/booklist', {page: this.page})
      if (books.list < 10 && this.page > 0) {
        this.more = false
      }
      if (init) {
        this.books = books.list
        wx.stopPullDownRefresh()
      } else {
        this.books = this.books.concat(books.list)
      }
      wx.hideNavigationBarLoading()
    },

    async getTop () {
      const top = await get('/weapp/top')
      this.tops = top.list
    }

  },
  onReachBottom () {
    if (!this.more) {
      return false
    }
    this.page = this.page + 1
    this.getList()
  },
  onPullDownRefresh () {
    this.getList(true)
    this.getTop()
  },
  mounted () {
    this.getList(true)
    this.getTop()
  }
}
</script>
<style>


</style>
