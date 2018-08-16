import {combineReducers} from "redux"

import graphics from "./graphicsReducer"
import application from "./applicationReducer"
import test from "./testReducer"
import camera from "./cameraReducer"

export default  combineReducers({
    graphics
    ,application
    , test
    , camera
})