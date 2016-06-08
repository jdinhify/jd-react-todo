import { NEW_TODO, TOGGLE_TODO } from '../constants';
import orderBy from 'lodash/orderBy';

const fakeInitialState = [
    {
        id:        0,
        content:   'Todo #1',
        completed: false
    },
    {
        id:        1,
        content:   'Todo #2',
        completed: false
    },
    {
        id:        2,
        content:   'Todo #3',
        completed: true
    },
    {
        id:        3,
        content:   'Todo #4',
        completed: false
    }
];

const initialState = [];
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

const todos = (state = fakeInitialState, action) => {
    switch(action.type) {
    case NEW_TODO:
        return orderBy([ ...state, todo(state, action) ], ['completed', 'id'], ['asc', 'asc']);
    case TOGGLE_TODO:
        return orderBy(state.map((s) => todo(s, action)), ['completed', 'id'], ['asc', 'asc']);
    default:
        return state;
    }
};

export default todos;
