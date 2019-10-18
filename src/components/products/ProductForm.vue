<template>
  <form @submit.prevent="saveProduct">
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
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
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
          <i class="fa fa-pencil"></i>
          <!-- Conditional rendering for input text -->
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model', 'manufacturers', 'isEditing'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model)
    }
  }
}
</script>
