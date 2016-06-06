export function increment() {
    return {type: 'INCREMENT'};
}
export function decrement() {
    return {type: 'DECREMENT'};
}

export function asyncIncrement() {
    return (dispatch) => {
        return dispatch(increment());
    };
}

export function asyncDecrement() {
    return (dispatch) => {
        return dispatch(decrement());
    };
}
