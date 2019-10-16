<template>
  <div>
    <div class="products">
      <div class="container">
        This is ProductList
      </div>
      <template v-for="product in products">
        <div :key="product._id" class="product">
          <p class="product__name">产品名称：{{product.name}}</p>
          <p class="product__description">介绍：{{product.description}}</p>
          <p class="product__price">价格：{{product.price}}</p>
          <p class="product.manufacturer">生产厂商：{{product.manufacturer}}</p>
          <img :src="product.image" alt="" class="product__image">
          <button @click="addToCart(product)">加入购物车</button>
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.product {
  border-bottom: 1px solid black;
}

.product__image {
  width: 100px;
  height: 100px;
}
</style>

<script>
export default {
  name: 'product-list',
  computed: {
    // a computed getter
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    addToCart(product) {
      this.$store.commit('ADD_TO_CART', {
        product
      });
    }
  }
}
</script>
