import * as a from "../actions/cameraAction";


export default function reducer(state = {
    cameras :[
        {cameraName : "Küche 1", timestamp:"27.04.1986 17:55:23"}
        ,{cameraName : "Garten 1", timestamp:"27.04.1986 18:55:23"}
        ,{cameraName : "Flur 1", timestamp:"27.04.1986 23:22:23"}
    ]
}, action) {

    switch (action.type) {
        case a.INIT : {
            state = {...state, cameras: action.payload.cameras}
            break;
        }
        default :
            console.log("Unknown type ->" + action.type)
    }
    return state
}
