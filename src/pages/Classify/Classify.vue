<template>
  <div>
    <div class="headertop">
      <div class="serach">
        <div class="icon"></div>
        <div class="searchinfo">搜索好物品  有10000件商品等着你</div>
      </div>
    </div>
    <div class="contents">
       <div class="leftList">
          <ul class="content"> 
           <li class="cateListItem" @click="loveList(index)" :class="{active:index===num}"   v-for="(categoryItem, index) in cateList.categoryL1List":key="index">
             {{categoryItem.name}}
          </li>
          </ul>
       </div>
       <div class="rightList" >
         <router-view :data="datass"></router-view>
       </div>
   </div>
  </div>
</template>
<script>


import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import { setTimeout } from 'timers';
export default {
 data() {
  return {
    datass:'',
    num:'',

  }
 },
 components: {

 },
 mounted(){
   this.$store.dispatch('getCateList')
     this.initScroll()
    
    

 },
 updated(){
   if(this.num){
    
   }else{
     this.loveList(0)
   }
      
    },
 methods:{
     initScroll(){
           this.$nextTick(()=>{
                if(!this.myscroll){
                       this.myscroll = new BScroll('.leftList',{
                           click:true,
                           momentum: true,
                           scrollY: true,
                       })
                }else{
                      this.myscroll.refresh();
                }

           })
     },
     loveList(indexx){
       this.num=indexx
     
       if(this.cateList.categoryL1List){
      console.log(this.cateList.categoryL1List);
      
       this.datass = this.cateList.categoryL1List.find((item,index)=>{
          return indexx===index
        })
        }
     }
 },
 watch:{
   cateList:{
     deep:true,
     handler:function(){
        this.datass = this.cateList.categoryL1List
     }
   }
 },
   computed: {
      ...mapState({
        cateList: state => state.cate.cateList
      })
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .headertop
    position: relative;
    border: none;
    width: 100%;
    position: fixed !important;
    left: 0;
    top: 0;
    z-index: 5;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 2.17333rem;
    padding: 0 2.5rem;
    background-color: white;
    border-bottom 1px solid #eee 
    
    .serach
      width: 80%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      height: 1.34667rem;
      font-size: 0.37333rem;
      background-color: #ededed;
      border-radius: 0.10667rem;
      .icon
        display: inline-block;
        vertical-align: middle;
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-2fb94833aa.png);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: 1.07333rem;
        height: 1.07333rem;
        margin-right: 0.13333rem;
  .contents 
    height 38rem
    width 100%
     
    .leftList
      margin-top 2.17333rem;
      width 20%
      height 38rem
      border-right 1px solid #eee
      float left
       
      .content
        width 100%
        height 41rem
        li
          margin-top 0.6rem
          width 90%
          height 2rem
          line-height 2rem
          text-align center
          border-bottom  1px solid #eee
          font-size 0.6rem
      .active
        border-left   0.5rem solid #b4282d  
        color #b4282d  
        font-size 0.6rem   
    .rightList
      margin-top 2.17333rem;
      width 79%
      height 39rem
      float right
            
</style>