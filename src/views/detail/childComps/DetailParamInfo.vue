<template>
<div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
  <div class="sizes-info">{{paramInfo.key1}}</div>
  <div class="info-desc">{{paramInfo.desc}}</div>
<table v-for="(table,index) in paramInfo.sizes" 
         :key="index"  class="info-sizes">
    <tr v-for="(tr, indez) in table" :key="indez"> 
        <td v-for="(td, indey) in tr" :key="indey">{{td}}</td>
    </tr>
 </table>
 <div class="info-keys">{{paramInfo.keys}}</div>
 <table class="info-param">
   <tr v-for="(info,index) in paramInfo.infos" :key="index">
     <td class="info-param-key">{{info.key}}</td>
     <td class="param-value">{{info.value}}</td>
   </tr>

 </table>
 <div class="info-img " v-if="paramInfo.image">
   <img :src="paramInfo.image[0]" alt="">
 </div>


 

</div>
  
</template>

<script>
export default {
  name:'DetailParamInfo',
  props:{
    paramInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }

}
</script>

<style scoped>
.param-info{
    padding: 20px 15px;
    font-size: 12px;
    border-bottom: 5px solid #f2f5f8;
}

.param-info table{
  width: 100%;
  border-collapse: collapse;
}

.param-info table tr{
  height: 42px;
}

.param-info table tr td{
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  
}
.info-desc{
  font-size:12px;
  color:#333;
  padding: 10px 0;

}
.sizes-info,.info-keys{
  font-size: 18px;
  color: #000;
}
.info-keys{
  margin: 15px 0;
}
.info-param-key{
  width: 95px;
}
.param-value{
  color:#eb4868
}
.info-img img{
  width:100%
}
</style>