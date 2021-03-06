import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import reducers from './reducers'

const composeEnchancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middlewares = [thunk, logger]

const store = createStore(reducers, composeEnchancers(
  applyMiddleware(...middlewares)))

export default store