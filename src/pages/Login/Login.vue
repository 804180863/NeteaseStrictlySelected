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
         <div class="zhanghu">
             <input type="text" placeholder="请输入手机号">
         </div>
         <div class="mima">
             <input type="text" placeholder="请输入短信验证码">
             <button>获取验证码</button>
             <a href="##">遇到问题？</a>
             <span>使用账号密码登陆</span>
         </div>
         <div class="logingo">
             <button>登陆</button>
         </div>
         <div class="iflogingo">
             <button>其他方式登陆</button>
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
    background-color white;
    .topcontent
      padding-top: 4.13333rem;
      padding-bottom: 1.13333rem;
      text-align: center;
      img
        width: 6.57333rem;
        height: 2.2rem;
    .zhanghu
      z-index 11
      text-align center
      width 90%
      height: 7.85333rem
      input 
        z-index 10
        width 90%
        height: 2.85333rem
        line-height: 2.85333rem
        margin-top 1rem
        outline:none;
        border-bottom 1px solid #eee
        margin 0 auto 
        font-size 0.9rem
        border-radius: 4px;
        margin: 4.42667rem auto;
    .mima
      height: 4.85333rem
      text-align center
      position relative
      input 
        
        width 90%
        height: 2.85333rem
        line-height: 2.85333rem
        margin-top 1rem
        outline:none;
        border-bottom 1px solid #eee
        margin 0 auto 
        font-size 0.9rem
        border-radius: 4px;
        margin: 1.42667rem auto;
      button 
        position absolute
        right 2rem
        top 2rem
        font-size: 0.36rem;
        width: 5.3rem;
        height: 1.75rem;
        text-align: center;
        color: #333;
        background: #fff;
        line-height: 0.75rem;
        border: 1px solid #333;
        border-radius: 0.5rem;
      a
        position absolute
        right 19rem
        top 5rem
        font-size 0.36rem;
      span
        position absolute
        right 2rem
        top 5rem
        font-size 0.66rem;
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
    .logingo
      text-align center
      button
        border:1px #b4282d solid;
        width 90%
        height: 2.85333rem
        line-height: 2.85333rem
        margin-top 1rem
        background #b4282d
        text-align center
        margin 0 auto 
        color white
        border-radius: 4px;
        margin: 2.42667rem auto;
    .iflogingo
      text-align center
      button
        border:1px #b4282d solid;
        width 90%
        height: 2.85333rem
        line-height: 2.85333rem
        margin-top 1rem
        background white
        text-align center
        margin 0 auto 
        color black
        border-radius: 4px;
        margin: -3.52667rem auto;
</style>
