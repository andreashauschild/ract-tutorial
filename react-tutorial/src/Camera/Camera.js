import React from 'react';
import logo from './../logo.svg';
import './Camera.css';
const camera = (props)=>{
    return (
        <div className='Camera'>

            <div><img alt="logo" width={100} src={logo}/></div>
            <div>{props.cameraName} Time: {props.timestamp}  Dynamic:{Math.floor(Math.random()*30)} {props.children}</div>

        </div>
    )
}

export default camera;