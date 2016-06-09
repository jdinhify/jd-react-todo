import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { DISPLAY_ALL , DISPLAY_INCOMPLETE, DISPLAY_COMPLETED } from '../constants';
import TodoList from './todoList';

const doFilter = (todos, filter) => {
    switch (filter) {
    case DISPLAY_ALL:
        return todos;
    case DISPLAY_INCOMPLETE:
        return todos.filter( (todo) => !todo.completed );
    case DISPLAY_COMPLETED:
        return todos.filter( (todo) => todo.completed );
    default:
        return todos;
    }
};

const mapStateToProps = (state) => {
    return {
        todos: doFilter( state.todos, state.todosFilter )
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        todoClick: (id) => { dispatch(toggleTodo(id)); }
    };
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
