<template>
<div class="bottom-bar">
  <check-button class="check-all"/>
    <span>全选</span>
  <span class="totel-price">合计：￥</span>
  <span class="buy-product">总计：￥</span>
</div>
  
</template>

<script>
import CheckButton from 'components/comtent/checkButton/CheckButton'
export default {
  name:'CartBottonBar',
  components:{
    CheckButton
  }
  

}
</script>

<style>
.bottom-bar{
  width: 100%;
  height: 40px;
  background-color: #eee;
  position: fixed;
 bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
 }
.bottom-bar .check-all {
    position: absolute;
    line-height: 0;
    left: 12px;
    top: 13px;
}  

.totel-price .buy-product{
  font-size: 16px;
}
.totel-price{
  padding-left: 20px;
}
.buy-product{
  background-color: orangered;
  color: #fff;
  float: right;
  padding: 0 10px;
}
</style>