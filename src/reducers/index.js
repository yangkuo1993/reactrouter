const defaultState = 0;
const reducer = function(state = defaultState, action){
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return state + action.payload;
        case 'DECREMENT_COUNTER':
            return state - action.payload;
        default:
            return state
    }
};
export default reducer