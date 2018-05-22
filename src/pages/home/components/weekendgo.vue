<template>
  <div class="recommend border-bottom">
      <div class="title">
          <h1 class="title">周末去哪儿</h1>
      </div>
      <div class="recommend-container">
          <div class="recommend-wrapper border-bottom" v-for="item in weekendList">
              <div class="recommend-img">
                  <img :src="item.imgUrl" alt="">
              </div>
              <div class="recommend-right">
                  <h1 class="title">{{item.title}}</h1>
                  <div class="make-feature">
                      <p class="text">{{item.desc}}</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    props: {
        weekendList:{
            type:Array
        }
    },
  data() {
    return {
        recommendList:[
            {
                title:'厦门方特梦幻王国',

            }
        ]
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
    .recommend
        background #f5f5f5
        .title
            padding .14rem 0.13rem
            .title
                display inline-block
                vertical-align middle
                font-size .32rem
        .recommend-container
            // margin-bottom 0.22rem
            .recommend-wrapper
                margin-top 5px
                background #fff
                &:first-child
                    margin-top 0
                .recommend-img
                    position relative
                    img 
                        width 100%
                        height 2rem
                .recommend-right
                    padding .14rem .2rem .2rem .2rem
                    .title
                        height 0.44rem
                        line-height 0.44rem
                        color #212121
                        font-size .28rem
                        padding-right .14rem
                    .make-feature
                        padding-right .14rem
                        font-size 0.24rem
                        color #616161
                        line-height .42rem
                        





</style>
