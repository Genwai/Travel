<template>
  <div class="recommend border-bottom">
      <div class="title">
          <span class="love"><img src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="爱心哦"></span>
          <h1 class="title">猜你喜欢的</h1>
      </div>
      <div class="recommend-container">
          <div class="recommend-wrapper border-bottom" v-for="item in recommendList" >
              <div class="recommend-img">
                  <img :src="item.imgUrl" alt="">
                  <span class="today-order">
                      可订今日
                  </span>
              </div>
              <div class="recommend-right">
                  <h1 class="title">{{item.title}}</h1>
                  <div class="star-comment">
                      <span class="star">star</span>
                      <span class="comment">1077条评论</span>
                  </div>
                  <div class="price-place">
                      <span class="price">￥<em>25</em>起</span>
                      <span class="place">思明区</span>
                  </div>
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
        recommendList:Array
    },
  data() {
    return {
    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
    // @import '../../../assets/style/vareble.styl'
    @import '~@/assets/style/mixin.styl'
    .recommend
        .title
            padding .14rem 0 .13rem
            .love
                display inline-block
                margin-left 0.16rem
                vertical-align middle 
                img 
                    width 0.3rem
                    height 0.3rem
            .title
                display inline-block
                vertical-align middle
                font-size .32rem
        .recommend-container
            .recommend-wrapper
                padding .2rem
                display flex 
                &::before
                    border-bottom 1px solid #e0e0e0
                    margin-left 0.2rem
                &:last-child
                    &::before
                        border-bottom none 
                .recommend-img
                    position relative
                    display inline-block
                    vertical-align top 
                    flex 0 0 2rem
                    img 
                        width 2rem
                        height 2rem
                    .today-order
                        position absolute
                        top 0
                        left 0
                        background  url('https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png')
                        background-repeat no-repeat
                        background-size 100%
                        color #ffffff
                        width 1.2rem
                        font-size 0.14rem
                        line-height 0.35rem
                        height 0.35rem
                        text-indent 0.2em
                .recommend-right
                    display inline-block
                    vertical-align top
                    margin-left 0.22rem
                    flex 1
                    .title
                        height 0.44rem
                        line-height 0.44rem
                        color #212121
                        font-size .32rem
                    .star-comment
                        height 0.34ram
                        margin-bottom 0.22rem
                        .star
                            margin-right 0.22rem
                            width 0.56rem
                        .comment
                            color #616161
                            font-size 0.24rem
                            line-height 0.34rem
                            height 0.34rem
                    .price-place
                        margin-top 0.32rem
                        position relative
                        .price
                            display inline-block
                            vertical-align top 
                            color #ff8300
                            em 
                                font-size 0.40rem
                        .place
                            position absolute
                            bottom 0
                            right 0.22rem
                            font-size .24rem
                            color #616161
                            line-height 0.4rem
                            // white-space nowrap
                            // overflow hidden
                            // text-overflow ellipsis
                            // width 60px
                            whiteSpace(60px)
                            text-align right 
                    .make-feature
                        margin-top .48rem
                        margin-right .24rem
                        font-size .24rem
                        color #f55
                        padding .04rem .1rem
                        line-height .34rem
                        .text
                            whiteSpace(215px)
                        





</style>
