export const INIT = 'INIT'

export function initCameras(cameras) {
    return{
        type:INIT,
        payload:{
            cameras : cameras
        }
    }
}