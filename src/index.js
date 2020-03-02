import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

import { createStore } from 'redux'

import { Provider } from 'react-redux'

import { devToolsEnhancer } from 'redux-devtools-extension'

import { rootReducer } from './reducers/index'
import { BrowserRouter as Router } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './index.css'

const store = createStore(rootReducer, devToolsEnhancer())
console.log('This is the store: ', store)

// rootReducer(undefined, { type: "REDUX_INIT_1" });

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Routes />
    </Provider>
  </Router>,
  rootElement
)
