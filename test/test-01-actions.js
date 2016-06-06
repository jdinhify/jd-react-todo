import test from 'tape';
import * as actions from '../js/actions';

test('actions', nest => {

    nest.test('...add new todo', (t) => {
        const content = 'Todo #1';
        const expectedAction = { type: 'NEW_TODO', id: 1, content };
        const actualAction = actions.newTodo(content);

        t.deepEqual(actualAction, expectedAction, 'should create a NEW_TODO action');
        t.end();
    });

    nest.test('...change todo state', (t) => {
        const id = 1;
        const expectedAction = { type: 'CHANGE_TODO_STATE', id };
        const actualAction = actions.changeTodoState(id);

        t.deepEqual(actualAction, expectedAction, 'should create a CHANGE_TODO_STATE action');
        t.end();
    });
});
