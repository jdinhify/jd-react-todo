import React from 'react'; //eslint-disable-line
import TodoListContainer from './components/todoListContainer'; //eslint-disable-line
import NewTodo from './components/newTodo'; //eslint-disable-line
import AppIntro from './components/appIntro'; //eslint-disable-line
import FilterButtonsContainer from './components/filterButtonsContainer'; //eslint-disable-line
import ClearButtonContainer from './components/clearButtonContainer'; //eslint-disable-line
import FlipMove from 'react-flip-move'; //eslint-disable-line

const App = () =>
    <div>
        <AppIntro />
        <NewTodo />
        <FilterButtonsContainer />
        <TodoListContainer />
    </div>
;

export default App;
