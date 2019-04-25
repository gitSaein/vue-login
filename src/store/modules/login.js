export default {
    state: {
        allUser: [
          { id: 1, email: 'john', password: '123456' },
          { id: 2, email: 'kim', password: '123456' }
        ],
        isLogin: false,
        isLoginError: false,
        userInfo: null,
        alert
      },
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
            router.push({ name: 'main' })
          }
        },
        logout ({ commit }) {
          commit('logout')
          router.push({ name: 'login' })
        }
      }
}