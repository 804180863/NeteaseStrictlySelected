<template>
 <div class="container">
     
     <div class="header-warrper">
        <div class="headerTop">
            <div class="headerleft" @click="goto('/Home')"></div>
         <i class="logo"></i>
         <div class="headerright"></div>
         <div class="searchtop"></div>
        </div>
     </div>
     <div class="content-warrper">
         <div class="topcontent">
             <img data-v-2a2af8af="" src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
         </div>
         <div class="phonelogin" @click="$router.push('/Account/Login')">
             <span class="iconfont icon-shouji"  >手机号码登陆</span>
         </div>
         <div class="youxianglogin">
             <span class="iconfont icon-youxiang">邮箱账号登陆</span>
         </div>
         <router-view></router-view>
         <div class="shoujihao">手机号快捷注册></div>
         <div class="footroot">
             <span class="iconfont icon-weixin">微信</span>|
             <span class="iconfont icon-iconfontqq">QQ</span>|
             <span class="iconfont icon-weibo">微博</span>
         </div>
     </div>
     
 </div>
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
    goto (path) {
      this.$router.replace(path)
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
  height 100%
 
  .header-warrper
    width: 100%;
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 100;
    background-color: #fafafa;
    -webkit-box-sizing: border-box;
    margin: auto;
    overflow: hidden;
    padding: 0.1rem 0.4rem 0 0.4rem;
    text-align: center;
    .headerTop
        .logo
            width: 6.29333rem;
            height: 1.72rem;
            margin-left: 2.8rem;
            margin-top: 0.8rem;
            background-position: 0 -3.70667rem;
            display: inline-block;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
            background-repeat: no-repeat;
            background-size: 5.29333rem 11.6rem;
        .headerleft
            float left
            width: 2.29333rem;
            height: 1.72rem;
            margin-left: 0.8rem;
            margin-top: 0.4rem;
            background-position: 0 -1.70667rem;
            display: inline-block;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
            background-repeat: no-repeat;
            background-size: 5.29333rem 11.6rem;
        .headerright
            float right
            width: 2.29333rem;
            height: 1.72rem;
            margin-left: 0.8rem;
            margin-top: 0.7rem;
            background-position: 0 -0.2993rem;
            display: inline-block;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
            background-repeat: no-repeat;
            background-size: 5.29333rem 11.6rem;
        .searchtop
            float right
            width: 2.29333rem;
            height: 1.72rem;
            margin-left: 0.8rem;
            margin-top: 0.7rem;
            background-position: 0 -9.9993rem;
            display: inline-block;
            background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s9f33319f5a-164b37c9ce.png);
            background-repeat: no-repeat;
            background-size: 5.29333rem 11.6rem       
  .content-warrper
    width 100%
    height 100%
    background-color #f2f5f4;
    .topcontent
      padding-top: 8.13333rem;
      padding-bottom: 2.13333rem;
      text-align: center;
      img
        width: 10.57333rem;
        height: 3.2rem;
    .phonelogin
      width 90%
      height: 2.85333rem
      line-height: 2.85333rem
      margin-top 1rem
      background #b4282d
      text-align center
      margin 0 auto 
      color white
      border-radius: 4px;
      margin: 4.42667rem auto;
    .youxianglogin
      width 90%
      height: 2.85333rem
      line-height: 2.85333rem
      margin-top 1rem
      background #f2f5f4
      border solid 1px #b4282d
      text-align center
      margin 0 auto 
      color #b4282d
      border-radius: 4px;
      margin: -3.5rem auto;
    .shoujihao
      width 90%
      height: 2.85333rem
      line-height: 2.85333rem
      margin-top 1rem
      background #f2f5f4
      text-align center
      margin 0 auto 
      color black
      font-size 0.6rem
      border-radius: 4px;
      margin: 3.5rem auto;
    .footroot
      width 90%
      height: 1rem
      background #f2f5f4
      text-align center
      margin 0 auto 
      color black
      font-size 0.6rem
      border-radius: 4px
      margin: 30% auto
      font-size 1rem
      padding: 0;
      border: 0;
      color #7f7f7f
      font-size: 100%;
      font-weight: normal;
      vertical-align: baseline;
</style>
