<template>
  <div class="header">
    <div class="header-container">
      <router-link to="/">
          <div class="header-back" >
          <span class="iconfont icon-back">&#xe624;</span>
      </div>
      </router-link>
      <div class="header-input">
          城市选择
      </div>
    
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
          city:'城市'
      }
    },
    methods: {
        backLeftClick(){
            
        }
    }
  }

</script>

<style scoped lang="stylus">
    // @import '../../../assets/style/vareble.styl'
    @import '~@/assets/style/vareble.styl'
// 注释：1rem = htmml :font-size 50px 
// @ 符号代表src这个目录下
.header
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
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
                color #ffffff
        .header-input
            text-align center
            flex 1


            


</style>
