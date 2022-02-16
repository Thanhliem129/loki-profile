import axios from "axios";
const urlBase ='https://620cf2e9b5736325939f99f1.mockapi.io'

export const _getUser = async (body) => {
    const request = await axios.get(`${urlBase}/user`, body);
    return request.data;
};

export const _signUp = async (body) => {
const request = await axios.post(`${urlBase}/user`,body);
return request.data;
};