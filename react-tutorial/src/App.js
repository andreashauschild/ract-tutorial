import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Camera from './Camera/Camera'
import CameraList from './CameraList/CameraList'
import ReduxTester from "./ReduxTester/ReduxTester"

import {connect} from 'react-redux'
import {greeting1, greeting2, greeting3, textChange} from "./actions/testAction";
import {updateCamera} from "./actions/cameraAction";
import WebsocketClient from './core/WebsocketClient'

class App extends Component {
    websocketHandlerByte = () =>{
        const webSocketClient = new WebsocketClient({
            port: 8080,
            schema:"ws",
            host:"localhost",
            path:"/bomb-web/byteTestEndpoint"

        })

        console.log("websocket clicked")
        // webSocketClient.onmessage= (event)=>{
        //     let img = JSON.parse(event.data)
        //     document.getElementById("camImage").src = img.base64;
        // }
        webSocketClient.onmessage= (event)=>{
            var arrayBuffer = event.data;
            var reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("camImageByte").src = e.target.result
            };
            reader.readAsDataURL(arrayBuffer);
            webSocketClient.sendMessage("ready")
        }

        webSocketClient.connect()
    }
    websocketHandlerJson = () =>{
        const webSocketClient = new WebsocketClient({
            port: 8080,
            schema:"ws",
            host:"localhost",
            path:"/bomb-web/jsonTestEndpoint"

        })

        console.log("websocket clicked")
        webSocketClient.onmessage= (event)=>{
            let img = JSON.parse(event.data)
            this.props.destroyTodo.updateCam(event.data)
            document.getElementById("camImageJson").src = img.base64;
            webSocketClient.sendMessage("ready")
        }


        webSocketClient.connect()
    }

    render() {
        console.log("--------->" +this.props.data.cameras)
        let cams = null;
        if (this.props.data.cameras instanceof Array) {
            cams = this.props.data.cameras.map(cam => {
                return <Camera id={cam.id} key={cam.id} cameraName={cam.cameraName} timestamp={cam.timestamp}> X </Camera>
            })
        }


        return (
            <div className="App">
                <CameraList cameras={this.props.data.cameras}/>
                <button onClick={this.websocketHandlerByte}>Connect to Byte Websocket</button>
                <button onClick={this.websocketHandlerJson}>Connect to JSON Websocket</button>
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
                , updateCam : (camera) => dispatch(updateCamera(camera))
            }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
