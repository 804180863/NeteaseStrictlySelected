<template>
 <footer class="footer_guide border-1px">
  <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/Home'}"  @click="goto('/Home')">
    <span class="item_icon">
      <i class="iconfont icon-iconfont11"></i>
    </span>
    <span>首页</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/Classify'}" @click="goto('/Classify')">
    <span class="item_icon">
      <i class="iconfont icon-liebiaofenlei"></i>
    </span>
    <span>分类</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/GeneralThings'}"  @click="goto('/GeneralThings')">
    <span class="item_icon">
      <i class="iconfont icon-fangdajing" ></i>
    </span>
    <span>识物</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/ShoppingCart'}"  @click="goto('/ShoppingCart')">
    <span class="item_icon">
      <i class="iconfont icon-gouwuche1"></i>
    </span>
    <span>购物车</span>
  </a>
  <a href="javascript:;" class="guide_item" :class="{on:$route.path==='/Account'}" @click="goto('/Account')">
    <span class="item_icon">
      <i class="iconfont icon-geren"></i>
    </span>
    <span>个人</span>
  </a>
</footer>
</template>

<script>
export default {
 data() {
  return {

  }
 },
 components: {

 },
 methods: {
   //跳转路由方法
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footer_guide
    border-top 1px solid #e4e4e4
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
