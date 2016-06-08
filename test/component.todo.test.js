import test from 'tape';
import React from 'react'; //eslint-disable-line
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Todo from '../js/components/todo'; //eslint-disable-line

test('<Todo />', (nest) => {

    nest.test('... is rendered correctly', (t) => {
        const content = 'Todo #1',
            completed = false;

        const renderedTodo = shallow(<Todo onClick={() => null} content={content} completed={completed}/>);

        t.equal(renderedTodo.text(), content);
        t.equal(renderedTodo.hasClass('todo__item'), true);
        t.equal(renderedTodo.hasClass('todo__item--completed'), false);

        t.end();
    });

    nest.test('... fires onClick event on clicked', (t) => {
        const content = 'Todo #1',
            onClick = sinon.spy(),
            completed = false;

        const renderedTodo = shallow(<Todo onClick={onClick} content={content} completed={completed}/>);

        renderedTodo.simulate('click');

        t.equal(onClick.calledOnce, true);
        t.end();
    });

});
