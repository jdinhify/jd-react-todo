import React, { PropTypes } from 'react'; //eslint-disable-line

/**
 * Todo item
 * @param  {function} options.onClick
 * @param  {boolean} options.completed
 * @param  {String} options.content
 */
// const Todo = ({ onClick, completed, content }) =>
//     <li
//         className={completed ? 'todo__item todo__item--completed' : 'todo__item'}
//         onClick={onClick}>
//         {content}
//     </li>;
// ;

// need to use class since FlipMove needs to access refs
class Todo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li
                className={this.props.completed ? 'todo__item todo__item--completed' : 'todo__item'}
                onClick={this.props.onClick}>
                {this.props.content}
            </li>
        );
    }
};

Todo.propTypes = {
    onClick:   PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    content:   PropTypes.string.isRequired
};

export default Todo;
