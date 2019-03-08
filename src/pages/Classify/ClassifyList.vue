<template>
<div>
   <div class="scroll-wrapper" >
    <div class="scroll">
      <div class="banner">
        <img v-lazy="data.wapBannerUrl" alt="">
      </div>
      <div class="cateList">
        <ul class="list">
          <li class="item" v-for="(subCate, index) in data.subCateList" :key="index">
            <div class="img-wrapper">
              <img v-lazy="subCate.wapBannerUrl" alt="">
            </div>
            <div class="name">{{subCate.name}}</div>
          </li>
        </ul>
      </div>
      </div>
      </div>
 </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
 data() {
  return {
    
  }
 },
 methods:{

 },
 computed: {
   
 },
 props:['data'],
 components: {

 },
watch: {
      data () {
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll('.scroll-wrapper', {
              click: true,
              bounceTime: 800
            })
          }
        })
      }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.scroll-wrapper
  height 15rem
  .scroll
    height 20rem
    .banner
      text-align center
      img
        width 90%
        height 20%
    .cateList
      margin-bottom: 0;
      .list
        .item
          display: inline-block;
          margin-right: .92333rem;
          font-size: 0;
          width: 4.92rem;
          vertical-align: top;
          
          .img-wrapper
            width: 4.92rem;
            height: 4.92rem;
            
            img
              display: block;
              width: 100%;
              background: #fff;
              height: 100%;
          
          .name
            height: .96rem;
            font-size: .96rem;
            text-align: center;
            line-height: .96rem;
            display: block;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;  

</style>
