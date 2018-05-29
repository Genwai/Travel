<template>
<div>
  <div class="detail">
      <div class="detail-container">
          <div class="detail-header" @click="picWrapper">
              <img class="detrail-img" src="//img1.qunarzz.com/sight/p0/1508/a5/4003f9dd7bebf61eccbf64046e26d487.water.jpg_600x330_a80ff353.jpg" alt="">
          </div>
          <div class="header-back" @click="detailBack">
            <span class="iconfont icon-back">&#xe624;</span>
          </div>
          <div class="dtail-number">
              <span class="iconfont">&#xe618;</span>
              <span>16</span>
          </div>
          <div class="detail-text">
              <p>北京欢乐谷</p>
          </div>
      </div>
  </div>
  <common-gallary @swiperclick="swiperclick" v-show="pics"></common-gallary>
</div>
</template>

<script type="text/ecmascript-6">
import commonGallary from '@/common/gallary/gallary'
export default {
  data() {
    return {
        pics:false
    }
  },
  components: {
      commonGallary
  },
  methods: {
      picWrapper(){
          this.pics = true;
      },
      swiperclick(){
          this.pics = false;
      },
      detailBack(){
          this.$router.push({path:'/'})
      }
  }
}
</script>

<style scoped lang="stylus">
    .detail
        .detail-container
            position relative
            color white
            .detail-header
                height 0
                width 100%
                padding-bottom 55%
                .detrail-img
                    width 100% 
            .header-back
                position absolute
                left 0.12rem
                top 0.12rem
                .icon-back
                    width 0.72rem
                    height 0.72rem
                    background rgba(0,0,0,0.8)
                    text-align center
                    border-radius 50%
                    line-height 0.72rem
                    display inline-block
                    color #ffffff
                    font-size 0.48rem
                    z-index 1
            .dtail-number
                position absolute
                bottom 0.86rem
                left 0.2rem
                width 1.2rem
                height 0.4rem
                background rgba(0,0,0,0.8)
                border-radius 0.2rem
                text-align center
                line-height 0.4rem
            .detail-text
                position absolute
                bottom 0.1rem
                left 0
                width 100%
                height 0.56rem
                font-size 0.36rem
                text-shadow 0 1px 2px rgba(0,0,0,0.70)
                text-indent 0.2rem
                background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
</style>
