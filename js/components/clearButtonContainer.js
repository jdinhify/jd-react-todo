import React from 'react'; //eslint-disable-line
import ClearButton from './clearButton'; //eslint-disable-line

class ClearButtonContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className='clear'>
                <ClearButton text="Clear Completed Todos" />
            </li>
        );
    }
}
export default ClearButtonContainer;
