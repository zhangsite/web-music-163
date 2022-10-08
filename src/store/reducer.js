// import { combineReducers } from 'redux';
// 使用redux-immutable 中的 combineReducers进行合并
import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store';

const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default cReducer