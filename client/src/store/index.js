import Vue from "vue";
import Vuex from "vuex";

import { productGetters, manufacturerGetters } from "./getters";
import {
  productMutations,
  cartMutations,
  manufacturerMutations,
  userMutations
} from "./mutations";
import { productActions, manufacturerActions } from "./actions";

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
    // selected manufacturer
    manufacturer: {},
    // userInfo
    user: {}
  },
  mutations: {
    ...productMutations,
    ...cartMutations,
    ...manufacturerMutations,
    ...userMutations
  },
  getters: {
    ...productGetters,
    ...manufacturerGetters
  },
  actions: {
    ...productActions,
    ...manufacturerActions
  }
});
