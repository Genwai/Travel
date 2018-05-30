<template>
  <div class="detail">
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <detail-slide></detail-slide>
      <detail-recommond></detail-recommond>
      <detail-slide></detail-slide>
      <detail-comment></detail-comment>
      
  </div>
</template>

<script type="text/ecmascript-6">
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailRecommond from './components/recommond'
import detailComment from './components/comment'
import detailSlide from '../home/components/slide'

export default {
  data() {
    return {

    }
  },
  components: {
  detailBanner,
  detailHeader,
  detailSlide,
  detailRecommond,
  detailComment,
  }
}
</script>

<style scoped lang="stylus">
  .detail
    height 50rem
</style>
