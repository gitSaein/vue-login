export default {
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
}