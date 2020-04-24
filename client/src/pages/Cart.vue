<template>
  <div>
    <app-header :activeIndex="activeIndex"></app-header>
    <div class="container">
      <h1>{{ msg }}</h1>
    </div>
    <product-item :products="cart"></product-item>
  </div>
</template>

<script>
import ProductItem from "@/components/products/ProductItem.vue";
import Header from "@/components/Header.vue";

export default {
  name: "home",
  data() {
    return {
      msg: "Welcome to the Cart Page",
      activeIndex: "3"
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    }
  },
  components: {
    "product-item": ProductItem,
    "app-header": Header
  },
  beforeRouteEnter(to, from, next) {
    const token = localStorage.getItem("token");

    if (!token) {
      next("/user/login");
    } else {
      next();
    }
  }
};
</script>
