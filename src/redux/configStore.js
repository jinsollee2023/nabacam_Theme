import { createStore } from 'redux';
import { combineReducers } from 'redux';
import todoReducer from './modules/todoReducer';
import themeReducer from './modules/themeReducer';

const rootReducer = combineReducers({ todoReducer, themeReducer });
const store = createStore(rootReducer);

export default store;
