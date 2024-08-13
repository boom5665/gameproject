// plugins/router.js

export default ({ app }) => {
  if (process.client && app.router) {
    app.router.afterEach((to, from) => {
      if (to.path === from.path) {
        // Do something if needed
      }
    });
  }
};
