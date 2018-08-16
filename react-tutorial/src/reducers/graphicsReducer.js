import {UPDATE_GRAPHICS} from "../actions/graphicsAction";

export default function reducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_GRAPHICS : {
            state = Object.assign({}, state, {object: action.payload})
            break;
        }
        case "CHANGE_AGE" : {
            state = Object.assign({}, state, {age: action.payload})
            break;
        }
        default :
            console.log("Unknown type ->" + action.type)
    }
    return state
}
