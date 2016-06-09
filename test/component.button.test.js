import test from 'tape';
import React from 'react'; //eslint-disable-line
import { shallow } from 'enzyme';
import { Button } from '../js/components/button'; //eslint-disable-line

test('<Button />', (nest) => {

    nest.test('... is rendered correctly (based on HTML)', (t) => {
        const active = shallow(<Button active={true} text='Show All' filterClick={() => null} />),
            inactive = shallow(<Button active={false} text='Show All' filterClick={() => null} />),
            expectedActive = '<span class="button button--active">Show All</span>',
            expectedInactive = '<button class="button">Show All</button>';

        t.equal(active.html(), expectedActive);
        t.equal(inactive.html(), expectedInactive);
        t.end();
    });

});
