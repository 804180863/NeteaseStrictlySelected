<template>
  <div class="topic-wrapper">
    <!-- 识物界面头部 -->
    <div class="header-wrap">
      <div class="header">
        <div class="header-left">
          <div class="goHome" @click="$router.replace('/')">
            <i class="iconfont icon-iconfont11"></i>
          </div>
        </div>
        
        <div class="title">
          <span class="main-title">发现</span>
          <span class="subTitle">甄选家</span>
        </div>
        <div class="header-right">
          <div class="goCart" @click="$router.replace('/ShoppingCart')">
            <i class="iconfont icon-gouwuche1"></i>
          </div>
          <div class="goSearch">
            <i class="iconfont icon-fangdajing"></i>
          </div>
        </div>
      </div>
      <div class="header-nav-wrapper">
        <ul class="header-nav">
          <li class="header-nav-item" v-for="(tab, index) in tabs" :key="index" :class="{active: +$route.params.id === index}">
            <RouterLink :to="`/GeneralThings/tab/${index}`">
              <span>{{tab.tabName}}</span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <!--识物界面主体内容-->
    <div class="topic-content">
      <RouterView/>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
       mounted () {
      this.$store.dispatch('getTabs')
    },
  computed: {
      ...mapState({
        tabs: state => state.topic.tabs
      })
  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .header-wrap
      position fixed
      left 0
      top 0
      z-index 200
      width: 100%
      background-color #fafafa
      
      // 头部标题
      .header
        width: 100%;
        height: 3rem
        position: fixed !important;
        left: 0;
        top: 0;
        z-index: 100;
        background-color: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        -webkit-box-sizing: border-box;
        margin: auto;
        overflow: hidden;
        padding: 0 .26rem 0 .24rem;
        
        .header-left
          float: left;
          height: 3rem;
          line-height 3rem
          padding-right: .02rem;
          .goHome
            float: left;
            
            .iconfont
              display: block;
              font-size 1.36rem
        
        .title
          position: absolute;
          width: 8.2rem;
          height: 100%;
          line-height: 2.8rem;
          text-align: center;
          left: 50%;
          top: 0;
          margin-left: -4.5rem;
          font-size: .28rem;
          color: #7F7F7F;
          z-index: 1;
          
          .main-title
            font-size: 1.28rem;
            color: #b4282d;
            font-weight: bold;
            padding: 0 .16rem;
            vertical-align: middle;
          
          .subTitle
            font-size: 0.18rem;
            padding: 0 .16rem;
            vertical-align: middle;
        
        .header-right
          float: right;
          height: 3rem;
          line-height 3rem
          padding-right: 0.02rem;
          
          .goCart
            margin-right 0.2rem
            float: right;
            
            .iconfont
              display: block;
              font-size 1.36rem
          
          .goSearch
            margin-right 1.3rem
            float: right;
            
            
            .iconfont
              display: block;
              font-size 1.36rem
  
  
      // 头部导航
      .header-nav-wrapper
        width 100%
        height: 2.0rem;
        line-height 2.0rem
        margin-top 3rem
        background: #fafafa;
        border-bottom: .01rem solid #d9d9d9;
        .header-nav
          display flex
          height: 1.8rem;
          .header-nav-item
            flex 1
            font-size: 0.66rem;
            text-align center
            &.active
              color: #B4282D;
              border-bottom: .04rem solid #B4282D;
              span
                color: #B4282D;
</style>
