import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const API_BASE = 'http://localhost:3000/api/v1';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // bought items
    cart: [],
    // ajax loader
    showLoader: false,
    // selected product
    product: {},
    // all products
    products: [],
    // all manufacturers
    manufacturers: [],
  },
  mutations: {
    ADD_TO_CART(state, payload) {
      const { product } = payload;
      state.cart.push(product)
    },
    REMOVE_FROM_CART(state, payload) {
      const { productId } = payload
      state.cart = state.cart.filter(product => product._id !== productId)
    },
    ALL_PRODUCTS(state) {
      state.showLoader = true;
    },
    ALL_PRODUCTS_SUCCESS(state, payload) {
      const { products } = payload;

      state.showLoader = false;
      state.products = products;
    }
  },
  actions: {
    allProducts({ commit }) {
      commit('ALL_PRODUCTS')

      axios.get(`${API_BASE}/products`).then(response => {
        console.log('response', response);
        commit('ALL_PRODUCTS_SUCCESS', {
          products: response.data,
        });
      })
    }
  }
});
