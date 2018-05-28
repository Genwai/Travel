<template>
  <div class="detail">
      <detail-banner></detail-banner>
      <detail-header></detail-header>
  </div>
</template>

<script type="text/ecmascript-6">
import detailBanner from './components/banner'
import detailHeader from './components/header'
export default {
  data() {
    return {

    }
  },
  components: {
  detailBanner,
  detailHeader
  }
}
</script>

<style scoped lang="stylus">
  .detail
    height 50rem
</style>
