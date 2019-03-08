<template>
  <div class="app">
    <router-view/>
    <FootList v-show="$route.meta.showFooter"></FootList>
  </div>
</template>

<script>
import FootList from './components/FootList/FootList'
export default {
  components:{
    FootList
  } 
}
</script>

<style>

</style>
