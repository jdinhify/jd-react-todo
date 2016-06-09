import { NEW_TODO, TOGGLE_TODO, CLEAR_COMPLETED } from '../constants';
import orderBy from 'lodash/orderBy';

let initialState = [];

if (typeof localStorage !== 'undefined') {
    initialState = JSON.parse(localStorage.getItem('jd-react-todo-todos')) || [];
}

const todo = (state, action) => {
    switch(action.type) {
    case NEW_TODO:
        return {
            content:   action.content,
            id:        state ? state.reduce((maxId, t) => Math.max(t.id, maxId), -1) + 1 : 0,
            completed: false
        };
    case TOGGLE_TODO:
        if (state.id !== action.id) { return state; }
        return Object.assign({}, state, {completed: !state.completed});
    default:
        return state;
    }
};

const todos = (state = initialState, action) => {
    let newTodos;
    switch(action.type) {
    case NEW_TODO:
        newTodos = orderBy([ ...state, todo(state, action) ], ['completed', 'id'], ['asc', 'asc']);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('jd-react-todo-todos', JSON.stringify(newTodos));
        }
        return newTodos;
    case TOGGLE_TODO:
        newTodos = orderBy(state.map((t) => todo(t, action)), ['completed', 'id'], ['asc', 'asc']);
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('jd-react-todo-todos', JSON.stringify(newTodos));
        }
        return newTodos;
    case CLEAR_COMPLETED:
        newTodos = state.filter( (t) => !t.completed );
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('jd-react-todo-todos', JSON.stringify(newTodos));
        }
        return newTodos;

    default:
        return state;
    }
};

export default todos;
