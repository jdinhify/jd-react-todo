import React, { PropTypes } from 'react'; // eslint-disable-line

export const Button = ({ active, text, onClick }) => {
    // no button for active filter
    if (active) {
        return <span className="button button--active">{text}</span>;
    }

    return (
        <button
            className="button"
            onClick={ (e) => { e.preventDefault(); onClick(); } }>
            {text}
        </button>
    );
};

Button.propTypes = {
    active:  PropTypes.bool.isRequired,
    text:    PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

