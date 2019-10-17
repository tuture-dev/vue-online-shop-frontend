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
    },
    PRODUCT_BY_ID(state) {
      state.showLoader = true;
    },
    PRODUCT_BY_ID_SUCCESS(state, payload) {
      state.showLoader = false;

      const { product } = payload;
      state.product = product;
    }
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    productById: (state, getters) => id => {
      if (getters.allProducts.length > 0) {
        return getters.allProducts.filter(p => p._id == id)[0];
      } else {
        return state.product;
      }
    }
  },
  actions: {
    allProducts({ commit }) {
      commit('ALL_PRODUCTS')

      axios.get(`${API_BASE}/products`).then(response => {
        commit('ALL_PRODUCTS_SUCCESS', {
          products: response.data,
        });
      })
    },
    productById({ commit }, payload) {
      commit('PRODUCT_BY_ID');

      const { productId } = payload;
      axios.get(`${API_BASE}/products/${productId}`).then(response => {
        commit('PRODUCT_BY_ID_SUCCESS', {
          product: response.data,
        });
      })
    }
  }
});
