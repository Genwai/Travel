<template>
  <div class="icons swiper-container">
       <swiper  :options="swiperOption" >
        <swiper-slide v-for="(page,index) in pagesList" :key="index">
        <div class="icon-item" v-for="item in page" :key="item.id">
            <div class="icon-item-img">
            <img class="icon-img" :src="item.imgSrc" alt="item.desc" srcset="">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
        </div>
        </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>  

      </swiper>
    

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
      iconList:{
          type:Array
      }
  },
  data() {
    return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination: {
            el: '.swiper-pagination',
            },
          loop:false,


        },
    }
  },
  mounted () {
    console.log('pagesList',this.pagesList)
    console.log('iconlist',this.iconList)  
  },
  computed:{
      pagesList(){
          const pages =[];
          this.iconList.forEach((item,index) => {
              let page =Math.floor(index / 8);
              if(!pages[page]){
                  pages[page]= []
              }
                pages[page].push(item)
              
            // console.log('pages',pages)
          });
            return pages 
          
      }
  }
}
</script>

<style scoped lang="stylus">
    .icons
        width 100%
        height 0
        padding-bottom 50%
        overflow hidden
        .icon-item
            width 25%
            box-sizing border-box
            float left
            height 0
            padding-bottom 25%
            position relative
            .icon-item-img
                position absolute
                top 0px
                left 0px
                right 0px
                bottom 0.44rem
                padding-top 0.11rem
                .icon-img
                    height 100%
                    display block
                    margin 0 auto 
            .icon-desc
                position absolute
                left 0px
                right 0px
                bottom 0rem
                height 0.44rem
                line-height 0.44rem
                text-align center
                display block
                
                
                
                



</style>
