import Vue from 'nativescript-vue'
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count:1
    },
    mutations: {
  
      increase(state) {
          if(state.count < 100) {
                  state.count++
          }
      },
      decrease(state) {
          if(state.count > 0) {
                  state.count--
          }
      },

    }
  });

export default store