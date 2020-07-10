import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import * as fromTodoList from './reducer/todoList'
import { composeWithDevTools } from 'redux-devtools-extension';

const preloadState= { todoList: fromTodoList.initialState }


const store = createStore(reducer, preloadState, composeWithDevTools(applyMiddleware(logger)));

export default store;
