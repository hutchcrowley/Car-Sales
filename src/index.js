import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";

import { Provider } from "react-redux";

import { devToolsEnhancer } from "redux-devtools-extension";

import { rootReducer } from "./reducers/index";

import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(rootReducer, devToolsEnhancer());
console.log("This is the store: ", store);

// rootReducer(undefined, { type: "REDUX_INIT_1" });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
