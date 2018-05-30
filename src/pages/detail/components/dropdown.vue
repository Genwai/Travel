<template>
  <div class="containe">
      <div class="drop-content">
          <div class="drop-text" :style="'height:'+ ShowHeight +'px'">
              <div class="text" ref="reference" >
                  <slot></slot>
                
              </div>
          </div>
          <div class="add-more" @click="showMore">
              <span class="iconfont">{{show?"&#xe604;":"&#xe603;"}}</span>
              </div>
      </div>
      
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
        dropHeight:0,
        show:false,
        height:60,
    }
  },
  mounted(){
      var height = this.$refs.reference.offsetHeight;

      this.dropHeight = height;
      console.log('dropHeight',height)
  },
  computed:{
      ShowHeight(){
          return this.show? this.dropHeight:this.height
      }
  },
  methods: {
      showMore(){
          this.show = !this.show;
      }
  }
}
</script>

<style scoped lang="stylus">
    .drop-content
        .add-more
            display block 
            width 100%
            height 30px
            line-height 0.48rem
            // background #EBEEF5
            text-align center
            .iconfont
                font-size 0.56rem
                
        .drop-text
            text-indent 2em
            font-size 0.26rem
            line-height 0.42rem
            color #2c3e50
            overflow hidden
            transition 0.5s 
            word-break break-all
            word-wrap break-word

            




</style>
