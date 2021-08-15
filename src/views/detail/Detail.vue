<template>
  <div id="detail">
 <detail-nar-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
<scroll class="center" 
       ref="scroll"
       :probe-type="3"
        @scroll="contentScroll">
<detail-swiper :top-images="topImages"/>
  <detail-base-info :goods="goods"/>
  <detail-shop-info :shop="shop"/>
  <detail-goods-info :detail-info="detailInfo"  @imageLoad="imageLoad"/>
  <detail-param-info ref="params"  :param-info="paramInfo"/>
  <detail-common-info ref="common"  :commentInfo="commentInfo"/>
   <good-list  ref="recommend"  :goods="recommend"/>
</scroll>
 <back-top v-show="isShowBackTop" @click.native="backClick"/>
<detail-bottom-bar @addToCart="addToCart"/>

  </div>
</template>

<script>

import DetailNarBar from './childComps/DetailNarBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from  './childComps/DetailBaseInfo.vue'
import DetailShopInfo from  './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import DetailParamInfo from './childComps/DetailParamInfo.vue'
import DetailCommonInfo from './childComps/DetailCommonInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import Scroll from 'components/common/scroll/Scroll.vue'
import GoodList from 'components/comtent/goods/GoodList'
import BackTop from 'components/comtent/backTop/BackTop.vue'



import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail";
import {debcounce} from 'common/utoils'
import {backTopMinxin} from 'common/minxin'



export default {
  name:'Detail',
  components:{
    DetailNarBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommonInfo,
    DetailBottomBar,
    Scroll,
    GoodList,
    BackTop
    
},
minxins:[backTopMinxin],
  data(){
    return{
      iid:null,
      topImages:[],
      goods: {},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      themeTopYs:[],
      getThemmTopY:null,
      currentIndex:0,
      isShowBackTop:false
      
      
}
  },
 
  created(){
    // 获取iid
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res=>{
      const data=res.result
    this.topImages=data.itemInfo.topImages
    this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)

    this.shop=new Shop(data.shopInfo)

    // 保存商品的详情数据
    this.detailInfo=data.detailInfo

    // 获取参数信息
    this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)

   if(data.rate.cRate!==0){
      this.commentInfo=data.rate.list[0]
    }
    // this.$nextTick(()=>{
    //  this.themeTopYs=[]
    // this.themeTopYs.push(0)
    // this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.common.$el.offsetTop)
    // this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
    // console.log(this.themeTopYs);

    // })
    
 }),
  getRecommend().then(res=>{
      this.recommend=res.data.list
   })

  },
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh()
      this.themeTopYs=[]
       this.themeTopYs.push(0)
      this.themeTopYs.push(this.$refs.params.$el.offsetTop-44)
      this.themeTopYs.push(this.$refs.common.$el.offsetTop-44)
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop-44)
      this.themeTopYs.push(Number.MAX_VALUE)
      // console.log(this.themeTopYs);
       },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
    },
    contentScroll(position){
       const positionY=-position.y
      //  console.log(positionY);
      let length=this.themeTopYs.length
    //   for(var i = 0; i < length; i++){
    //   if(this.currentIndex !== i && (( i < length -1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (
    //     i === length - 1 && positionY >= this.themeTopYs[i]))){
    //           this.currentIndex = i;
    //         this.$refs.nav.currentIndex=this.currentIndex
    //  }
    for(var i=0;i<length-1;i++){
      if(this.currentIndex !==i && (positionY >=this.themeTopYs[i] && positionY < this.themeTopYs[i+1] )){
        this.currentIndex = i;
         this.$refs.nav.currentIndex=this.currentIndex
      }
    }
    
    this.isShowBackTop=position.y <= -1000
  
  

     },
    backClick() {
            this.$refs.scroll.scrollTo(0, 0)

        },
   addToCart(){
    const product={}
   product.image=this.topImages[0]
   product.title=this.goods.title
   product.desc=this.goods.desc
   product.price=this.goods.realPrice
   product.iid=this.iid

   this.$store.dispatch('addCart',product)
    
   }
      
      
    
  }
 
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.center{
  height: calc(100% - 44px - 49px);
  background-color: #fff;
  overflow: hidden;
}
.detail-nav{
  position: relative;
  z-index:9;
  background-color: #fff;
}
</style>