import { 
    _getPosts,
    _postPosts,
    _updatePosts,
    _deletePosts
} from "../../api/posts";

import { 
    GET_POSTS ,
    POST_POSTS,
    UPDATE_POSTS,
    DELETE_POSTS
} from "../type";

export const getPosts = (userID) => async dispatch => {
    try {
        _getPosts(userID).then( async (res) => {
        return dispatch({type: GET_POSTS, data: res})
      })
    } catch (error) {
      throw new Error(error);
    }
  };

export const PostPosts = (userID, body) => async dispatch => {
  // console.log(userID, body)
  try {
      _postPosts(userID, body).then( async(res) => {
        // console.log('oki')
      return dispatch({type: POST_POSTS, data: res})
    })
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePosts = (userId, id, body) => async dispatch => {
  try {
    _updatePosts(userId, id, body).then( async(res) => {
      window.location.replace('/posts')
      return dispatch({type: UPDATE_POSTS, data: res})
    })
  } catch (error) {
    throw new Error(error);
  }
}

export const deletePosts = (userId, id) => async dispatch => {
  try {
    _deletePosts(userId, id).then( async(res) => {
      return dispatch({type: DELETE_POSTS, data: res})
    })
  } catch (error) {
    
  }
}