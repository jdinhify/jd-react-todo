import React from 'react'; //eslint-disable-line
import TodoListContainer from './components/todoListContainer'; //eslint-disable-line
import NewTodo from './components/newTodo'; //eslint-disable-line
import FilterButtonsContainer from './components/filterButtonsContainer'; //eslint-disable-line

const App = () =>
    <div>
        <NewTodo />
        <FilterButtonsContainer />
        <TodoListContainer />
    </div>
;

export default App;
