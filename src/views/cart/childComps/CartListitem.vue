<template>
<div class="list-item">
  <div class="item-selector">
    <check-button :is-checked="product.checked" @click.native="checkClick"></check-button>
 </div>
  
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
        <div class="item-desc">{{product.desc}}</div>
        <div class="info-bottom">
          <div class="item-price left">￥{{product.price}}</div>
          <div class="item-count rights">x{{product.count}}</div>
 </div>
    
  
   
</div>
</div>
</template>

<script>
import CheckButton from 'components/comtent/checkButton/CheckButton'
export default {
  name:'CartListItem',
  components:{
    CheckButton
  },
  props:{
    product:{
      type:Object,
      default (){
        return {}
      }
    }
  },
  methods:{
    checkClick(){
      this.product.checked = !this.product.checked
    }
  }

}
</script>

<style scoped>
.list-item{
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

.item-selector {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
.item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
 
 }
.item-img{
  padding: 5px;
 
}
.item-img img{
  display: block;
   width: 80px;
  height: 100px;
  border-radius: 5px;
}
.item-info{
  font-size: 17px;
  padding: 5px 10px;
  position: relative;
  color: #333;
  overflow: hidden;
}
.item-desc{
  font-size: 12px;
  padding-top: 10px;
  color: #666;
}
.info-bottom{
  margin-top: 10px;
  position: absolute;
  bottom: 10px;
  left: 10px;
 right: 10px;
}
.item-price{
  color:orangered;
}
.rights{
  float: right;
}
</style>