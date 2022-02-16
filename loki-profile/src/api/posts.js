import axios from "axios";
const urlBase ='https://620cf2e9b5736325939f99f1.mockapi.io'
// posts
export const _getPosts = async () => {
  const request = await axios.get(`${urlBase}/user/1/posts`);
//   console.log(request.data)
  return request.data;
};

export const _postPosts = async (body) => {
    const request = await axios.post(`${urlBase}/user/1/posts`, body);
    return request.data;
}

export const _updatePosts = async (id, body) => {
    const request = await axios.put(`${urlBase}/user/1/posts/${id}`, body);
    return request.data;
}

export const _deletePosts = async (id) => {
    const request = await axios.delete(`${urlBase}/user/1/posts/${id}`);
    return request.data;
}