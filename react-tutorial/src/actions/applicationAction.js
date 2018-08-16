export const CONNECTION_INPROGRESS = 'CONNECTION_INPROGRESS'
export const CONNECTION_SUCCESS = 'CONNECTION_SUCCESS'
export const CONNECTION_FAILED = 'CONNECTION_FAILED'

export function connecting() {
    return{
        type:CONNECTION_INPROGRESS,
        payload:{
            connectionstate : "Connecting..."
        }
    }
}

export function connectionFailed() {
    return{
        type:CONNECTION_FAILED,
        payload:{
            connectionstate : "failed to connect"
        }
    }
}

export function connectionSuccess() {
    return{
        type:CONNECTION_SUCCESS,
        payload:{
            connectionstate : "Connected!"
        }
    }
}

