import {combineReducers} from "redux"

import graphics from "./graphicsReducer"
import application from "./applicationReducer"
import test from "./testReducer"
import camera from "./cameraReducer"
import preview from "./previewReducer"

export default  combineReducers({
    graphics
    ,application
    , test
    , camera
    ,preview
})