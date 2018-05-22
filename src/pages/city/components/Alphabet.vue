<template>
  <div class="alphabat">
    <ul class="containers">
        <li class="item" v-for="(item,key) in cities" :key="key"
        @click.prevent="hangdleLetterClick">{{key}}</li>
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
    }
  },
  methods: {
      hangdleLetterClick(el){
          this.letter = el.target.innerHTML;
          this.$emit('letter',this.letter)
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
