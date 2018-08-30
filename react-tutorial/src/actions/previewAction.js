export const INIT = 'INIT'
export const UPDATE_PREVIEW = 'UPDATE_PREVIEW'


export function initPreview(cameras) {
    return {
        type: INIT,
        payload: {
            cameras: cameras
        }
    }
}

const update = (cameras) => {
    console.log('update')
    return {
        type: UPDATE_PREVIEW,
        payload: {
            cameras: cameras
        }
    }
}

export function updatePreview(camera) {
    return (dispatch) => {
        dispatch(update(camera));
    }

}