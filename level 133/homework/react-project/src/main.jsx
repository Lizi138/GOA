import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider1 from "./context/MainContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider1>
      <App />
    </Provider1>
  </React.StrictMode>
);
