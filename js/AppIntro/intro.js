import React from 'react';
import {Link} from 'react-router'; //eslint-disable-line

export default React.createClass({
    render: function() {
        return (
            <div className="intro">
                <h1>Welcome</h1>
                <Link to="/counter">Counter</Link>
            </div>
        );
    }
});
