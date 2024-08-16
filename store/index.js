// store/index.js
import Cookies from 'js-cookie'

export const state = () => ({
  authToken: null
})

export const mutations = {
  setAuthToken(state, token) {
    state.authToken = token
    Cookies.set('authToken', token, { path: '/' })
  },
  removeAuthToken(state) {
    state.authToken = null
    Cookies.remove('authToken', { path: '/' })
  }
}

export const actions = {
  async setAuthToken({ commit }, token) {
    commit('setAuthToken', token)
  },
  nuxtServerInit({ commit }, { req }) {
    if (process.server) {
      const cookies = req.headers.cookie || ''
      const authToken = cookies.split(';').find(c => c.trim().startsWith('authToken='))?.split('=')[1]
      if (authToken) {
        commit('setAuthToken', authToken)
      }
    }
  }
}
