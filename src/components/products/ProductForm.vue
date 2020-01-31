<template>
  <div class="productInfo">
    <el-form 
    class="form" 
    ref="form" 
    label-width="180px"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
      <el-form-item label="Name">
        <el-input v-model="modelData.name"></el-input>
      </el-form-item>
      <el-form-item label="Price">
        <el-input v-model="modelData.price"></el-input>
      </el-form-item>
      <el-form-item label="Manufacturer ">
        <el-select
          v-model="modelData.manufacturer.name"
          clearable
          placeholder="请选择制造商"
        >
          <el-option
            v-for="manufacturer in manufacturers"
            :key="manufacturer._id"
            :label="manufacturer.name"
            :value="manufacturer.name"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Image ">
        <el-input v-model="modelData.image"></el-input>
      </el-form-item>
      <el-form-item label="Description ">
        <el-input type="textarea" v-model="modelData.description"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" native-type="submit" @click="onSubmit"
          >Update Product</el-button
        >
        <el-button v-else @click="onSubmit">Add Product</el-button>
      </el-form-item>
    </el-form>
  </div>
  <!-- <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <input
          type="text"
          placeholder="Name"
          v-model="model.name"
          name="name"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Price</label>
        <input
          type="number"
          class="form-control"
          placeholder="Price"
          v-model="model.price"
          name="price" />
      </div>
      <div class="form-group">
        <label>Manufacturer</label>
        <select
          type="text"
          class="form-control"
          v-model="model.manufacturer"
          name="manufacturer">
          <template v-for="manufacturer in manufacturers">
            <option :value="manufacturer" :key="manufacturer._id">{{manufacturer.name}}</option>
          </template>
        </select>
      </div>
    </div> -->

  <!-- <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <input
          type="text"
          lass="form-control"
          placeholder="Image"
          v-model="model.image"
          name="image"
          class="form-control" />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea
          class="form-control"
          placeholder="Description"
          rows="5"
          v-model="model.description"
          name="description"
         ></textarea>
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i> -->
  <!-- Conditional rendering for input text -->
  <!-- <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form> -->
</template>

<script>
export default {
  data() {
    return {
      modelData: { manufacturer: { name: "" } }
    };
  },
  props: ["model", "manufacturers", "isEditing"],
  created() {
    const product = this.model;
    this.modelData = { ...product, manufacturer: { ...product.manufacturer } };
  },
  watch: {
    model(val, oldVal) {
      this.modelData = val;
    }
  },
  computed: {
    loading() {
      return this.$store.state.showLoader
    }
  },
  // updated() {
  //   // 等待后端完成商品信息的同步更新，设置loading为false
  //   const newProductName = this.$store.getters.productById(this.model._id);
  //   const isLoaded = this.modelData.name === newProductName;
  //   if(isLoaded) {
  //     this.loading = false;
  //   }
  // },
  methods: {
    onSubmit() {
      // 由于表单中只绑定了modelData.manufacturer.name，
      // 缺少manufacturer._id,但是后端需要manufacturer整个对象,
      // 所以需要将manufacturers中对应的manufacturer找出并覆盖到modelData中
      const manufacturer = this.manufacturers.find(item => item.name === this.modelData.manufacturer.name);
      this.modelData.manufacturer = manufacturer;
      
      this.$emit("save-product", this.modelData);
    }
  }
};
</script>
<style>
.productInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 60px;
}
</style>
