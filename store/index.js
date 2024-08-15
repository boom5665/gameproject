export const state = () => ({
  authToken: null,
  hasRedirected: false,
  login: false,
  nologin: true,
});

export const mutations = {
  setAuthToken(state, token) {
    state.authToken = token;
  },
  setHasRedirected(state, value) {
    state.hasRedirected = value;
  },
  setLogin(state, value) {
    state.login = value;
  },
  setNologin(state, value) {
    state.nologin = value;
  }
};

export const actions = {
  setAuthToken({ commit }, token) {
    console.log('Setting authToken:', token);
    commit('setAuthToken', token);
  },
  setHasRedirected({ commit }, value) {
    console.log('Setting hasRedirected:', value);
    commit('setHasRedirected', value);
  },
  setLogin({ commit }, value) {
    console.log('Setting login:', value);
    commit('setLogin', value);
  },
  setNologin({ commit }, value) {
    console.log('Setting nologin:', value);
    commit('setNologin', value);
  }
};

