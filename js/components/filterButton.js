import { connect } from 'react-redux';
import { filterTodos } from '../actions';
import { Button } from './button';

const mapStateToProps = (state, props) => {
    return {
        active: props.filter === state.todosFilter
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => { dispatch(filterTodos(props.filter)); }
    };
};

const FilterButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default FilterButton;
