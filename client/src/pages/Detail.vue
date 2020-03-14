<template>
  <div>
    <product-detail :product="product"></product-detail>
  </div>
</template>

<script>
import ProductDetail from '@/components/products/ProductDetail.vue';
export default {
  created() {
    // 跳转到详情时，如果本地状态里面不存在此商品，从后端获取此商品详情
    const { name } = this.product;
    if (!name) {
      this.$store.dispatch('productById', {
        productId: this.$route.params['id']
      });
    }
  },
  computed: {
    product() {
      return this.$store.getters.productById(this.$route.params['id']);
    }
  },
  components: {
    'product-detail': ProductDetail,
  }
}
</script>
