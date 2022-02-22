import axios from "axios";
const urlBase ='https://620cf2e9b5736325939f99f1.mockapi.io'
// posts
export const _getPosts = async (userID) => {
  const request = await axios.get(`${urlBase}/user/${userID}/posts`);
  return request.data;
};

export const _postPosts = async (userId, body) => {
    const request = await axios.post(`${urlBase}/user/${userId}/posts`, body);
    return window.location.replace('/posts');
}

export const _updatePosts = async (userId, id, body) => {
    const request = await axios.put(`${urlBase}/user/${userId}/posts/${id}`, body);
    return window.location.replace('/posts');
}

export const _deletePosts = async (userId, id) => {
    const request = await axios.delete(`${urlBase}/user/${userId}/posts/${id}`);
    return request.data;
}