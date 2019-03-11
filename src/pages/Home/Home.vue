<template>
<!-- 总页面div -->
    <div class="Home">
        <!-- 头部 -->
        <div class="header-warper">
            <div class="header">
                <h1 class="logo"></h1>
                    <div class="serach">
                        <div class="icon"></div>
                        <div class="searchinfo">搜索商品共19966件商品</div>  
                    </div>
                    <div class="denglu">登陆</div>
            </div>
            <!-- 头部横向 -->
            <div class="header-nav clearfloat">
             <div class="header-navsomecl">
                <div class="nav-somecl">
                  <a href="##">推荐</a>
                  <a href="##">居家</a>
                  <a href="##">鞋包配饰</a>
                  <a href="##">服装</a>
                  <a href="##">电器</a>
                  <a href="##">婴童</a>
                  <a href="##">饮食</a>
                  <a href="##">洗护</a>
                  <a href="##">餐厨</a>
                  <a href="##">文体</a>
                  <a href="##">特色区</a>
                  <a href="##">--</a>
                  <a href="##">--</a>
                  <a href="##">--</a>
                  <a href="##">--</a>
                  <a href="##">--</a>
                </div>
              </div>
              <!-- 遮罩层和白色div -->
              <div class="buto  iconfont icon-liebiaofenlei" @click="isShowS">
                  
              </div>
              
            </div>
            <div class="whiteclss"  :style="isShow ? 'display:block':'display:none' "  >
                    <span class="pindao">全部频道</span>
                    <span class="jiantou iconfont icon-liebiaofenlei" @click="isShowS"></span>
                    <a href="##" class="a12" >推荐</a>
                    <a href="##">居家</a>
                    <a href="##">鞋包配饰</a>
                    <a href="##">服装</a>
                    <a href="##">电器</a>
                    <a href="##">婴童</a>
                    <a href="##">饮食</a>
                    <a href="##">洗护</a>
                    <a href="##">餐厨</a>
                    <a href="##">文体</a>
                    <a href="##">特色区</a>
                    <div class="zhengzhao"></div>
                  </div>
        </div>
    <!-- 主体 -->
      <div class="content">
        <!-- 轮播图 -->
      <div class="lunbo">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt=""></div>
              <div class="swiper-slide"><img  src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt=""></div>
                <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt=""></div>
                 <div class="swiper-slide"><img  src="https://yanxuan.nosdn.127.net/791dda3ae432212164b1668b25fbd11c.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt=""></div>
                  <div class="swiper-slide"><img  src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt=""></div>
                   <div class="swiper-slide"><img  src="https://yanxuan.nosdn.127.net/72d052bfced137a39f0680174f2a709f.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt=""></div>
                    <div class="swiper-slide"><img  src="https://yanxuan.nosdn.127.net/4d078ea6e81cbf0fd128ef1b255bd6e2.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt=""></div>
                    <div class="swiper-slide"><img  src="https://yanxuan.nosdn.127.net/defcddd6a2241b217da7c957da755981.jpg?imageView&amp;quality=75&amp;thumbnail=750x0" alt=""></div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        
      <div class="fengcai">
        <div class="slogon-all slogon-left iconfont icon-liebiaofenlei"><i></i> <span>网易自营品牌</span></div>
        <div class="slogon-all slogon-center iconfont icon-liebiaofenlei"><i></i> <span>30天无忧退货</span></div>
        <div class="slogon-all slogon-right iconfont icon-liebiaofenlei"><i></i> <span>48小时快速退款</span></div>
      </div> 
      <ul class="showNav">
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" lazy="loaded"> <span >居家</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png" src="http://yanxuan.nosdn.127.net/855a0ee7410f534f3db3f7f3a687c153.png" lazy="loaded"> <span >鞋包配饰</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png" src="http://yanxuan.nosdn.127.net/42b4ab968ae5b0f38e608131fb68a095.png" lazy="loaded"> <span >服装</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png" src="http://yanxuan.nosdn.127.net/40e494813fae78a483483d32fd7338b1.png" lazy="loaded"> <span >电器</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png" src="http://yanxuan.nosdn.127.net/8fab9e34dd0f078fc85dedfa8478b3d5.png" lazy="loaded"> <span >婴童</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png" src="http://yanxuan.nosdn.127.net/449019db4190bf9ae98b7f2d62d42e26.png" lazy="loaded"> <span >饮食</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png" src="http://yanxuan.nosdn.127.net/50acb3ffe87d9ef77834eb379fe017cc.png" lazy="loaded"> <span >洗护</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png" src="http://yanxuan.nosdn.127.net/78616d875a47d3f4639f8448775b138e.png" lazy="loaded"> <span >餐厨</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png" src="http://yanxuan.nosdn.127.net/21fd4a2a1cf38ce43c2b23825e5508a8.png" lazy="loaded"> <span >文体</span></li>
        <li ><img  alt="" data-src="http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png" src="http://yanxuan.nosdn.127.net/073855a1da7a21bf3cab628b99688cc1.png" lazy="loaded"> <span >特色区</span></li>
      </ul>
      <div  class="bossRecommen">
        <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt=""></div>
        <ul  class="shoppingGuide">
        <li  class="shoppingGuide-item">
          <div  class="title">实时好评榜</div> 
          <div  class="desc">精选优质好物</div> 
          <img  alt="" data-src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" lazy="loaded">
          <img  alt="" data-src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" lazy="loaded"></li>
          <li  class="shoppingGuide-item">
            <div  class="title">新品热销榜</div> 
            <div  class="desc">好物抢先体验</div> 
            <img  alt="" data-src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png" src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png" lazy="loaded">
            <img  alt="" data-src="http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png" src="http://yanxuan.nosdn.127.net/77bf1ff658f8557391f1b3204cb8ab3b.png" lazy="loaded"></li>
            <li  class="shoppingGuide-item"><div  class="title">严选线下店首家</div> 
            <div  class="desc">体验选式美学</div> 
            <img  alt="" data-src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png" src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png" lazy="loaded">
            <img  alt="" data-src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png" src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png" lazy="loaded"></li>
            <li  class="shoppingGuide-item">
              <div  class="title">12月必买好物</div>
               <div  class="desc">冬日小确幸指南</div> 
               <img  alt="" data-src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" lazy="loaded">
               <img  alt="" data-src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png" src="http://yanxuan.nosdn.127.net/e1d2f0b529eddc9b645997d0f16e9aca.png" lazy="loaded"></li>
         </ul>
         <!-- 私人定制 -->
         <div class="customize">
          <div class="customizetext">私人定制</div>
          <!-- 定制轮播图 -->
          <div class="swiper-container1">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png" alt="">
                  <span class="wenzi1">日本制造美容</span>
                  <span class="wenzi2">$459</span> 
                <img src="http://yanxuan.nosdn.127.net/1985e340c80c8b8b92555368faadbd89.png" alt="">
                <span class="wenzi3">日本制造美容</span>
                  <span class="wenzi4">$459</span> 
                 <img src="http://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png" alt="">
                 <span class="wenzi5">日本制造美容</span>
                  <span class="wenzi6">$459</span> 
              </div>
              <div class="swiper-slide">
                <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png" alt="">
                  <span class="wenzi1">日本制造美容</span>
                  <span class="wenzi2">$459</span> 
                <img src="http://yanxuan.nosdn.127.net/1985e340c80c8b8b92555368faadbd89.png" alt="">
                <span class="wenzi3">日本制造美容</span>
                  <span class="wenzi4">$459</span> 
                 <img src="http://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png" alt="">
                 <span class="wenzi5">日本制造美容</span>
                  <span class="wenzi6">$459</span> 
              </div>
              <div class="swiper-slide">
               <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png" alt="">
                  <span class="wenzi1">日本制造美容</span>
                  <span class="wenzi2">$459</span> 
                <img src="http://yanxuan.nosdn.127.net/1985e340c80c8b8b92555368faadbd89.png" alt="">
                <span class="wenzi3">日本制造美容</span>
                  <span class="wenzi4">$459</span> 
                 <img src="http://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png" alt="">
                 <span class="wenzi5">日本制造美容</span>
                  <span class="wenzi6">$459</span> 
              </div>
              <div class="swiper-slide">
               <img src="http://yanxuan.nosdn.127.net/85b9c081a3859fbff67a54f9222ad068.png" alt="">
                  <span class="wenzi1">日本制造美容</span>
                  <span class="wenzi2">$459</span> 
                <img src="http://yanxuan.nosdn.127.net/1985e340c80c8b8b92555368faadbd89.png" alt="">
                <span class="wenzi3">日本制造美容</span>
                  <span class="wenzi4">$459</span> 
                 <img src="http://yanxuan.nosdn.127.net/38253e4bc864ded67fe49a34fcbf70b0.png" alt="">
                 <span class="wenzi5">日本制造美容</span>
                  <span class="wenzi6">$459</span> 
              </div>
             
            </div>
             <div class="swiper-pagination1" ></div>
          </div>
         </div>
          <!-- 限时购 -->
          <div  class="timeToBuy">
            <div  class="timeToBuy-header">
              <span  class="timeToBuy-title">限时购</span>
               <div  class="countDown ">
                 <span  class="hour">03</span>
                  <span  class="colon">:</span> 
                  <span  class="minutes">04</span>
                   <span  class="colon">:</span> 
                   <span  class="seconds">05</span>
                   </div> <span  class="more ">更多&gt;</span>
                   </div> 
                   <ul  class="timeToBuy-goods clearfloat">
                     <li  class="timeToBuy-good">
                       <img  alt="" data-src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" src="http://yanxuan.nosdn.127.net/ff90462e4d7c7edd01a25f8932e1800f.png" lazy="loaded">
                        <span  class="activityPrice">¥289</span>
                         <span  class="originPrice">¥349</span>
                         </li>
                         <li  class="timeToBuy-good">
                           <img  alt="" data-src="http://yanxuan.nosdn.127.net/fe06530dd35ec5062c1ecaf82d4812d6.png" src="http://yanxuan.nosdn.127.net/fe06530dd35ec5062c1ecaf82d4812d6.png" lazy="loaded">
                            <span  class="activityPrice">¥125</span>
                             <span  class="originPrice">¥179</span>
                             </li>
                             <li  class="timeToBuy-good">
                               <img  alt="" data-src="http://yanxuan.nosdn.127.net/de34d4d8407709f2edd88597d66fcfcb.png" src="http://yanxuan.nosdn.127.net/de34d4d8407709f2edd88597d66fcfcb.png" lazy="loaded">
                                <span  class="activityPrice">¥584</span> 
                                <span  class="originPrice">¥899</span>
                                </li>
                                <li  class="timeToBuy-good">
                                  <img  alt="" data-src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png" src="http://yanxuan.nosdn.127.net/da9c2255909d0d1fe5cabff6d93c03db.png" lazy="loaded"> 
                                  <span  class="activityPrice">¥2079</span> 
                                  <span  class="originPrice">¥2599</span>
                                  </li>
                                  <li  class="timeToBuy-good">
                                    <img  alt="" data-src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png" src="http://yanxuan.nosdn.127.net/8b7bde0b395e2bda54505cf4c3b7880b.png" lazy="loaded">
                                     <span  class="activityPrice">¥29.9</span>
                                      <span  class="originPrice">¥35.8</span>
                                      </li>
                                      <li  class="timeToBuy-good"><img  alt="" data-src="http://yanxuan.nosdn.127.net/2adbaae8403ac4dcac56ebf2ff1a5116.png" src="http://yanxuan.nosdn.127.net/2adbaae8403ac4dcac56ebf2ff1a5116.png" lazy="loaded"> 
                                      <span  class="activityPrice">¥87.2</span>
                                       <span  class="originPrice">¥109</span>
                                       </li>
                                       </ul>
                                      </div>
      </div>
      
      
    </div>
</template>

<script>

import BScroll from 'better-scroll'
export default {
 data() {
  return {
    isShow:false
  }
 },
 mounted(){
   this.initScroll()
   var mySwiper = new Swiper('.swiper-container', {
      autoplay: 5000,//可选选项，自动滑动
      pagination: {
    el: '.swiper-pagination',
    
  },})
  var mySwiper1 = new Swiper('.swiper-container1', {
      autoplay: 5000,//可选选项，自动滑动
      pagination: {
    el: '.swiper-pagination1',
    
  },})

 },
 methods:{
   initScroll(){
           this.$nextTick(()=>{
                if(!this.myscroll){
                       this.myscroll = new BScroll('.header-navsomecl',{
                           click:true,
                           momentum: true,
                           scrollX:true,
                           scrollY:false,
                       })
                }else{
                      this.myscroll.refresh();
                }

           })
     },
     isShowS(){
       this.isShow=!this.isShow
     },
 },
 components: {

 }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.Home
  width 100%
  height 100%
  .header-warper
    position relative
    width 100%
    height 2.5rem
    
    .header
      .logo
        float left
        width: 30%
        height: 1.93333rem;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png);
        display: inline-block;
        margin-top: 0.26667rem;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 4.69333rem 1.4rem;
      .serach
        float left
        margin-top: 0.46667rem;
        width 55%
        height: 1.5rem
        background #eee 
        border-radius 0.2rem 
        .searchinfo
          float left
          line-height 1.5rem
          font-size 0.7rem
          color #666
          text-align center
        .icon
          float left
          display: inline-block;
          vertical-align: middle;
          background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
          background-repeat: no-repeat;
          background-size: 100% 100%;
          width: 0.97333rem;
          height: 0.97333rem;
          margin-right: 0.53333rem;
          margin-left : 0.93333rem;
          margin-top: 0.23333rem;
      .denglu
        float right
        width: 10%;
        height: 0.93333rem;
        line-height: 0.93333rem;
        text-align: center;
        color: #b4282d;
        border: 1px solid #b4282d;
        border-radius: 0.10667rem;
        margin-top: 0.61333rem;
        margin-right: 0.61333rem;
        font-size: 0.32rem;
    .header-nav
      position relative
      width 100%
      overflow hidden
      height 2rem
      
      .header-navsomecl
        width 100%
        float left
        height 0.8rem 
        line-height 2rem 
        .nav-somecl
          width 140%
          float left
          text-align center
          a
            margin-left 0.3rem
            &:nth-child(1)
              border-bottom 0.2rem solid red
      .buto
        position absolute 
        right 0
        top 0px
        width 4rem
        height 100%
        text-align center
        line-height 2rem
        background white   
    .whiteclss
      position absolute
      left 0
      top 2.1rem
      width 100%
      height 12rem
      background white
      z-index 9999
      // display none   
      .pindao
        position absolute  
        left 0.9rem
        top 0.4rem
        font-size 1.0rem
      .jiantou
        position absolute  
        right 0.9rem
        font-size 1.4rem
        top 0.4rem
      a
        float left
        margin-top 2.3rem
        margin-left 0.3rem
        text-align center
        line-height 1.5rem
        width 5rem
        height 1.5rem
        background #EEE
      .a12 
        background red 
    .zhengzhao
      position absolute
      left 0
      top 12rem
      width 100%
      height 1000rem
      background rgba(0,0,0,0.4) 
.content
  width 100%
  height 100rem
  margin-top 2rem
  
  .swiper-container
    .swiper-wrapper
      .swiper-slide
        img 
          width 100%
          height 12rem
      .swiper-pagination-bullets
        background red 
  .fengcai
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0.21333rem 0; 
    .slogon-all
      webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      color: #b4282d;
      font-size: 0.32rem;
      text-align: center; 
  .showNav
    width: 100%;
    height: 13.22667rem;
    li
      width: 3.46667rem;
      height: 6.08rem;
      float: left;
      margin: 0.53333rem 0.56667rem 0;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      img 
        width: 3.46667rem;
        height: 3.46667rem;
      span
        text-align: center;
        color: #333;
        margin-top: 0.73333rem;
        font-size: 0.72rem;
        line-height: 0.58rem;
        white-space: nowrap;
  .bossRecommen
    width: 100%;
    background-color: #fff;
    height: 5.13333rem;
    img
      width: 100%;
      height: 100%;
  .shoppingGuide
    verflow: hidden;
    padding: -0.13333rem 0.4rem 0.4rem 0.34667rem;
    background: #fff;
    .shoppingGuide-item
      background-image: url(url("https://yanxuan.nosdn.127.net/252dbf6cdf6597f5a25940544be765c0.png"));
      background-size: 100% 100%;
      display: block;
      width: 45%;
      height: 7.52rem;
      float: left;
      margin: 1.05333rem 0 0 0.85333rem;
      padding: 0.26667rem 0 0 0.26667rem;
      border-radius: 0.05333rem;
      background #eee
      .title
        color: #333;
        padding-left: 0.13333rem;
        font-size: 1.12667rem;
      .desc
        color: #7f7f7f;
        padding-left: 0.13333rem;
        font-size: 0.72rem;
        margin-top: 0.13333rem;
        margin-bottom: 0.13333rem;
      img
        width:5rem;
        height:5rem;
        float: left;
        margin-right: 0.05333rem;
  .customize
    margin-top 18rem
    margin 18rem auto
    width 90%
    height 0rem
    
    .customizetext
     font-size 1.2rem
    .swiper-container1
      overflow hidden
      .swiper-wrapper
        .swiper-slide
          overflow hidden
          position relative
          margin-top 2rem
          height 8rem
          img 
            
            width 32%
            height 6rem
          .wenzi1
            position absolute 
            top 5rem
            left 0.8rem
            width 30%
            font-size 0.2rem
          .wenzi2
            position absolute 
            top 6rem  
            left 1.2rem
            width 30%
            font-size 0.2rem
          .wenzi3
            position absolute 
            top 5rem
            left 7.8rem
            width 30%
            font-size 0.2rem
          .wenzi4
            position absolute 
            top 6rem  
            left 8.2rem
            width 30%
            font-size 0.2rem
          .wenzi5
            position absolute 
            top 5rem
            left 14.8rem
            width 30%
            font-size 0.2rem
          .wenzi6
            position absolute 
            top 6rem  
            left 15.2rem
            width 30%
            font-size 0.2rem
      .swiper-pagination1
        text-align center
  .timeToBuy
    width: 100%;
    line-height: 1.33333rem;
    padding: 0 0.4rem;
    background: #fff;
    overflow: hidden;
    font-size: 0.42667rem;
    .timeToBuy-header
      width: 100%;
      .timeToBuy-title
        font-size 1.2rem
        float: left; 
      .countDown
        float: left;
        display: inline-block;
        vertical-align: middle;
        margin: -0.02rem 0 0 0.16rem;
        .hour
          display: inline-block;
          font-size: 1.32rem;
          line-height: 1.48rem;
          width: 1.48rem;
          height:1.48rem;
          text-align: center;
          background-color: #333;
          border-radius: 0.05333rem;
          color: #fff;
          margin: 0 0.13333rem;
        .colon
          font-size: 1.87333rem;
        .minutes
          display: inline-block;
          font-size: 1.32rem;
          line-height: 1.48rem;
          width: 1.48rem;
          height: 1.48rem;
          text-align: center;
          background-color: #333;
          border-radius: 0.05333rem;
          color: #fff;
          margin: 0 0.13333rem;
        .colon
          font-size: 1.87333rem;
        .seconds
          display: inline-block;
          font-size: 1.32rem;
          line-height: 1.48rem;
          width: 1.48rem;
          height: 1.48rem;
          text-align: center;
          background-color: #333;
          border-radius: 0.05333rem;
          color: #fff;
          margin: 0 0.13333rem; 
      .more
        float: right;
        display: block;
        font-size: 0.37333rem;
        color: #333;
        line-height: 1.33333rem;
        margin-right: 0.67333rem;  
    .timeToBuy-goods
      line-height 1rem
      .timeToBuy-good
        text-align: center;
        color: #333;
        float: left;
        margin-right: 0.26667rem;
        margin-left: 0.06667rem;
        margin-top: 1.06667rem;
        img
          display: block;
          width: 6.88rem;
          height: 5.88rem;
          background: #f5f5f5;
          border-radius: 4px;
      .timeToBuy-good
        .activityPrice
          font-size: 0.37333rem;
          color: #b4282d;
        .originPrice
          font-size: 0.32rem;
          color: #7f7f7f;
          text-decoration: line-through;
      
            

</style>
