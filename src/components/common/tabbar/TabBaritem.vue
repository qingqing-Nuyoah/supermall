<template>

  <div class="tar-bar-item" @click="itemClick">
    <div v-if="!isAcative"> <slot name="item-icon"></slot></div>
    <div v-else> <slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"> <slot name="item-text"></slot></div>
   
  </div>

  
</template>

<script>
export default {
  name:'TabBaritem',
  props:{
   path: String,
   activeColor:{
     type:String,
     default:'red'

   }
  },
  data(){
    return{
      // isAcative:true
    }
  },
 computed:{
    isAcative(){
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
  return this.isAcative ? {color: this.activeColor}:{}
}
  },
methods:{
  itemClick() {
  return  this.$router.replace(this.path).catch(err => {})
  
  },


}

}
</script>

<style>
.tar-bar-item{
  flex: 1;
  text-align: center;
 height: 49px;
 font-size: 14px;
}
.tar-bar-item img{
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
  margin-bottom: 2px;

}
.active{
  color:red;
}
</style>