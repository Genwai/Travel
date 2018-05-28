<template>
  <div>
    <div class="header" :style="headerStyle" ref="header" v-show="headerShow">
      <div class="header-icon-back" @click="detailBack">
        <span class="iconfont icon-back">&#xe682;</span>
      </div>
      <div class="header-text">
        世贸云上厦门观光厅
      </div>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      headerStyle:{
        opacity:0
      },
      headerShow:false
    }
  },
  methods: {
    detailBack(){
         this.$router.push({path:'/'})
    },
    handleScroll(){
      const height = document.documentElement.scrollTop;
      let opacity = height / 120 ;
      if(height > 40){
        this.headerShow =true;
        opacity = opacity >=1 ? 1: opacity;
        this.headerStyle.opacity =  opacity;
      }else{
        this.headerShow =false;
      }
      console.log(height)
    }
  },
  mounted () {
    window.addEventListener('scroll',this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  .header
    position fixed
    top 0px
    left 0px
    width 100%
    height .88rem
    line-height 0.88rem
    color #ffffff
    display flex 
    background #00bcd4
    font-size 0.32rem
    height 
      .header-icon-back
        width 0.88rem
        height 0.88rem
        line-height 0.88rem
        text-align center
        display inline-block
        font-size 0.32rem
      .header-text
        flex 1
        display inline-block
        text-align center

</style>
