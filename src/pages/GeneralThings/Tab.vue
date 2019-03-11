<template>
 <div class="container">
   <div class="tabWrapper" v-if="tabId === 9">
    <div v-if="tabId === 9">
        <ul v-for="(item, index) in recommendData" :key="index">
          <li v-for="(topic, index) in item.topics" :key="index">
           <Style1 v-if="topic.style === 1" :topic="topic"></Style1>
           <Style2 v-if="topic.style === 2" :topic="topic"></Style2>
          </li>
        </ul>
   <ul v-for="(item, index) in autoRecommendData.result" :key="index + '-label'">
          <li v-for="(topic, index) in item.topics" :key="index">
           <Style1 v-if="topic.style === 1" :topic="topic"></Style1>
           <Style2 v-if="topic.style === 2" :topic="topic"></Style2>
          </li>
          
        </ul>
    </div>
  </div>
   
    <div v-if="tabId === 4">
        <ul v-for="(item, index) in recommendData" :key="index">
          <li v-for="(topic, index) in item.topics" :key="index">
           <Style1 v-if="topic.style === 2" :topic="topic"></Style1>
           <Style2 v-if="topic.style === 1" :topic="topic"></Style2>
          </li>
        </ul>
    </div>
    <div v-if="tabId === 5">
        烤箱
    </div>
    <div v-if="tabId === 7">
        <shaidan></shaidan>
    </div>
    <div v-if="tabId === 6">
        <ul v-for="(item, index) in recommendData" :key="index">
        <li v-for="(topic, index) in item.topics" :key="index">
           <Style1 v-if="topic.style === 2" :topic="topic"></Style1>
           <Style2 v-if="topic.style === 1" :topic="topic"></Style2>
          </li>
        </ul>
    </div>
 </div>
</template>

<script>
import Style1 from '../../components/Style1/Style1'
import Style2 from '../../components/Style2/Style2'
import shaidan from '../../components/shaidan/shaidan'
 import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
    
 data() {
  return {
autoGetDataNum:1,
  }
 },
 mounted(){
    if (this.tabId === 9) {
        this.$store.dispatch('getRecommendData')
      }
      this.$nextTick(() => {
        let oScroll = new BScroll(".tabWrapper", {
          bounce: false,
          probeType: 2,
          pullUpLoad: true,//上拉加载
          scrollX: false,
          click: true
        });
        oScroll.on("pullingUp", () => {
          this.autoGetDataNum++;
          console.log(this.autoGetDataNum)
          if (this.tabId === 9) {
            this.$store.dispatch('getAutoRecommendData', {page: this.autoGetDataNum, size: 5})
          }
          oScroll.finishPullUp();//这个方法可以多次刷新
        });
         oScroll.refresh();
      })
      
 },
 components: {
Style1,
Style2,
shaidan
 },
 computed: { 
     ...mapState({
        recommendData: state => state.topic.recommendData,
        autoRecommendData: state => state.topic.autoRecommendData,
        tabs: state => state.topic.tabs,
      }),
      // 得到tabId
      tabId () {
        if (this.$route.params.id === '0') return 9
        else if (this.$route.params.id === '1') return 4
        else if (this.$route.params.id === '2') return 5
        else if (this.$route.params.id === '3') return 7
        else if (this.$route.params.id === '4') return 6
      }
    },
    watch: {
         tabId () {
        if (this.tabId === 9) {
          this.$store.dispatch('getRecommendData')
          this.$store.dispatch('getAutoRecommendData', {page: 1, size: 5})
        } 
      },
    }    
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.container
   margin-top 6rem
  .tabWrapper
    margin-top 2rem
    height 16rem
    margin-bottom 1.30667rem
    
    .tabContent
      width 100%
</style>
