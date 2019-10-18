<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th>制造商</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product._id">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.manufacturer.name}}</td>
          <td class="modify"><router-link :to="'/admin/edit/' + product._id">修改</router-link></td>
          <td class="remove"><a @click="removeProduct(product._id)" href="#">删除</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
table {
  margin: 0 auto;
}

.modify {
  color: blue;
}

.remove a {
  color: red;
}
</style>

<script>
export default {
  created() {
    this.$store.dispatch('allProducts');
  },
  computed: {
    products() {
      return this.$store.getters.allProducts
    }
  },
  methods: {
    removeProduct(productId) {
      // 使用 JavaScript BOM 的 confirm 方法来询问用户是否删除此商品
      const res = confirm('是否删除此商品？');

      // 如果用户同意，那么就删除此商品
      if (res) {
        this.$store.dispatch('removeProduct', {
          productId,
        })
      }
    }
  }
}
</script>
