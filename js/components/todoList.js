import React, { PropTypes } from 'react'; //eslint-disable-line
import Todo from './todo'; //eslint-disable-line
import FlipMove from 'react-flip-move';

const TodoList = ({ todos, todoClick }) =>
    <ul className="todo">
    <FlipMove>
        {todos.map((todo) =>
          <Todo
              key={todo.id}
              onClick={() => todoClick(todo.id)}
              content={todo.content}
              completed={todo.completed} />
        )}
    </FlipMove>
    </ul>
;

TodoList.propTypes = {
    todoClick: PropTypes.func.isRequired,
    todos:     PropTypes.arrayOf(PropTypes.shape({
        id:        PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        content:   PropTypes.string.isRequired
    }).isRequired).isRequired
};

export default TodoList;
