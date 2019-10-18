import Vue from 'vue';
import Vuex from 'vuex';

import { productGetters, manufacturerGetters } from './getters';
import { productMutations, cartMutations, manufacturerMutations } from './mutations';
import { productActions, manufacturerActions } from './actions';

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
    ...productActions,
    ...manufacturerActions,
  }
});
