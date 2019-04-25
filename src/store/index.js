import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)
export default new Vuex.Store({

      plugins: [createPersistedState()],
      mutations: {
        loginSuccess (state, payload) {
          state.isLogin = true
          state.isLoginError = false
          state.userInfo = payload
        },
        loginError (state) {
          state.isLogin = false
          state.isLoginError = true
        },
        logout (state) {
          state.isLogin = false
          state.isLoginError = false
          state.userInfo = null
        }
      },
      actions: {
        login ({ state, commit }, loginObj) {
            let selectedUser = null
            state.allUser.forEach(user => {
              if (user.email === loginObj.email) selectedUser = user
            })
            if (selectedUser === null || selectedUser.password !== loginObj.password) {
              commit('loginError')
            } else {
              commit('loginSuccess', selectedUser)
              alert(selectedUser.email)
              router.push('/page/table')
            }
          },
          logout ({ commit }) {
            commit('logout')
            router.push({ name: 'login' })
          }
      }
})