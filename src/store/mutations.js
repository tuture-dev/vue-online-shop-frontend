import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  PRODUCT_BY_ID,
  PRODUCT_BY_ID_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT,
  REMOVE_PRODUCT_SUCCESS,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ALL_PRODUCTS,
  ALL_PRODUCTS_SUCCESS,
  ALL_MANUFACTURERS,
  ALL_MANUFACTURERS_SUCCESS,
  MANUFACTURER_BY_ID,
  MANUFACTURER_BY_ID_SUCCESS,
  ADD_MANUFACTURER,
  ADD_MANUFACTURER_SUCCESS,
  UPDATE_MANUFACTURER,
  UPDATE_MANUFACTURER_SUCCESS,
  REMOVE_MANUFACTURER,
  REMOVE_MANUFACTURER_SUCCESS,
} from './mutation-types';


export const productMutations = {
  [ALL_PRODUCTS](state) {
    state.showLoader = true;
  },
  [ALL_PRODUCTS_SUCCESS](state, payload) {
    const { products } = payload;

    state.showLoader = false;
    state.products = products;
  },
  [PRODUCT_BY_ID](state) {
    state.showLoader = true;
  },
  [PRODUCT_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product } = payload;
    state.product = product;
  },
  [REMOVE_PRODUCT](state) {
    state.showLoader = true;
  },
  [REMOVE_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { productId } = payload;
    state.products = state.products.filter(product => product._id !== productId);
  },
  [UPDATE_PRODUCT](state) {
    state.showLoader = true;
  },
  [UPDATE_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product: newProduct } = payload;
    state.product = newProduct;
    state.products = state.products.map(product => {
      if (product._id === newProduct._id) {
        return newProduct;
      }

      return product;
    })
  },
  [ADD_PRODUCT](state) {
    state.showLoader = true;
  },
  [ADD_PRODUCT_SUCCESS](state, payload) {
    state.showLoader = false;

    const { product } = payload;
    state.products = state.products.concat(product);
  }
};

export const cartMutations = {
  [ADD_TO_CART](state, payload) {
    const { product } = payload;
    state.cart.push(product)
  },
  [REMOVE_FROM_CART](state, payload) {
    const { productId } = payload
    state.cart = state.cart.filter(product => product._id !== productId)
  },
};

export const manufacturerMutations = {
  [ALL_MANUFACTURERS](state) {
    state.showLoader = true;
  },
  [ALL_MANUFACTURERS_SUCCESS](state, payload) {
    const { manufacturers } = payload;

    state.showLoader = false;
    state.manufacturers = manufacturers;
  },
  [MANUFACTURER_BY_ID](state) {
    state.showLoader = true;
  },
  [MANUFACTURER_BY_ID_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturer } = payload;
    state.manufacturer = manufacturer;
  },
  [REMOVE_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [REMOVE_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturerId } = payload;
    state.manufacturers = state.manufacturers.filter(manufacturer => manufacturer._id !== manufacturerId);
  },
  [UPDATE_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [UPDATE_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturer: newManufacturer } = payload;
    state.manufacturers = state.manufacturers.map(manufacturer => {
      if (manufacturer._id === newManufacturer._id) {
        return newManufacturer;
      }

      return manufacturer;
    })
  },
  [ADD_MANUFACTURER](state) {
    state.showLoader = true;
  },
  [ADD_MANUFACTURER_SUCCESS](state, payload) {
    state.showLoader = false;

    const { manufacturer } = payload;
    state.manufacturers = state.manufacturers.concat(manufacturer);
  }
}
