import axios from "axios";
const urlBase ='https://62070fbb92dd6600171c0cc1.mockapi.io/api/v1/'

export const _getUser = async (body) => {
    const request = await axios.get(`${urlBase}/users`, body);
    return request.data;
};

export const _signUp = async (body) => {
    const request = await axios.post(`${urlBase}/user`,body);
    return window.location.replace('/login');
};

export const _updateUser = async (id, body) => {

    const request = await axios.put(`${urlBase}/user/${id}`, body)
    return request.data ;
}