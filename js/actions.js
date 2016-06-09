import { NEW_TODO, TOGGLE_TODO, FILTER_TODOS, CLEAR_COMPLETED } from './constants';

/**
 * create new Todo
 * @param  {String} content New todo's content
 * @return {Action object}
 */
export const newTodo = (content) => ({ type: NEW_TODO, content });

/**
 * Change a specific todo's state (from incomplete to completed and vice versa)
 * @param  {int} id ID of the todo
 * @return {Action object}
 */
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id });

/**
 * Filter the todo list (showing all, incomplete only, completed only)
 * @param  {String} filter
 * @return {Action object}
 */
export const filterTodos = (filter) => ({ type: FILTER_TODOS, filter });

/**
 * Clear all completed todos
 * @return {Action object}
 */
export const clearCompleted = () => ({ type: CLEAR_COMPLETED });
