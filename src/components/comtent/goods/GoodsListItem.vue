<template>
<div class="goods-item" @click="itemClick"> 
  <img :src="showImage" alt="" @load="imgLoad">
  <div class="goodinfo">
    <p>{{goodItem.title}}</p>
    <span class="price">{{goodItem.price}}</span>
    <span class="collect">{{goodItem.cfav}}</span>
  </div>
  
  </div>
  
</template>

<script>
export default {
  name:'GoodsListItem',
  props:{
     goodItem:{
      type:Object,
      default(){
        return {}
      }
    }
    
  },
  computed:{
    showImage(){
      return this.goodItem.image || this.goodItem.show.img 
    }
  },
  methods:{
    imgLoad(){
     if(this.$route.path.indexOf('/home')){
        this.$bus.$emit('homeItemImageLoad')
     }else if(this.$route.path.indexOf('/datail')){
        this.$bus.$emit('detailItemImageLoad')
     }
    },
    itemClick(){
      this.$router.push('/detail/' + this.goodItem.iid)
    }
  }

}
</script>

<style>
.goods-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goodinfo{
  font-size:12px;
  position: absolute;
  bottom:5px;
  left:0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goodinfo p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom:3px;
}
.goodinfo .price{
  color:var(--color-high-text);
  margin-right: 30px;
}
.goodinfo .collect{
  position:relative
}
.goodinfo .collect::before{
  content: '';
  position: absolute;
  left:-15px;
  top:-1px;
  width: 14px;
  height:14px;
 background: url('~assets/img/common/collect.svg') 0 0/14px 14px;

}
</style>