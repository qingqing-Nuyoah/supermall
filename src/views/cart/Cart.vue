<template>
  <div class="cart">
    <nav-bar class="cart-bar">
      <div slot="center">购物车<span>({{cartLength}})</span></div>
    </nav-bar>
    <cart-list/>
    <cart-botton-bar/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartBottonBar from './childComps/CartBottonBar.vue'


import { mapGetters } from 'vuex'
import CartList from "./childComps/CartList.vue";


export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
     CartBottonBar
  },
  computed:{
   ...mapGetters(['cartLength'])
  }

}
</script>

<style>
.cart{
  height: 100%;
}

.cart-bar{
  background-color: var(--color-tint);
  color: #fff;
  /* font-weight: 700; */
}
</style>