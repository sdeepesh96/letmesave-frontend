export const state = () => ({
  productData: null
});

export const mutations = {
  SET_PRODUCT_DATA(state, userObj) {
    state.productData = userObj;
  },
}

export const getters = {
  productData(state) {
    return state.productData;
  },
}
