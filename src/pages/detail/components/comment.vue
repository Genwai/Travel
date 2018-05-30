<template>
  <div class="comment">
      <div class="user-head border-bottom">
          <span class="text">用户评论</span>
      </div>
      <div class="comment-container">
          <div class="comment-top">
              <div class="comment-left">
                  <span class="iconfont">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</span>
              </div>
              <div class="comment-right">
                  <span class="name">w*6</span>
                  <span class="time">2018-05-16</span>
              </div>
          </div>
          <div class="commet-text">
            <common-drop>
              导游丁杨馨非常非常非常棒，真的。从来不点评的我一定要告诉大家，超可爱，超有善，拍照超好，真的是赚到了，非常开心的一次旅行，推荐给你们，良心推荐哦😘
            </common-drop>
          </div>
      </div>
      <div class="comment-pictures border-bottom">
          <div class="commet-context">
                <div class="img-container">
                    <img class="commet-img" src="https://imgs.qunarzz.com/piao/fusion/1801/95/1e125742224b0e02.jpg_228x168_44f39438.jpg" alt="">
                </div>
                <div class="img-container">
                    <img class="commet-img" src="https://imgs.qunarzz.com/piao/fusion/1801/95/1e125742224b0e02.jpg_228x168_44f39438.jpg" alt="">
                </div>
                <div class="img-container">
                    <img class="commet-img" src="https://imgs.qunarzz.com/piao/fusion/1801/95/1e125742224b0e02.jpg_228x168_44f39438.jpg" alt="">
                </div>
                <div class="img-container">
                    <img class="commet-img" src="https://imgs.qunarzz.com/piao/fusion/1801/95/1e125742224b0e02.jpg_228x168_44f39438.jpg" alt="">
                </div>
                <div class="img-container">
                    <img class="commet-img" src="https://imgs.qunarzz.com/piao/fusion/1801/95/1e125742224b0e02.jpg_228x168_44f39438.jpg" alt="">
                </div>
                <div class="img-container">
                    <img class="commet-img" src="https://imgs.qunarzz.com/piao/fusion/1801/95/1e125742224b0e02.jpg_228x168_44f39438.jpg" alt="">
                </div>
          </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import commonDrop from '../components/dropdown'
export default {
  data() {
    return {

    }
  },
  components: {
      commonDrop
  }
}
</script>

<style scoped lang="stylus">
    .comment >>> .border-bottom
        &::before
            border-color #dadada
    .comment
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
    .comment-container
        padding 0 0.2rem 0rem
        line-height 0.6rem
        .comment-top
            display flex 
            justify-content space-between
            height 0.6rem
            margin-top 0.1rem
            .comment-left
                display inline-block
                .iconfont
                    color #ffb436
            .comment-right
                display inline-block
    .comment-pictures
        .commet-context
            padding  0 0.2rem 0.1rem
            display flex
            flex-wrap wrap
            justify-content space-between
            padding-bottom 0.3rem
            .img-container
                width 33.3%
                height 1.4rem
                padding-left 0.1rem
                margin-bottom 0.1rem
                box-sizing border-box
                display inline-block
                .commet-img
                    width 100%
                    height 100%
                    background-size cover

                

</style>
