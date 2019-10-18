<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>制造商</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="manufacturer in manufacturers" :key="manufacturer._id">
          <td>{{manufacturer.name}}</td>
          <td class="modify"><router-link :to="'/admin/manufacturers/edit/' + manufacturer._id">修改</router-link></td>
          <td class="remove"><a @click="removeManufacturer(manufacturer._id)" href="#">删除</a></td>
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
    this.$store.dispatch('allManufacturers');
  },
  computed: {
    manufacturers() {
      return this.$store.getters.allManufacturers
    }
  },
  methods: {
    removeManufacturer(manufacturerId) {
      // 使用 JavaScript BOM 的 confirm 方法来询问用户是否删除此制造商
      const res = confirm('是否删除此制造商？');

      // 如果用户同意，那么就删除此制造商
      if (res) {
        this.$store.dispatch('removeManufacturer', {
          manufacturerId,
        })
      }
    }
  }
}
</script>
