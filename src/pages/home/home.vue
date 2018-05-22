<template>
  <div class="page">
      <home-header ></home-header>
      <home-swiper :swiperList ="swiperList"></Home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-slide></home-slide>
      <home-recommend :recommendList="recommendList"></home-recommend>
      <home-weekendgo :weekendList="weekendList"></home-weekendgo>

  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeSlide from './components/slide'
import HomeWeekendgo from './components/weekendgo'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
  data() {
    return {
        lastCity:'',
        swiperList:[],
        iconList:[],
        recommendList:[],
        weekendList:[]
      
    }
  },
  components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeSlide,
      HomeWeekendgo,
  },
  methods: {
    getHomeInfo(){
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    // 获取数据的方法
    getHomeInfoSucc(res){
      let data = res.data;
      let Alldata;
      if (data.ret) {
        Alldata = data.data;
      }
      // console.info('data', Alldata.swiperList)
      this.swiperList = Alldata.swiperList;
      this.iconList = Alldata.iconList;
      this.recommendList = Alldata.recommendList;
      this.weekendList = Alldata.weekendList;
    }
  },
  computed:{
    ...mapState(['city'])
  },
  mounted(){
    this.lastCity = this.city;
    this.getHomeInfo()
  },
  activated(){
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
       this.getHomeInfo()
    }
  }

}
</script>

<style lang="stylus" scoped>
    // 在移动端 1 rem = html  font-size =50 px 
    .page
      background #ffffff
</style>

