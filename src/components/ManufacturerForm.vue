<template>
  <form @submit.prevent="saveManufacturer">
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
        <i class="fa fa-pencil"></i>
        <!-- Conditional rendering for input text -->
        <span v-if="isEditing">Update Manufacturer</span>
        <span v-else>Add Manufacturer</span>
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['model', 'isEditing'],
  methods: {
    saveManufacturer() {
      this.$emit('save-manufacturer', this.model)
    }
  }
}
</script>
