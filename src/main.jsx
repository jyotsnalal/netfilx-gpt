import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
    <Body />
  </Provider>
);
