import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import { productGetters, manufacturerGetters } from './getters';
import { productMutations, cartMutations, manufacturerMutations } from './mutations';

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
    ...productMutations,
    ...cartMutations,
    ...manufacturerMutations,
  },
  getters: {
    ...productGetters,
    ...manufacturerGetters,
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
    },
    removeProduct({ commit }, payload) {
      commit('REMOVE_PRODUCT');

      const { productId } = payload;
      axios.delete(`${API_BASE}/products/${productId}`).then(() => {
        // 返回 productId，用于删除本地对应的商品
        commit('REMOVE_PRODUCT_SUCCESS', {
          productId,
        });
      })
    },
    allManufacturers({ commit }) {
      commit('ALL_MANUFACTURERS');

      axios.get(`${API_BASE}/manufacturers`).then(response => {
        commit('ALL_MANUFACTURERS_SUCCESS', {
          manufacturers: response.data,
        });
      })
    },
    removeManufacturer({ commit }, payload) {
      commit('REMOVE_MANUFACTURER');

      const { manufacturerId } = payload;
      axios.delete(`${API_BASE}/manufacturers/${manufacturerId}`).then(() => {
        // 返回 manufacturerId，用于删除本地对应的制造商
        commit('REMOVE_MANUFACTURER_SUCCESS', {
          manufacturerId,
        });
      })
    },
  }
});
