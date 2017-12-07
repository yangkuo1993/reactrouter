import * as types from '../constants/ActionTypes'
function addAction(text) {
    return{
        type: types.INCREMENT_COUNTER,
        payload: text
    }
}
export {addAction}