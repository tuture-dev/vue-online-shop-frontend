<template>
  <div>
    <el-button v-if="isAdding" @click="addToCart" type="text" size="small">加入购物车</el-button>
    <el-button v-else @click="removeFromCart(id)" type="text" size="small">从购物车移除</el-button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    product() {
      let product = this.$store.getters.allProducts.find(
        product => product._id === this.id
      );
      return product;
    },
    isAdding() {
      let isAdding = true;
      this.cart.map(product => {
        if (product._id === this.product._id) {
          isAdding = false;
        }
      });

      return isAdding;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  methods: {
    addToCart() {
      this.$store.commit("ADD_TO_CART", {
        product: this.product
      });
    },
    removeFromCart(productId) {
      this.$store.commit("REMOVE_FROM_CART", {
        productId
      });
    }
  }
};
</script>
