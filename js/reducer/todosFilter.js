import { DISPLAY_ALL, FILTER_TODOS } from '../constants';

let initialFilter = DISPLAY_ALL;

if (typeof localStorage !== 'undefined') {
    initialFilter = localStorage.getItem('jd-react-todo-filter') || DISPLAY_ALL;
}

const todosFilter = ( state = initialFilter, action ) => {
    switch(action.type) {
    case FILTER_TODOS:
        return action.filter;
    default:
        return state;
    }
};

export default todosFilter;
