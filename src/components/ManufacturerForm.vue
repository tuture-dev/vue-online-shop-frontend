<template>
  <div class="manufacturerInfo">
    <el-form class="form" ref="form" :model="model" label-width="180px">
      <el-form-item label="Name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit">Update Manufacturer</el-button>
        <el-button v-else @click="onSubmit">Add Manufacturer</el-button>
      </el-form-item>
    </el-form>
  </div>
  <!-- <form @submit.prevent="saveManufacturer">
    <div class="form-group">
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        v-model="model.name"
        name="name"
        class="form-control" />
    </div>

    <div class="form-group new-button">
      <button class="button">
        <i class="fa fa-pencil"></i> -->
        <!-- Conditional rendering for input text -->
        <!-- <span v-if="isEditing">Update Manufacturer</span>
        <span v-else>Add Manufacturer</span>
      </button>
    </div>
  </form> -->
</template>

<script>
export default {
  props: ['model', 'isEditing'],
  methods: {
    onSubmit() {
      this.$emit('save-manufacturer', this.model)
    }
  }
}
</script>
<style>
.manufacturerInfo {
  padding-top: 10px;
}
.form {
  margin: 0 auto;
  width: 500px;
}
.el-input__inner {
  height: 50px;
}
</style>
