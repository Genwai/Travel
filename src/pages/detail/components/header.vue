<template>
  <div>
    <div class="header" :style="headerStyle" ref="header" v-show="headerShow">
      <div class="header-icon-back" @click="detailBack">
        <span class="iconfont icon-back">&#xe624;</span>
      </div>
      <div class="header-text">
        世贸云上厦门观光厅
      </div>
   </div>
   <div class="BaseInfo">
     <div class="baseInfo-top">
       <div class="baseInfo-left">
         <div class="praise">
           <span class="number">5.0</span><span>分</span><span class="good">超赞</span>
         </div>
         <div class="comment-content">
           <span class="commet">2114条评论</span>
           <span class="">3条攻略</span>
         </div>
         <div class="base-left">
           <span class="iconfont">&#xe61f;</span>
         </div>
       </div>
       <div class="baseInfo-right">
         <div class="right-text">
           景点简介
         </div>
         <div class="right-tiem">
           开放时间、贴士
         </div>
         <div class="base-right">
           <span class="iconfont">&#xe61f;</span>
         </div>
       </div>
     </div>
     <div class="baseInfo-position">
       <div class="position-icon">
         <span class="iconfont">&#xe60f;</span>
       </div>
       <div class="text">
        福建省厦门市思明区大学路世茂海峡大厦B塔
       </div>
       <div class="base-right">
           <span class="iconfont">&#xe61f;</span>
         </div>
     </div>
   </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      headerStyle:{
        opacity:0
      },
      headerShow:false
    }
  },
  methods: {
    detailBack(){
         this.$router.push({path:'/'})
    },
    handleScroll(){
      const height = document.documentElement.scrollTop;
      let opacity = height / 120 ;
      if(height > 40){
        this.headerShow =true;
        opacity = opacity >=1 ? 1: opacity;
        this.headerStyle.opacity =  opacity;
      }else{
        this.headerShow =false;
      }
      console.log(height)
    }
  },
  mounted () {
    window.addEventListener('scroll',this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  .header
    position fixed
    top 0px
    left 0px
    width 100%
    height .88rem
    line-height 0.88rem
    color #ffffff
    display flex 
    background #00bcd4
    font-size 0.32rem
    z-index 20
    .header-icon-back
      width 0.88rem
      height 0.88rem
      line-height 0.88rem
      text-align center
      display inline-block
      font-size 0.32rem
    .header-text
      flex 1
      display inline-block
      text-align center
  .BaseInfo 
    background #ffffff
    border-radius 0.1rem 0.1rem 0 0
    margin-top -0.2rem
    position relative
    z-index 5
    .baseInfo-top
      display flex 
      padding .2rem
      .baseInfo-left
        flex 1
        position relative
        display inline-block
        border-right 1px solid #eeeeee
        .praise
          font-size 0.12rem
          color #ff8300
          line-height 0.44rem
          .number
            font-size 0.44rem
          .good
            margin-left 0.2rem
            font-size 0.28rem
        .comment-content
          color #9e9e9e
          font-size 0.24rem
        .base-left
          position absolute
          bottom 0.3rem
          right 0.2rem
          color #9e9e9e
          font-size 0.24rem
      .baseInfo-right
        flex 1
        position relative
        display inline-block
        padding-left 0.2rem
        .right-text
          line-height 0.44rem
          margin-bottom 0.05rem
        .right-tiem
          color #9e9e9e
          font-size 0.24rem
        .base-right
          position absolute
          bottom 0.3rem
          right 0.2rem
          color #9e9e9e
          font-size 0.24rem
    .baseInfo-position
      padding 0.2rem 0.2rem 0.5rem
      color #212121
      display flex 
      position relative
      .position-icon
        display inline-block
        width 0.4rem
        text-align center
      .text
        display inline-block
        margin-right 0.4rem
        height 0.44rem
        line-height 0.36rem
        padding 0 0.1rem 0 0.1rem
      .base-right
        position absolute
        bottom 0.3rem
        right 0.35rem
        color #9e9e9e
        font-size 0.24rem


</style>
