import Vue from 'nativescript-vue'
import App from './components/App.vue'
import Vuex from 'vuex';
// Prints Vue logs when --env.production is *NOT* set while building

import ApolloClient from 'apollo-boost'
// import ApolloClient from 'apollo-client'
import VueApollo from 'vue-apollo'

import store from './store/store'

Vue.config.silent = (TNS_ENV === 'production')

Vue.use(Vuex)
Vue.use(VueApollo)


const apolloClient = new ApolloClient({
  uri: 'https://ghm-hasura.herokuapp.com/v1/graphql',

// HEADERS WORK FINE IF TOKEN WAS IN MAIN
  headers: {
    // authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2MzU2NzM2LCJleHAiOjE1ODg5NDg3MzZ9.wpyhPTWuqxrDgezDXJqIOaAIaocpM8Ehd3BhQUWKK5Q`,
    "x-hasura-admin-secret":"@ghmeec2020"
  }

})
const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})


new Vue({
  apolloProvider,
  render: h => h('frame', [h(App)]),
  store:store
}).$start()
