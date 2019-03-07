<template>
 <div class="container">
    <div  class="cart-header">
    <span  class="cart-title">购物车</span> 
    <div class="getCoupon">领券</div>
    </div>
    <div class="topthree">
        <span>30天无忧退货</span>
        <span>48小时快速退款</span>
        <span>满88包邮</span>
    </div>
    <div class="cart-img">  
    </div>
    <div class="goLogin">
         <div class="hint">去添加点什么</div>
         <button @click="goto('/Account')">去登陆</button>
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
    position: fixed;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: #f4f4f4;
    .cart-header
      width: 100%;
      height: 2.8rem;
      line-height: 2.8rem;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #fff;
      text-align: center;
      .cart-title
        font-size: 1.11rem;
      .getCoupon
        position: absolute;
        right: 0.8rem;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        color: #b4282d;
        font-size: 0.9rem;
    .topthree
        margin-top: 3.4rem;
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size 0.8rem
        color #666
    .cart-img
      display: inline-block;
      text-align center
      margin-top: 5rem;
      width: 100%;
      height: 30%;
      background-size: 10.30667rem 9.30667rem;
      background-position: center center;
      background-repeat: no-repeat;
      background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
    .goLogin
      text-align center
      .hint
        margin-bottom: 0.66667rem;
        line-height: 1;
        font-size:1.33rem;
        color: #999;
      button 
        margin: auto;
        width: 11.4rem;
        height: 3.22667rem;
        font-size: 1.1rem;
        line-height: 3.22667rem;
        color: #fff;
        background-color: #b4282d;
        border-radius: 0.04rem;
        
</style>
