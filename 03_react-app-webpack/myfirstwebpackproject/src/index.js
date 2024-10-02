import React from "react";
import ReactDOM from "react-dom/client"; // No CDN hence we have imported
import App from "./App"; // to render App.js we need to import it

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
