<template>
    <div class="swiper-container">
        <swiper :options="swiperOption" ref="mySwiper" >
        <!-- slides key:使用了标示每个不同-->
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="图片">
            </swiper-slide>
        <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    </div>
</template>

<script>
  export default {
    props:{
        swiperList:{
            type:Array,
            // default:[]
        }
    },
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination: {
            el: '.swiper-pagination',
            clickable:true,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper    重要  
            observeParents:true,//修改swiper的父元素时，自动初始化swiper  重要  
            longSwipesRatio: 0.3,  
            touchRatio:1, 
            },
          loop:true,
          autoplay: true,//可选选项，自动滑动

        },
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(1, 1000, false)
    }
  }
</script>
<style lang="stylus" scoped>
    .swiper-container >>> .swiper-pagination-bullet-active
        background #ffffff
    .swiper-container
        overflow hidden
            width 100%
            height 0
            padding-bottom 31.25%
            background #cccccc
        .swiper-img
            width 100%
            

</style>
