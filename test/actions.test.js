import test from 'tape';
import * as actions from '../js/actions';
import { NEW_TODO, TOGGLE_TODO, FILTER_TODOS, CLEAR_COMPLETED } from '../js/constants';

test('actions', (nest) => {

    nest.test('...add new todo', (t) => {
        const content = 'Todo #1';
        const expectedAction = { type: NEW_TODO, content };
        const actualAction = actions.newTodo(content);

        t.deepEqual(actualAction, expectedAction, 'should create a NEW_TODO action');
        t.end();
    });

    nest.test('...change todo state', (t) => {
        const id = 1;
        const expectedAction = { type: TOGGLE_TODO, id };
        const actualAction = actions.toggleTodo(id);

        t.deepEqual(actualAction, expectedAction, 'should create a TOGGLE_TODO action');
        t.end();
    });

    nest.test('...filter todo list', (t) => {
        const expectedAction = { type: FILTER_TODOS, filter: {} };
        const actualAction = actions.filterTodos({});

        t.deepEqual(actualAction, expectedAction, 'should create a FILTER_TODOS action');
        t.end();
    });

    nest.test('...clear completed todos', (t) => {
        const expectedAction = { type: CLEAR_COMPLETED };
        const actualAction = actions.clearCompleted();

        t.deepEqual(actualAction, expectedAction, 'should create a CLEAR_COMPLETED action');
        t.end();
    });
});
