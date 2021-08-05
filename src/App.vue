<template>
  <div id="app">
    <router-view/>
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