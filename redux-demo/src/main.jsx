import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import
import { Provider } from "react-redux";
import store from "./components/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct usage
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
