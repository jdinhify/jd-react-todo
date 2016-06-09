import test from 'tape';
import React from 'react'; //eslint-disable-line
import { shallow } from 'enzyme';
import { NewTodoForm } from '../js/components/newTodo'; //eslint-disable-line

test('<NewTodoForm />', (nest) => {

    nest.test('... is rendered correctly (based on HTML)', (t) => {
        const rendered = shallow(<NewTodoForm dispatch={() => null} />);

        const expectedHTML = '<div><form class="todo__new--form"><input type="text" placeholder="What to do?"/><button type="submit">+</button></form></div>';

        t.equal(rendered.html(), expectedHTML);
        t.end();
    });

});
