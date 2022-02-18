import {_getUser, _signUp} from '../../api/auth'

import { GET_USER, SIGN_UP, LOGIN } from '../type'


export const getUser = (body) => async dispatch => {
    try {
        _getUser().then( async (res) => {
            return dispatch ({type: GET_USER, data: res})
        })
    } catch (error) {
        throw new Error(error);
    }
}
export const signUp = (body) => async dispatch => {
    try {
        _signUp(body).then(async(res)=> {
            return dispatch ({type : SIGN_UP, data: res})
        })
       
    } catch (error) {
        throw new Error(error);
    }
}