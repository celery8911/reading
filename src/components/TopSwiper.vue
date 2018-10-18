<template>
    <div class="swiper">
        <swiper
            :indicator-dots='true'
            indicator-active-color= '#DC5A3B'
            :autoplay='true'
            :interval='6000'
            :duration='1000'
            :circular='true'
        >
            <div v-for='(top,imgindex) in imgUrls' :key='imgindex'>
                <swiper-item>
                    <img 
                    class='slide-image' 
                    :src='img.image' 
                    mode='aspectFit'
                    v-for='img in top'
                    :key='img.id'
                    @click=detailUrl(img)>
                </swiper-item>
            </div> 
        
        </swiper>
    </div>
</template>

<script>
export default {
  props: ['tops'],
  computed: {
    imgUrls () {
      let res = this.tops
      return [res.slice(0, 3), res.slice(3, 6), res.slice(6, 9)]
    }
  },
  methods: {
    detailUrl (item) {
      wx.navigateTo({
        url: '/pages/details/main?id=' + item.id
      })
    }
  }
}
</script>

<style lang='scss'>
.swiper {
    margin-top: 5px;
    .slide-image{
        width: 33%;
        height: 250rpx;
    }
}
</style>
