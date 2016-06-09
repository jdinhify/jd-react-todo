import test from 'tape';
import React from 'react'; //eslint-disable-line
import { shallow } from 'enzyme';
import { FButton } from '../js/components/filterButton'; //eslint-disable-line

test('<FButton />', (nest) => {

    nest.test('... is rendered correctly (based on HTML)', (t) => {
        const active = shallow(<FButton active={true} text='Show All' filterClick={() => null} />),
            inactive = shallow(<FButton active={false} text='Show All' filterClick={() => null} />),
            expectedActive = '<span class="filter__button filter__button--active">Show All</span>',
            expectedInactive = '<button class="filter__button">Show All</button>';

        t.equal(active.html(), expectedActive);
        t.equal(inactive.html(), expectedInactive);
        t.end();
    });

});
