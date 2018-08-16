import * as a from "../actions/testAction";


export default function reducer(state = {
    greeting:"Default Greeting",
    text:"Text from textbox: ...."
}, action) {

    switch (action.type) {
        case a.TEST_GREETING_1 : {
            state = {...state, greeting: action.payload.greeting}
            break;
        }
        case a.TEST_GREETING_2 : {
            state = {...state, greeting: action.payload.greeting}
            break;
        }
        case a.TEST_GREETING_3 : {
            state = {...state, greeting: action.payload.greeting}
            break;
        }
        case a.TEST_CHANGE_TEXT : {
            state = {...state, text: action.payload.text}
            break;
        }
        default :
            console.log("Unknown type ->" + action.type)
    }
    return state
}
