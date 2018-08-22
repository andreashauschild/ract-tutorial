import React from 'react';
import './CameraList.css';

const cameraList = (props)=>{

    let cams = null;
    if (props.cameras instanceof Array) {
        cams = props.cameras.map(cam => {
            return <option value={cam.id} key={cam.id}>{cam.cameraName}</option>
        })
        cams = <select onChange={(event)=>  console.log(event.target.value)} >{cams}</select>
    }

    return (
        <div className='CameraList'>
            {cams}
        </div>
    )
}

export default cameraList;