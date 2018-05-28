<template>
  <div class="header">
      <div class="header-icon" @click="detailBack">
        <span class="iconfont icon-back">&#xe624;</span>
      </div>
      <div class="header-text">
        世贸云上厦门观光厅
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  methods: {
    detailBack(){
         this.$router.push({path:'/'})
    }
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
    z-index 99
      .header-icon
        width 0.88rem
        height 0.88rem
        line-height 0.88rem
        display inline-block
      .header-text
        flex 1
        display inline-block
        text-align center

</style>
