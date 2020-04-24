<template>
  <div>
    <el-button v-if="isAdding" @click="addToCart" type="text" size="small"
      >加入购物车</el-button
    >
    <el-button v-else @click="removeFromCart(id)" type="text" size="small"
      >从购物车移除</el-button
    >
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
      const token = localStorage.getItem("token");
      const that = this;

      if (token) {
        this.$store.commit("ADD_TO_CART", {
          product: this.product
        });
      } else {
        this.$confirm(
          "你还未登录，点击去登录跳转登录页面，点击取消回到主界面",
          "提示",
          {
            confirmButtonText: "去登录",
            cancelButtonText: "取消",
            type: "warning"
          }
        )
          .then(() => {
            that.$router.push("/user/login");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "你已取消"
            });
          });
      }
    },
    removeFromCart(productId) {
      const token = localStorage.getItem("token");
      const that = this;

      if (token) {
        this.$store.commit("REMOVE_FROM_CART", {
          productId
        });
      } else {
        this.$alert(
          "点击去登录跳转登录页面，点击取消回到主界面",
          "你还未登录",
          {
            confirmButtonText: "去登录",
            cancelButtonText: "取消"
          }
        )
          .then(() => {
            that.$router.push("/user/login");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "你已取消"
            });
          });
      }
    }
  }
};
</script>
