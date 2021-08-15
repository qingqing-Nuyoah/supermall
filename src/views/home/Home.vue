<template>
<div id="home" class="wrapper">
<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
 <tab-control @tabClick="tabClick"
             :titles="['流行','新款','精选']" 
              ref="tabControl1" 
              class="tab-control" v-show="isTabFixed"
            />
<scroll class="content" 
        ref="scroll" 
        :probe-type="3" 
        @scroll="contentScroll"
        :pull-up-load="true" @pullingUp="loadMore">
 <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
    <recommend-view :recommends="recommends"/>
    <feature-view />
    <tab-control @tabClick="tabClick"
             :titles="['流行','新款','精选']" 
              ref="tabControl2" />
    <good-list :goods="showGoods"/>
 
</scroll>

 <back-top @click.native="backClick"  v-show="isShowBackTop"/>
</div>
  
</template>

<script>

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView.vue'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from "components/comtent/tabControl/TabControl.vue";
import GoodList from 'components/comtent/goods/GoodList.vue'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from '../../components/comtent/backTop/BackTop.vue'



import {getHomeMultidata,getHomeGoods} from 'network/home'
import {debcounce} from 'common/utoils'



export default {
  name:'Home',
  components:{
   HomeSwiper,
   RecommendView,
   FeatureView,
   NavBar,
   TabControl,
   GoodList,
   Scroll,
   BackTop

  
},
data(){
   return{
    banners:[],
    recommends:[],
    goods:{
      'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
      'sell':{page:0,list:[]},
    },
    currentType:'pop',
    isShowBackTop:false,
    tabOffsetTop:0,
    isTabFixed:false,
    saveY:0
    
   }
   
 },
 computed:{
   showGoods(){
     return this.goods[this.currentType].list
   }
 },
 destroyed(){
   console.log('destroyed');
 },
 activated(){
    this.$refs.scroll.refresh()
  this.$refs.scroll.scrollTo(0, this.saveY, 0)

 },
 deactivated(){
   this.saveY=this.$refs.scroll.getScrollY()
   console.log('deactivated');
 },
 created(){
// 请求多个数据
    this.getHomeMultidata(),
  //2. 请求商品数据
     this.getHomeGoods('pop'),
     this.getHomeGoods('new'),
     this.getHomeGoods('sell')

  
    },
    mounted(){
      //图片加载的事件监听
      const refresh= debcounce(this.$refs.scroll.refresh,200)
       this.$bus.$on('homeItemImageLoad',function () {
         refresh()
         
       })

     
      //  
    },
 methods:{
 
  //  事件监听相关的方法/  
  tabClick(index){
  switch (index) {
    case 0:
      this.currentType='pop';
      break;
      case 1:
      this.currentType='new';
      break;
      case 2:
      this.currentType='sell';
      break;
   }
   this.$refs.tabControl1.currentIndex=index;
   this.$refs.tabControl2.currentIndex=index;
 },
   backClick(){
     console.log('backClick');
     this.$refs.scroll.scrollTo(0,0)
  
   },
   contentScroll(position){
    //  console.log(position);
    this.isShowBackTop = (-position.y) > 1000

    this.isTabFixed= (-position.y) > this.tabOffsetTop

   },
   loadMore(){
    this.getHomeGoods(this.currentType)

    this.$refs.scroll.scroll.refresh()
   },
  swiperImageLoad(){

    //  获取tabcontrol的offsettop
      this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop;
  },

  // /网络请求相关的方法/  
   getHomeMultidata(){
     getHomeMultidata().then(res=>{
       this.banners=res.data.banner.list;
       this.recommends=res.data.recommend.list;
  })

   }, 
   getHomeGoods(type){
      const page =this.goods[type].page + 1
      getHomeGoods(type,page).then(res=>{
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page+=1
     
     this.$refs.scroll.finishPullUp()
  })

   }

 }




}
</script>

<style scoped>
#home{
  height: 100vh;
  /* padding-top: 44px; */
  position: relative;
 
}
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
 }

.content {
  overflow: hidden;
 position: absolute;
 top: 44px;
 bottom: 49px;
 left: 0;
 right: 0;
}

.tab-control{
  position: relative;
  z-index: 9;
}
/* .content{
  height:calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */

</style>