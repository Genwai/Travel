<template>
  <div class="gallary">
      <div class="wrapper-container" @click="handleSwiperClick">
       <swiper :options="swiperOption" >
        <!-- slides key:使用了标示每个不同-->
            <swiper-slide >
                <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1805/7d/7dca9c37a87479eba3.img.jpg_r_800x800_356628f6.jpg" alt="图片">
            </swiper-slide>
             <swiper-slide >
                <img class="gallary-img" src="http://img1.qunarzz.com/sight/p0/1805/e5/e52cfe890c7de117a3.img.jpg_r_800x800_d66f84a0.jpg" alt="图片">
            </swiper-slide>
        <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
    swiperOption: {
            // some swiper options/callbacks
            // 所有的参数同 swiper 官方 api 参数
            pagination: {
                el: '.swiper-pagination',
                type : 'fraction',
                
                },
            // loop:true,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper    重要  
            observeParents:true,//修改swiper的父元素时，自动初始化swiper  重要  
            },
    }
  },
  components: {
      
  },
  methods: {
      handleSwiperClick(){
          console.log('1', '2')
          this.$emit('swiperclick')
      }
  }
}
</script>

<style scoped lang="stylus">
    .gallary >>> .swiper-container 
        overflow inherit

    .gallary
        position fixed
        top 0
        left 0
        height 100%
        width 100%
        background  black 
        display flex 
        justify-content center
        align-items center
        .wrapper-container
            height 0
            padding-bottom 55%
            width 100%
            .gallary-img
               width 100% 
            .swiper-pagination
                color #ffffff
                bottom -2rem

</style>
