export const TEST_GREETING_1 = 'TEST_GREETING_1'
export const TEST_GREETING_2 = 'TEST_GREETING_2'
export const TEST_GREETING_3 = 'TEST_GREETING_3'
export const TEST_CHANGE_TEXT = 'TEST_CHANGE_TEXT'

export function greeting1() {
    return{
        type:TEST_GREETING_1,
        payload:{
            greeting : "Greeting 1 - Hello World"
        }
    }
}


export function greeting2() {
    return{
        type:TEST_GREETING_1,
        payload:{
            greeting : "Greeting 2 - Hello Welt"
        }
    }
}

export function greeting3(text) {
    return{
        type:TEST_GREETING_1,
        payload:{
            greeting : text
        }
    }
}

export function textChange(text) {
    return{
        type:TEST_CHANGE_TEXT,
        payload:{
            text : text
        }
    }
}

