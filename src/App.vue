<template>
  <div id="app">
  <keep-alive exclude="Detail">
    <router-view/></keep-alive>
  <mian-tab-bar/>
 </div>
</template>

<script>

import MianTabBar from 'components/comtent/mianTabbar/MianTabBar'
export default {
  name: 'App',
  components:{
   MianTabBar

  }
}
</script>

<style>
  @import "assets/css/base.css"



</style>