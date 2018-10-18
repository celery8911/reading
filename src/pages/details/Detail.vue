<template>
    <div>
        <BookInfo :info="info"></BookInfo>
        <CommentList :comments='comments'></CommentList>
        <div class="comment" v-if='showAdd'>
            <textarea v-model='comment' class='textarea' maxlength="140" placeholder='请输入图书短评'></textarea>
            <div class="location">
                地理位置：
                <switch color="#DC5A3B" @change='getGeo' :checked='location'></switch>
                <span class="text-primary">{{location}}</span>
            </div>
            <div class="phone">
                手机型号：
                <switch color="#DC5A3B" @change='getPhone' :checked='phone'></switch>
                <span class="text-primary">{{phone}}</span>
            </div>  
            <button class="btn" @click='addComment'>添加评论</button>    
            <button class="btn" open-type='share' @click='onShow'>转发给好友</button>          
        </div>   
        <div v-else class="text-footer">没有登录或者已经评论过了</div>     
    </div>   
</template>

<script>
import {get, post, showModal, showSuccess} from '@/util'
import BookInfo from '@/components/BookInfo'
import CommentList from '@/components/CommentList'
export default {
  components: {
    BookInfo,
    CommentList
  },
  data () {
    return {
      bookid: '',
      info: {},
      phone: '',
      location: '',
      comment: '',
      comments: []
    }
  },
  computed: {
    showAdd () {
      if (!this.info.openid) {
        return false
      } else if (this.comments.filter(v => v.openid === this.info.openid).length > 0) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    async getBookInfo () {
      const res = await get('/weapp/bookdetail', {id: this.bookid})
      this.info = res
      wx.setNavigationBarTitle({
        title: this.info.title
      })
    },
    async getComments () {
      const commentlist = await get('/weapp/commentlist', {bookid: this.bookid})
      this.comments = commentlist.commentlist
    },
    getGeo (e) {
      let url = 'http://api.map.baidu.com/geocoder/v2/'
      let ak = 'UUmkVFzjqtG7xpCUta2MePSgsxXDbpfk'

      if (e.target.value) {
        wx.getLocation({
          success: geo => {
            wx.request({
              url,
              data: {
                location: `${geo.latitude},${geo.longitude}`,
                ak,
                output: 'json'
              },
              success: res => {
                if (res.data.status === 0) {
                  this.location = res.data.result.addressComponent.city
                } else {
                  this.location = '未知地点'
                }
              }
            })
          }
        })
      }
    },
    getPhone (e) {
      if (e.target.value) {
        const phoneInfo = wx.getSystemInfoSync()
        this.phone = phoneInfo.model
      } else {
        // 没选中
        this.phone = ''
      }
    },
    async addComment () {
      // location,phone,comment,bookid,openid
      const data = {
        location: this.location,
        phone: this.phone,
        bookid: this.bookid,
        comment: this.comment,
        openid: this.info.user_info.openid
      }
      if (!this.comment) {
        return
      }
      try {
        await post('/weapp/addcomment', data)
        showSuccess('评论成功')
        this.comment = ''
        this.getComments()
      } catch (e) {
        showModal('失败', e.msg)
      }
    }
  },
  mounted () {
    this.bookid = this.$root.$mp.query.id
    this.getBookInfo()
    this.getComments()
    wx.showShareMenu()
  }
}
</script>

<style lang='scss'>
.comment{
    font-size: 14px;
    margin: 10px;
    .textarea{
        background: #eee;
        border: 1rpx solid #DC5A3B;
        border-radius:5px;
        height: 200rpx;
        width: 100%;
        padding: 5px;
        box-sizing: border-box;
        margin: 0, auto;
    }
    .location{
        margin-top: 10px;
    }
    .phone{
        margin: 10px 0;
        
    }    
} 


</style>
