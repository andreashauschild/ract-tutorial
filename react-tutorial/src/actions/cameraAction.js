export const INIT = 'INIT'
export const UPDATE_CAMERA = 'UPDATE_CAMERA'

export function initCameras(cameras) {
    return {
        type: INIT,
        payload: {
            cameras: cameras
        }
    }
}

export function update(camera) {
    console.log('update')
    return {
        type: UPDATE_CAMERA,
        payload: {
            camera: camera
        }
    }
}

export function updateCamera(camera) {
    return (dispatch) => {

        dispatch(update(camera));
    }

}