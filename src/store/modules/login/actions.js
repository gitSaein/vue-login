import router from '../../../router'

export default {
    login ({ state, commit }, loginObj) {
        let selectedUser = null
        state.allUser.forEach(user => {
          if (user.email === loginObj.email) selectedUser = user
        })
        if (selectedUser === null || selectedUser.password !== loginObj.password) {
          commit('loginError')
        } else {
          commit('loginSuccess', selectedUser)
          router.push({ name: 'table' })
        }
    },
    logout ({ commit }) {
        commit('logout')
        router.push({ name: 'login' })
    }    
}