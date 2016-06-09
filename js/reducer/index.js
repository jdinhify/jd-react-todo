import { combineReducers } from 'redux';
import todos from './todo';
import todosFilter from './todosFilter';

const reducer = combineReducers({ todos, todosFilter });

export default reducer;
