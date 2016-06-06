let nextId = 0;

/**
 * create new Todo
 * @param  {String} content New todo's content
 * @return {Action object}
 */
export const newTodo = (content) => ({ type: 'NEW_TODO', id: nextId+=1, content });
export const asyncNewTodo = () => (dispatch) => dispatch(newTodo());

/**
 * Change a specific todo's state (from incomplete to completed and vice versa)
 * @param  {int} id ID of the todo
 * @return {Action object}
 */
export const changeTodoState = (id) => ({ type: 'CHANGE_TODO_STATE', id });
export const asynChangeTodoState = () => (dispatch) => dispatch(changeTodoState());
