<template>
  <div class="cityList" ref="wrapper"> 
    <div>
        <div class="position">
        <h1 class="title border-topbottom" >您的位置</h1>
        <div class="wrapper">
          <div class="position-wrapper">
            <div class="posBtn" >{{this.$store.state.city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <h1 class="title">热门城市</h1>
        <div class="wrapper">
            <div class="position-wrapper" 
            v-for="(item,index) in hotCities" 
            :key="item.id">
              <div class="posBtn" 
              @click="handleCityNameClick(item.name)"
              >{{item.name}}</div>
            </div>
          
          </div>
      </div>
      <div class="pingyin" ref="pingyin">
        <!-- key：值得向对象前面 -->
        <div class="parContainer" v-for="(item,key) in cities"
        :key="key"
        :ref="key"
        >
          <div class="title"  >{{key}}</div>
          <div class="wrapper" v-for="(list,index) in item">
            <div class="place border-bottom"
            @click="handleCityNameClick(list.name)">{{list.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  props: {
    cities:{
      type:Object
    },
    hotCities:{
      type:Array
    },
    letter:{
      type:String
    }
  },
  data() {
    return {
      // nowPosition:"北京"
    }
  },
  methods:{
    handleCityNameClick(city){
      // console.log('city', city)
      // this.nowPosition = city;
      this.$store.commit('cityChange',city)
      this.$router.push({path:'/'})
      
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        // console.log('LETTER', this.letter)
        const elements  = this.$refs[this.letter][0];
        this.scroll.scrollToElement(elements)
        console.log('elements', elements)
      }
    }
  },
  mounted(){
    let element = this.$refs.wrapper;//对 就这样获取dom节点
    this.scroll = new BScroll(element);//实现滚动
    // console.log('element', element)
  },
 
}
</script>

<style scoped lang="stylus">
  .border-bottom
    &:before
      border-color #cccccc
    &:after
      border-color #cccccc
.cityList
  position absolute
  top 1.68rem
  left 0
  right 0
  bottom 0
  overflow hidden
  .position
    .title
      background #eee
      padding-left 0.1rem
      height 0.54rem
      color #666666
      line-height 0.54rem
      font-size 0.26rem
    .wrapper
       padding: .1rem .6rem .1rem .1rem
      .position-wrapper
        float left
        width 33%
        .posBtn
          border 0.02rem solid #eeeeee
          text-align center
          padding 0.1rem 0
          margin: .1rem
          color #666666
  .area
    clear both
    .title
      background #eee
      padding-left 0.1rem
      height 0.54rem
      color #666666
      line-height 0.54rem
      font-size 0.26rem
    .wrapper
       padding: .1rem .6rem .1rem .1rem
       overflow: hidden
      .position-wrapper
        float left
        width 33%
        .posBtn
          border 0.02rem solid #eeeeee
          text-align center
          padding 0.1rem 0
          margin: .1rem
          color #666666
  .pingyin
    .title
      background #eee
      padding-left 0.1rem
      height 0.54rem
      color #666666
      line-height 0.54rem
      font-size 0.26rem
    .wrapper
      padding-left 0.1rem
      .place
        height 0.76rem
        line-height 0.76rem
        
        
      
</style>
