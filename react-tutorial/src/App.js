import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Camera from './Camera/Camera'
import ReduxTester from "./ReduxTester/ReduxTester"

import {connect} from 'react-redux'
import {greeting1, greeting2, greeting3, textChange} from "./actions/testAction";


class App extends Component {

    render() {
        let cams = null;
        if (this.props.data.cameras instanceof Array) {
            cams = this.props.data.cameras.map(cam => {
                return <Camera cameraName={cam.cameraName} timestamp={cam.timestamp}> X </Camera>
            })
        }


        return (
            <div className="App">
                <div> Dynamic:{Math.floor(Math.random()*30)}</div>
                <ReduxTester/>
                {cams}
            </div>
        );
    }
}


const mapStateToProps = state => {
    console.log(state)
    return {
        data: {
            text: "Hello",
            cameras: state.camera.cameras
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    // return {
    //     destroyTodo: () =>
    //         dispatch(greeting1)
    // }

    return {
        destroyTodo:
            {
                g1: () => dispatch(greeting1())
                , g2: () => dispatch(greeting2())
                , g3: (text) => dispatch(greeting3(text))
                , text: (event) => dispatch(textChange(event.target.value))
            }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
