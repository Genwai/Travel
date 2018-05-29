<template>
  <div class="detail">
      <detail-banner></detail-banner>
      <detail-header></detail-header>
      <detail-slide></detail-slide>
      <detail-recommond></detail-recommond>
  </div>
</template>

<script type="text/ecmascript-6">
import detailBanner from './components/banner'
import detailHeader from './components/header'
import detailRecommond from './components/recommond'
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
  }
}
</script>

<style scoped lang="stylus">
  .detail
    height 50rem
</style>
