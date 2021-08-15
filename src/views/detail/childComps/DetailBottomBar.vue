<template>
<div class="bottom-bar">
  <div class="bar-item  bar-left">
    <div>
      <i  class="icon service"></i>
      <div class="text">客服</div>
    </div>
    <div>
      <i  class="icon shop"></i>
      <div class="text">店铺</div>
    </div>
    <div>
      <i  class="icon select"></i>
      <div class="text">收藏</div>
    </div>

  </div>
  <div class="bar-item bar-right">
    <div class="cart"  @click="addToCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</div>
  
</template>

<script>
export default {
  name:'DetailBottomBar',
  methods:{
    addToCart(){
     this.$emit('addToCart')
    }
  }


}
</script>

<style scoped>
.bottom-bar{
  height: 49px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
   /* bottom: 58px; */
   display: flex;
   text-align: center;
  }
 
 .bar-item{
    display: flex;
    flex: 1;
    
}

.bar-item>div{
  flex: 1;
}
.bar-left .text{
  font-size: 13px;
}
.bar-left .icon{
  display: block;
   width: 22px;
   height: 22px;
   margin: 3px auto 3px;
   background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;

}
.bar-left .service{
  background-position: 0 -54px;
}
.bar-left .shop{
  background-position: 0 -98px;
}
.bar-right{
  font-size: 15px;
  line-height: 49px;
 color: #fff;
  
}
.bar-right .cart{
   background-color: #ffe817;
  color: #333;
 
}
.bar-right .buy{
  background-color: #f69;

}
</style>