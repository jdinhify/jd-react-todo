import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'; //eslint-disable-line
import {asyncIncrement, asyncDecrement} from '../actions';

export const Counter = React.createClass({
    render: function() {
        const dispatch = this.props.dispatch;
        return (
            <div className="counter">
                <h1>Counter</h1>
                <h2>{this.props.value}</h2>
                <p>
                    <button onClick={() => {dispatch(asyncIncrement());}}>+</button>
                    <button onClick={() => {dispatch(asyncDecrement());}}>-</button>
                </p>
                <Link to="/">Back to index</Link>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        value: state
    };
};

connect(mapStateToProps)(Counter);

export const CounterContainer = connect(mapStateToProps)(Counter);
