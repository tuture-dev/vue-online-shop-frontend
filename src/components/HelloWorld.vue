<template>
  <div class="hello">
    <div>
      <li v-for="product in products" v-bind:key="product.id">{{product.name}}</li>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      products: [
        { id: 1, name: 'iPhone7' },
        { id: 2, name: 'iPhone6' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
