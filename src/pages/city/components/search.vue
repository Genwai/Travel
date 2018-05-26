<template>
  <div class="search">
      <div class="searchContext">
         <input class="search-input" type="text" placeholder="输入城市名或拼音" v-model="searchCity">
      </div>
     <div class="search-container" v-if="SearchShow" ref="search">
          <ul class="search-ul">
            <li class="search-li border-bottom" 
            v-for="city in CityList" 
            @click="handleCityNameClick(city.name)">{{city.name}}</li>
            <li class="search-li border-bottom" v-show="noData">没有找到匹配数据</li>
          </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import { mapMutations} from 'vuex'
export default {
  props: {
    cities:Object
  },
  data() {
    return {
      searchCity:'',
      timer:null,
      CityList:[],
    }
  },
  methods:{
    handleCityNameClick(city){
      console.log('city', city)
      // this.nowPosition = city;
      // this.$store.commit('cityChange',city)
      this.cityChange(city)
      this.$router.push({path:'/'})
    },
    ...mapMutations(['cityChange']),
  },
  computed: {
    SearchShow(){
      if (this.searchCity) {
        return true
      }
    },
    noData(){
      if (!this.CityList.length) {
        return true
      }
    }
  },
  watch: {
    searchCity(){
      let result =[];
      if (this.timer) {
        clearTimeout(this.timer)
      }
       this.timer = setTimeout(() => {
           for (const key in this.cities) {
             this.cities[key].forEach((value) => {
              if (value.spell.indexOf(this.searchCity) > -1 || value.name.indexOf(this.searchCity) > -1) {
                result.push(value)
              }
        });
      }
      this.CityList = result;
      // console.log('CityList', this.CityList)
      }, 500);
    }
  },
  // created () {
  //    this.$nextTick(()=> {
  //           // DOM更新完成
           
  //           let element = this.$refs.search;//对 就这样获取dom节点
  //           this.scroll = new BScroll(element);//实现滚动
  //       }) 
  // },
  //   mounted(){
  //   let element = this.$refs.wrapper;//对 就这样获取dom节点
  //   this.scroll = new BScroll(element);//实现滚动
  //   // console.log('element', element)
  // }
}
</script>

<style scoped lang="stylus">
   @import '~@/assets/style/vareble.styl'
.search
  // position: absolute;
  // top: 0.85rem;
  width: 100%;
  // height 100%
  height 45px
  margin-top 0.84rem
  // overflow: hidden;
  z-index: 100;
  .searchContext
      padding 0.1rem
      background $bgColor 
      .search-input
          padding 0 0.1rem
          width 100%
          height 0.62rem
          line-height 0.62rem
          box-sizing border-box
          border-radius 0.06rem
          color #666666
          text-align center
  .search-container
    background #eeeeee
    position absolute
    top 1.65rem
    left 0
    right 0
    bottom 0
    z-index 100
    // overflow hidden
    .search-ul
      background #ffffff
      .search-li
        line-height: .62rem
        padding-left: .2rem
        background: #fff
        color: #666
        
</style>
