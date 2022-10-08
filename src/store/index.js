import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk'
import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace: true}) || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default store