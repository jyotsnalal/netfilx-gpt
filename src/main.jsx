import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "./utils/appStore";
import Body from "./components/Body";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
