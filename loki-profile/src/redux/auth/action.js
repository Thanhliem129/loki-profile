import {_getUser, _signUp, _updateUser} from '../../api/auth'

import { 
    GET_USER, 
    SIGN_UP, 
    UPDATE_USER 
} from '../type'


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

export const updateUser = (id, body) => async dispatch => {
    try {
        _updateUser(id, body).then(async(res) => {
            window.location.replace('/profile')
            localStorage.setItem('userLokiProfile', JSON.stringify(res));
            // console.log(res)
            return dispatch ({type: UPDATE_USER, data: res})
        })
    }
    catch (error)
    {
        throw new Error(error);
    }
}