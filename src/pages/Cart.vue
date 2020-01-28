<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <product-item :products="cart"></product-item>
  </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem.vue';
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Welcome to the Cart Page'
      }
    },
    computed: {
      cart() {
        return this.$store.state.cart;
      }
    },
    components: {
      'product-item': ProductItem
    }
  }
</script>
