import {CONNECTION_FAILED, CONNECTION_INPROGRESS, CONNECTION_SUCCESS} from "../actions/applicationAction";


export default function reducer(state = {
    connection:"Not connected"
}, action) {

    switch (action.type) {
        case CONNECTION_INPROGRESS : {
            state = Object.assign({}, state, {connection: action.payload.connectionstate})
            break;
        }
        case CONNECTION_SUCCESS : {
            state = Object.assign({}, state, {connection: action.payload.connectionstate})
            break;
        }
        case CONNECTION_FAILED : {
            state = Object.assign({}, state, {connection: action.payload.connectionstate})
            break;
        }
        default :
            console.log("Unknown type ->" + action.type)
    }
    return state
}
