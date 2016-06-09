import React, { PropTypes } from 'react'; // eslint-disable-line
import { connect } from 'react-redux';
import { filterTodos } from '../actions';

export const FButton = ({ active, text, filterClick }) => {
    // no button for active filter
    if (active) {
        return <span className="filter__button filter__button--active">{text}</span>;
    }

    return (
        <button
            className="filter__button"
            onClick={ (e) => { e.preventDefault(); filterClick(); } }>
            {text}
        </button>
    );
};

FButton.propTypes = {
    active:      PropTypes.bool.isRequired,
    text:        PropTypes.string.isRequired,
    filterClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.todosFilter
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        filterClick: () => { dispatch(filterTodos(props.filter)); }
    };
};

const FilterButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(FButton);

export default FilterButton;
