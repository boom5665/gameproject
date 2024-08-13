// plugins/setColor.js

export default ({ app }) => {
  if (process.client) {
    // Create a function to update color
    const updateColor = () => {
      const spans = document.querySelectorAll("span#dotstyle");
      spans.forEach((span) => {
        span.style.color = "red"; // ตั้งสีเป็นแดง
      });
    };

    // Create a MutationObserver to watch for changes in the DOM
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        // Check if nodes have been added
        if (mutation.addedNodes.length) {
          updateColor();
        }
      });
    });

    // Start observing the document
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Run the updateColor function initially
    updateColor();
  }
};
