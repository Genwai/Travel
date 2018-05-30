<template>
  <div class="more">
       <div class="user-head border-bottom">
          <span class="text">看了该景点的人还看了</span>
       </div>
        <div class="recommend-container">
       
              <router-link to="detail" tag="div" class="recommend-wrapper border-bottom">
              <div class="recommend-img">
                  <img src="http://img1.qunarzz.com/sight/p0/1705/1f/1f6fcb0e306c27fca3.water.jpg_228x168_522edc1f.jpg" alt="">
                  
              </div>
              <div class="recommend-right border-bottom">
                  <h1 class="title">沙坡尾</h1>
                  <div class="Item-right" >
                    ￥<span class="number">205</span><span class="name">起</span>
                  </div>
                  <div class="star-comment">
                      <span class="iconfont">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</span>
                      <span class="comment">1077条评论</span>
                  </div>
                  <div class="price-place">
                     
                    <span class="place">厦门·思明区</span>
                  </div>
              </div>
   
          </router-link>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="stylus">
    .more >>> .border-bottom
        &::before
            border-color #dadada
    .more
        .user-head
            padding 0 0.2rem
            height 0.88rem
            line-height 0.88rem
            font-size 0.3rem
            text-indent 0.2rem
            color #333
            .text
                border-left 0.05rem solid #1ba9ba
                padding-left 0.2rem
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
                        width 1.62rem
                        height 1.62rem
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
                    position relative
                    .title
                        height 0.44rem
                        line-height 0.44rem
                        color #212121
                        font-size .32rem
                    .Item-right
                        position absolute
                        top 0
                        right 0px
                        font-size 0.24rem
                        color #ff9800
                        .number
                            font-size 0.38rem
                        .name
                            color #9e9e9e
                            font-size 0.16rem
                    .star-comment
                        height 0.34rem
                        line-height 0.34rem
                        margin-top 0.22rem
                        color 
                        font-size size
                        .iconfont
                            color #ff9800
                            font-size 0.24rem
                            margin-right 0.3rem
                        .comment
                            font-size 0.20rem
                            color #9e9e9e
                    .price-place
                        margin-top 0.2rem
                        .place
                            font-size 0.20rem
                            color #9e9e9e
                            
    
</style>
