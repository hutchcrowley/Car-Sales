import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";

import { reducer } from "./reducers/index";

import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(reducer);
console.log("This is the store: ", store);

reducer(undefined, { type: "REDUX_INIT_1" });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
