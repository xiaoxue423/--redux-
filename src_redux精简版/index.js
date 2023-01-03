import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

store.subscribe(() => {
  console.log('8888')
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
