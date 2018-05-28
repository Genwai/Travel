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
                bottom 0
                left 0
            .detail-text
                position absolute
                bottom 0
                left 0

</style>
