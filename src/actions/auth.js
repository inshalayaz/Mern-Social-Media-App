import { AUTH } from '../constants/actionTypes'
import * as api from '../api/index'


export const signin = (FormData, history) => async (dispatch) => {
    try {
        // login user

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}
export const signup = (FormData, history) => async (dispatch) => {
    try {
        // sign Up user

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}


