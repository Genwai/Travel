<template>
  <div class="page">
      <home-header ></home-header>
      <home-swiper :swiperList ="swiperList"></Home-swiper>
      <home-icons :iconList="iconList"></home-icons>
      <home-slide></home-slide>
      <home-recommend ></home-recommend>
      <home-weekendgo ></home-weekendgo>

  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeSlide from './components/slide'
import HomeWeekendgo from './components/weekendgo'
export default {
  data() {
    return {
        swiperList:[
            {
            id:'001',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1805/bf/bb3027b882d50202.jpg_750x200_041a8de2.jpg'
            },
            {
            id:'002',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1804/85/09000ddc9a6df502.png_750x200_6adfcd38.png'
            },{
            id:'004',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1805/10/3ee6df72beb86402.jpg_750x200_e02a4c99.jpg'
            
            },{
            id:'003',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1804/9f/88f6c60082b0c002.jpg_750x200_16292dc4.jpg'
            
            }
        ],
        iconList:[
          {
            id:'008',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc:'景点门票'
          },
          {
            id:'001',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1804/ed/cf572be30fc32f02.png',
            desc:'Q+精选'
          },
           {
            id:'002',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
            desc:'游船游艇'
          },
          {
            id:'003',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            desc:'踏青赏花'
          },
          {
            id:'004',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            desc:'动植物园'
          },
          {
            id:'005',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
            desc:'游乐场'
          },
          {
            id:'006',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/c1/6f15f887179fa002.png',
            desc:'厦门老院子'
          },
          {
            id:'007',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
            desc:'名胜古迹'
          },
          {
            id:'008',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
            desc:'鼓浪屿'
          },
          {
            id:'009',
            imgSrc:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
            desc:'全部玩乐'
          }
        ]
      
    }
  },
  components: {
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeSlide,
      HomeWeekendgo,
  }
}
</script>

<style lang="stylus" scoped>
    // 在移动端 1 rem = html  font-size =50 px 
    .page
      background #ffffff
</style>

