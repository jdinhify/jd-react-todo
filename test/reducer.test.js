import test from 'tape';
import reducer from '../js/reducer';
import { NEW_TODO, TOGGLE_TODO, DISPLAY_ALL, CLEAR_COMPLETED } from '../js/constants';

test('reducer', (nest) => {

    nest.test('...returns initial state', (t) => {
        const expectedState = { todos: [], todosFilter: DISPLAY_ALL };
        const actualState = reducer(undefined, {});

        t.deepEqual(actualState, expectedState, 'should return object with empty todos array');
        t.end();
    });

    nest.test('...adds first todo', (t) => {
        const content = 'Todo #1';
        const expectedState = {
            todos: [
                {
                    content:   content,
                    id:        0,
                    completed: false
                }
            ],
            todosFilter: DISPLAY_ALL
        };

        const actualState = reducer( { todos: [] }, {
            type: NEW_TODO,
            content
        });

        t.deepEqual(actualState, expectedState, 'should return object with todos array contains 1st item');
        t.end();
    });

    nest.test('...adds new todo', (t) => {
        const content1 = 'Todo #1',
            content2 = 'Todo #2',
            content3 = 'Todo #3',
            content4 = 'Todo #4';

        const expectedState = {
            todos: [
                {
                    content:   content1,
                    id:        0,
                    completed: false
                },
                {
                    content:   content3,
                    id:        2,
                    completed: false
                },
                {
                    content:   content4,
                    id:        3,
                    completed: false
                },
                {
                    content:   content2,
                    id:        1,
                    completed: true
                }
            ],
            todosFilter: DISPLAY_ALL
        };

        const actualState = reducer(
            { todos: [
                {
                    content:   content1,
                    id:        0,
                    completed: false
                },
                {
                    content:   content3,
                    id:        2,
                    completed: false
                },
                {
                    content:   content2,
                    id:        1,
                    completed: true
                }
            ]},
            {
                type:    NEW_TODO,
                content: content4
            }
        );

        t.deepEqual(actualState, expectedState, 'todos array contains 4 items in correct order');
        t.end();
    });

    nest.test('...toggles todo', (t) => {
        const content1 = 'Todo #1',
            content2 = 'Todo #2';

        const expectedState = {
            todos: [
                {
                    content:   content1,
                    id:        0,
                    completed: false
                },
                {
                    content:   content2,
                    id:        1,
                    completed: true
                }
            ],
            todosFilter: DISPLAY_ALL
        };

        const actualState = reducer(
            { todos: [
                {
                    content:   content1,
                    id:        0,
                    completed: false
                },
                {
                    content:   content2,
                    id:        1,
                    completed: false
                }
            ]},
            {
                type: TOGGLE_TODO,
                id:   1
            }
        );

        t.deepEqual(actualState, expectedState, 'should toggle 2nd item to completed');
        t.end();
    });

    nest.test('...toggles todo with correct order', (t) => {
        const content1 = 'Todo #1',
            content2 = 'Todo #2',
            content3 = 'Todo #3';

        // completed todo is at the end of the list
        const expectedState = {
            todos: [
                {
                    content:   content1,
                    id:        0,
                    completed: false
                },
                {
                    content:   content3,
                    id:        2,
                    completed: false
                },
                {
                    content:   content2,
                    id:        1,
                    completed: true
                }
            ],
            todosFilter: DISPLAY_ALL
        };

        const actualState = reducer(
            { todos: [
                {
                    content:   content1,
                    id:        0,
                    completed: false
                },
                {
                    content:   content2,
                    id:        1,
                    completed: false
                },
                {
                    content:   content3,
                    id:        2,
                    completed: false
                }
            ]},
            {
                type: TOGGLE_TODO,
                id:   1
            }
        );

        t.deepEqual(actualState, expectedState, '2nd item completed and push down to the end of the list');
        t.end();
    });

    nest.test('...clears completed todos', (t) => {
        const content1 = 'Todo #1',
            content2 = 'Todo #2',
            content3 = 'Todo #3';

        // completed todo is at the end of the list
        const expectedState = {
            todos: [
                {
                    content:   content1,
                    id:        0,
                    completed: false
                },
                {
                    content:   content3,
                    id:        2,
                    completed: false
                }
            ],
            todosFilter: DISPLAY_ALL
        };

        const actualState = reducer(
            { todos: [
                {
                    content:   content1,
                    id:        0,
                    completed: false
                },
                {
                    content:   content2,
                    id:        1,
                    completed: true
                },
                {
                    content:   content3,
                    id:        2,
                    completed: false
                }
            ]},
            {
                type: CLEAR_COMPLETED
            }
        );

        t.deepEqual(actualState, expectedState, 'completed todos cleared');
        t.end();
    });

});
