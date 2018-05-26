<template>
  <div class="alphabat">
    <ul class="containers">
        <li class="item" v-for="(item,key) in letterStore" 
            :key="key"
            :ref="item"
            @click.prevent="hangdleLetterClick"
            @touchstart.prevent = "handleTouchStart"
            @touchmove = "handleTouchMove"
            @touchend = "handleTouchEnd"
        >{{item}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    cities:{
        type:Object
    }
  },
  data() {
    return {
        letter:String,
        flagStar:false,
        timer:null,
        clientA:0,
        // letterArray:[]
    }
  },
  updated(){
       this.clientA = this.$refs['A'][0].offsetTop
  },
  computed:{
      letterStore(){
          let letterArray = [];
          for (const key in this.cities) {
            //   console.log('keyline', key)
              letterArray.push(key)
          }
          return letterArray
      }
  },
  methods: {
      hangdleLetterClick(el){
          this.letter = el.target.innerHTML;//获取点击的A
          this.$emit('letter',this.letter)
      },
      handleTouchStart(el){
        //   console.log('handleTouchStart',el.touches[0])
          this.flagStar = true;
      },
      handleTouchMove(el){
        //   console.log('handleTouchMove',el)
          if (this.flagStar ) {
              if (this.timer) {
                  clearTimeout(this.timer)
              }
              this.timer = setTimeout(() => {
                  const touchY = el.touches[0].clientY - 79 ;
                  const index = Math.floor((touchY - this.clientA - 60) / 20);
                  const number = this.letterStore[index];//确定到某个字母
                //   console.log('clientA', this.clientA) clientA 不起作用
                   this.$emit('letter',number)
                
              }, 20);
          }
      },
      handleTouchEnd(el){
          console.log('handleTouchMove',el)
          
      }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/style/vareble.styl' 
// 注意~@/.

    .alphabat
        .containers
            position fixed
            right 0
            top 2.8rem
            display flex 
            flex-direction: column
            width 0.4rem
            justify-content center 
            .item
                color $bgColor
                text-align center
                line-height 0.4rem

</style>
