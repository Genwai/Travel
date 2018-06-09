<template>
  <div class="recommond">
      <div class="recommond-container border-bottom">
          <span class="tickyType"></span> 一日游
      </div>
      <div class="list-container">
          <ul>
              <li v-for="(item,index) in list" class="listItem" @click="handleContainClick($event,index)" v-if="index < itemLength">
                  <div class="Item-top border-bottom" >
                        <div class="Item-left">
                            {{item.detail}}
                        </div>
                        <div class="Item-right" >
                            ￥<span class="number">{{item.price}}</span><span class="name">起</span><span class="iconfont">&#xe61f;</span>
                        </div>
                  </div>
                  <div class="Item-container border-bottom" v-if="index == nowIndex && ItemContainer"  >
                      <div class="Item-container-left">
                          <h1 class="text">老渔港半日游｜南普陀·猫街·沙坡尾·演武观景平台·厦门大学</h1>
                          <div class="contian-img">
                              <img src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png" alt="">可订5月31日
                          </div>
                          <div class="contain-list">
                              <span>条件退</span>
                              <span>无购物</span>
                              <span>已售21</span>
                          </div>
                          <p class="textname">
                              纵四方旅行
                          </p>
                      </div>
                      <div class="prace-button">
                        <div class="price">
                            ￥<span class="number">205</span><span class="name">起</span><span class="iconfont">&#xe61f;</span>
                        </div>
                        <span class="button">查看</span>
                      </div>
                  </div>
                  
              </li>
              <li class="ItemLast" v-show="list.length > 2 && Leave" @click="LeaveProdect">
                  <div class="overleave">
                      查看剩余产品<span class="iconfont">&#xe61f;</span>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  data() {
    return {
        ItemContainer:false,
        list:[
            {
                detail:'【厦门出发】南普陀寺+厦门大学+演武大桥+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游',
                price:'205'
            },
            {
                detail:'【厦门出发】南普陀寺+厦门大学+演武大桥+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游',
                price:'205'
            },
            {
                detail:'【厦门出发】南普陀寺+厦门大学+演武大桥+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游',
                price:'205'
            },
            {
                detail:'【厦门出发】南普陀寺+厦门大学+演武大桥+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游',
                price:'205'
            },
            {
                detail:'【厦门出发】南普陀寺+厦门大学+演武大桥+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游+沙坡尾1日游',
                price:'205'
            }
        ],
        nowIndex:-1,
        itemLength:3,
        Leave:true
    }
  },
  methods: {
    handleContainClick(event,index){

        if(this.ItemContainer){
            this.nowIndex = -1;
        }
        this.nowIndex = index;
        this.ItemContainer= !this.ItemContainer;
    },
    LeaveProdect(){
        this.itemLength = this.list.length;
        this.Leave =false;
    }  
  },
    computed: {
        
    }
}
</script>

<style scoped lang="stylus">
    .recommond >>> .border-bottom
        &::before
            border-color #dadada
    .recommond
        .recommond-container
            padding 0.2rem
            font-size 0.32rem
            height 0.46rem
            line-height 0.46rem
            .tickyType
                background url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.9rem no-repeat
                background-size 0.4rem 3rem
                width 0.36rem
                height 0.36rem
                display inline-block
                vertical-align middle
        .list-container
            .listItem
                line-height 0.48rem
                font-size 0.3rem
                .Item-top
                    position relative
                    padding 0.24rem 0.2rem 0.24rem 0.2rem
                    .Item-left
                        margin-right 1.8rem
                        line-height 0.48rem
                        // display inline-block
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                    .Item-right
                        display inline-block
                        position absolute
                        right 0.2rem
                        bottom 50%
                        transform translate(0,50%)
                        font-size 0.24rem
                        color #ff9800
                        .number
                            font-size 0.38rem
                            // color #9e9e9e
                        .name
                            color #9e9e9e
                            font-size 0.16rem
                        .iconfont
                            color #bbb
                            font-size 0.24rem
                .Item-container
                    line-height 0.4rem
                    font-size 0.28rem
                    color #616161
                    background #f5f5f5
                    padding 0.2rem
                    position relative
                    .text
                        margin-right 1.8rem
                        display inline-block
                    .contian-img
                        height 0.36rem
                        line-height 0.36rem
                        font-size 0.24rem
                        img 
                            width 0.2rem
                            display inline-block
                            vertical-align 0
                            margin-right 0.05rem
                            max-height 0.32rem
                    .contain-list
                        font-size 0.24rem
                        color #00afc7
                        span 
                            display inline-block
                            height 0.32rem
                            font-size 0.2rem
                            line-height 0.32rem
                            white-space nowrap
                            padding 0 0.04rem
                            margin-top 0.08rem
                            border 1px solid #a5e4ec
                            border-radius 0.08rem
                    .textname
                        font-size 0.24rem
                    .prace-button
                        position absolute
                        top 50%
                        right 0.2rem
                        transform translate(0,-50%)
                        .price
                            font-size 0.24rem
                            color #ff9800
                            .number
                                font-size 0.38rem
                                // color #9e9e9e
                            .name
                                color #9e9e9e
                                font-size 0.16rem
                            .iconfont
                                color #bbb
                                font-size 0.24rem
                        .button
                            width value
                            height 0.6rem
                            line-height 0.6rem
                            text-align center
                            color #ffffff
                            border-radius 0.08rem
                            display block
                            background-image linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
            .ItemLast
                height 0.48rem
                line-height 0.48rem
                text-align center
                padding 0.2rem
                font-size 0.28rem
                color #616161  

                        



</style>
