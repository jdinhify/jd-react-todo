import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './todoList';

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        todoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    };
};

const TodoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoListContainer;
