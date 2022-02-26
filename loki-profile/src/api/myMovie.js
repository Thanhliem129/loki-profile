import axios from "axios";
const urlBase ='https://620cf2e9b5736325939f99f1.mockapi.io'
// posts
export const _getMovie = async (userID) => {
  const request = await axios.get(`${urlBase}/user/${userID}/myMovie`);
  return request.data;
};

export const _postMovie = async (userId, body) => {
    const request = await axios.post(`${urlBase}/user/${userId}/myMovie`, body);
    return window.location.replace('/my-movie');
}

export const _updateMovie = async (userId, id, body) => {
    const request = await axios.put(`${urlBase}/user/${userId}/myMovie/${id}`, body);
    return window.location.replace('/my-movie');
}

export const _deleteMovie = async (userId, id) => {
    const request = await axios.delete(`${urlBase}/user/${userId}/myMovie/${id}`);
    return request.data;
}