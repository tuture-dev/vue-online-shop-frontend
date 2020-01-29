<template>
  <div class="products">
    <el-table
    class="table"
    :data="products">
      <el-table-column
        prop="name"
        label="产品名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description"
        label="介绍"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="180">
      </el-table-column>
      <el-table-column
        prop="manufacturer.name"
        label="生产厂商"
        width="180">
      </el-table-column>
      <!-- <el-table-column
        label="图片"
        width="200">
        <img :src="image" alt="" class="product__image">
      </el-table-column> -->
      <el-table-column
        label="操作"
        width="180">
        <template slot-scope="scope">
          <product-button :id="scope.row._id"></product-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <!-- <div class="product">
    <router-link :to="'/detail/' + product._id" class="product-link">
      <p class="product__name">产品名称：{{product.name}}</p>
      <p class="product__description">介绍：{{product.description}}</p>
      <p class="product__price">价格：{{product.price}}</p>
      <p class="product.manufacturer">生产厂商：{{product.manufacturer.name}}</p>
      <img :src="product.image" alt="" class="product__image">
    </router-link>
    <product-button :product="product"></product-button>
  </div> -->
</template>
<script>
import ProductButton from './ProductButton';
export default {
  name: 'product-item',
  mounted() {
    console.log(this.products);
  },
  props: ['products'],
  // data() {
  //   return {
  //     height="tableHeight"
  //     tableHeight: window.innerHeight - 200
  //   }
  // },
  components: {
    'product-button': ProductButton,
  }
}
</script>
<style>
.products {
  padding-top: 10px;
  text-align: center;
}
.table {
  margin:0 auto;
  width: 900px;
}
.el-table .cell {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
}
/* .product__image {
  width: 50%;
} */
</style>