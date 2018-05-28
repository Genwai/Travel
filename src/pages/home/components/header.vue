<template>
  <div class="header">
    <div class="header-container">
      <div class="header-back">
          <span class="iconfont icon-back">&#xe682;</span>
      </div>
      <div class="header-input">
          <span class="iconfont icon-input">&#xe632;</span>
          输入城市/景点/游玩主题</div>
      <router-link to='/city'>
          <div class="header-city">{{this.currentCity}}<span class="iconfont icon-city">&#xe600;</span></div>
      </router-link>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        //   city:'城市'
      }
    },
    computed:{
        // ...mapState(['city']), 可以直接传数组或者一个对象
        ...mapState({
            currentCity:'city'
        }),
        
    }
  }

</script>

<style scoped lang="stylus">
    // @import '../../../assets/style/vareble.styl'
    @import '~@/assets/style/vareble.styl'
// 注释：1rem = htmml :font-size 50px 
// @ 符号代表src这个目录下
    .header-container
        display flex
        height 0.86rem
        line-height 0.86rem
        background $bgColor
        color  #ffffff
        font-size 0.28rem        
        .header-back
            width .64rem
            float left
            .icon-back
                display block
                text-align center 
                font-size 0.4rem
        .header-input
            flex 1
            background #ffffff
            border-radius 0.1rem
            margin-top .12rem
            margin-left .2rem
            height 0.64rem
            color #ccc
            line-height 0.64rem
            .icon-input
                padding-left .20rem
        .header-city
            min-width 1.04rem
            float right 
            text-align center
            color #ffffff
            white-space nowrap
            padding 0 0.1rem
            .icon-city
                font-size .25rem
                margin-left 0.06rem


            


</style>
