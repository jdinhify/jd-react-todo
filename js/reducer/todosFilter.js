import { DISPLAY_ALL, FILTER_TODOS } from '../constants';

const initialFilter = DISPLAY_ALL;

const todosFilter = ( state = initialFilter, action ) => {
    switch(action.type) {
    case FILTER_TODOS:
        return action.filter;
    default:
        return state;
    }
};

export default todosFilter;
