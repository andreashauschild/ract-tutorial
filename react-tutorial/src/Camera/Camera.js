import React from 'react';
import logo from './../logo.svg';
import './Camera.css';
const camera = (props)=>{
    return (
        <div className='Camera'>
            <div><img id={props.id} width={100} src={logo} alt={props.cameraName}/></div>
            <div>{props.cameraName} Time: {props.timestamp}  Dynamic:{Math.floor(Math.random()*30)} {props.children}</div>
            <div><button onClick={props.connect}>Connect</button></div>
        </div>
    )
}

export default camera;