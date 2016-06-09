import React from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { newTodo } from '../actions';

export const NewTodoForm = ({ dispatch }) => {
    let input;

    return (
        <div>
            <form
                className="todo__new--form"
                onSubmit={ (e) => {
                    e.preventDefault();
                    // prevent empty submit
                    if (!input.value.trim()) { return; }
                    // otherwise, create new todo
                    dispatch(newTodo(input.value));
                    //reset input value
                    input.value = '';
                }
            }>
                <input
                    type="text"
                    placeholder="What to do?"
                    ref={node => { input = node; }} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

const NewTodo = connect()(NewTodoForm);

export default NewTodo;
