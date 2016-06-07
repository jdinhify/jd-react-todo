import { NEW_TODO, TOGGLE_TODO } from './constants';

/**
 * create new Todo
 * @param  {String} content New todo's content
 * @return {Action object}
 */
export const newTodo = (content) => ({ type: NEW_TODO, content });
export const asyncNewTodo = () => (dispatch) => dispatch(newTodo());

/**
 * Change a specific todo's state (from incomplete to completed and vice versa)
 * @param  {int} id ID of the todo
 * @return {Action object}
 */
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });
export const asynToggleTodo = () => (dispatch) => dispatch(toggleTodo());
