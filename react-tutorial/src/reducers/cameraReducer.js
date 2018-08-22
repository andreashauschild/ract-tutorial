import * as a from "../actions/cameraAction";
import React from "react";


export default function reducer(state = {

    cameras :[
        {id:"camImageJson", cameraName : "JSON Küche 1"}
        ,{id:"camImageByte", cameraName : "BYTE Garten 1"}
        ,{id:"c3", cameraName : "Flur 1"}
    ]
}, action) {
    let newState = state;
    switch (action.type) {
        case a.INIT : {
            newState = {...state, cameras: action.payload.cameras}
            break;
        }
        default :
            break;
    }
    return newState
}
