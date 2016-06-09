import { connect } from 'react-redux';
import { clearCompleted } from '../actions';
import { Button } from './button';
import { DISPLAY_INCOMPLETE } from '../constants';

const mapStateToProps = (state) => {
    return {
        active: state.todos.filter( (t) => t.completed ).length === 0 ||
                state.todosFilter === DISPLAY_INCOMPLETE
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => { dispatch(clearCompleted()); }
    };
};

const ClearButton = connect(
    mapStateToProps,
    mapDispatchToProps
)(Button);

export default ClearButton;
