import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'
import login from './modules/login/index'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
const store = new Vuex.Store({
      plugins: [createPersistedState()],
      state,
      actions,
      getters,
      mutations,
      modules: {
        login
      }
})

export default store