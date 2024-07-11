// plugins/token.js

export default ({ app }, inject) => {
  const getToken = () => {
    return localStorage.getItem('authToken');
  };

  const setToken = (token) => {
    localStorage.setItem('authToken', token);
    app.$axios.setToken(token, 'Bearer');
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
    app.$axios.setToken(false);
  };

  inject('auth', {
    getToken,
    setToken,
    removeToken,
  });
};
