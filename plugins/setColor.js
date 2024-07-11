// plugins/setColor.js

export default ({ app }) => {
  // This function will be called for every page and component
  app.router.afterEach((to, from) => {
    const spans = document.querySelectorAll("span#dotstyle");
    spans.forEach((span) => {
      span.style.color = "red"; // ตั้งสีเป็นแดง
    });
  });
};
