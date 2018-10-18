<template>
    <div class="bookinfo">
        <div class="thumb">
            <img :src="info.image" alt="" class="back" mode='aspectfill' >
            <img :src="info.image" alt="" class="img" mode='aspectFit'>
            <div class="info">
                <div class="title">
                    {{info.title}}
                </div>
                <div class="author">
                    {{info.author}}
                </div>
            </div>
        </div>
        <div class="detail">
            <img :src="userInfo.avatar" mode="aspectFit" class="avatar">
            {{userInfo.name}}
            <div class="right text-primary">
                {{info.rate}}分
                <Rate :value='info.rate'></Rate>
            </div>
        </div>
        <div class="detail">
            {{info.publisher}}
            <div class="right">
                {{info.price}}
            </div>            
        </div>
        <div class="tags">
            <div class="badge" v-for='(tag,index) in info.tags' :key='index'>
                {{tag}}
            </div>
        </div>
        <div class="summary">
            <p v-for='(summary,index) in info.summary' :key='index'>{{summary}}</p>
        </div>
    </div>
</template>

<script>
import Rate from '@/components/Rate'
export default {
  components: {
    Rate
  },
  props: ['info'],
  computed: {
    userInfo () {
      return this.info.user_info || {}
    }
  },
  mounted () {
    wx.showShareMenu({
      withShareTicket: true
    })
  }
}
</script>

<style lang='scss'>
.bookinfo{
    font-size: 14px;
 
    .badge{
        margin: 5px 0px 5px 10px;
        padding: 2px 5px;
        display: inline-block;
        border:1px solid #DC5A3B;
        border-radius: 4px;
    }
    p{
        padding: 0 10px;
        margin: 10px 0;
    }
    .detail{
        padding: 5px 10px;
        .right{
            float:right;
        }
        .avatar{
            width: 20px;
            height: 20px;
            border-radius: 50%;
            vertical-align: middle;
        }
    }
    .thumb{
        width: 750rpx;
        height: 500rpx;
        position: relative;
        overflow: hidden;
        .back{
            width: 100%;
            filter: blur(15px)
        }
        .img{
            position: absolute;
            top: 30rpx;
            height: 300rpx;
            width: 100%;
            left: 0;
        }
        .info{
            color: white;
            width: 100%;
            position: absolute;
            top:350rpx;
            text-align: center;
            left: 0;
            .title{
                font-size: 20px;
            }
            .author{
                font-size: 14px;
            }
        }
    }
}
</style>
