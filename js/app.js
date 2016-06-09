import React from 'react'; //eslint-disable-line
import TodoListContainer from './components/todoListContainer'; //eslint-disable-line
import NewTodo from './components/newTodo'; //eslint-disable-line

const App = () =>
    <div>
        <NewTodo />
        <TodoListContainer />
    </div>
;

export default App;
