export const REGISTER_GAME = 'REGISTER_GAME'
export const BEGIN_PLAY_REQUEST = 'BEGIN_PLAY_REQUEST'
export const BEGIN_PLAY = 'BEGIN_PLAY'
export const CANCEL_GAME = 'CANCEL_GAME'

export const registerGame = (id, dispatch) => {
    try {

        dispatch({
            type: REGISTER_GAME,
            payload: id
        })

    } catch (err) {
        console.error(err)
    }
}

export const beginPlayRequest = (id, dispatch) => {
    try {
        dispatch({
            type: BEGIN_PLAY_REQUEST,
            payload: id
        })

    } catch (err) {
        console.error(err)
    }
}

export const beginPlay = (id, dispatch) => {
    try {
        dispatch({
            type: BEGIN_PLAY,
            payload: id
        })

    } catch (err) {
        console.error(err)
    }
}

export const cancelGame = (dispatch) => {
    try {
        dispatch({
            type: CANCEL_GAME,
            payload: null
        })

    } catch (err) {
        console.error(err)
    }
}