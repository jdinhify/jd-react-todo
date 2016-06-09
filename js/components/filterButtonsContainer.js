import React from 'react'; //eslint-disable-line
import FilterButton from './filterButton'; //eslint-disable-line
import { DISPLAY_ALL, DISPLAY_INCOMPLETE, DISPLAY_COMPLETED } from '../constants';

const FilterButtonContainer = () =>
    <div className='filter'>
        <FilterButton filter={DISPLAY_ALL} text="Show All" />
        <FilterButton filter={DISPLAY_INCOMPLETE} text="Show Incomplete" />
        <FilterButton filter={DISPLAY_COMPLETED} text="Show Completed" />
    </div>
;

export default FilterButtonContainer;
