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

export const getPosts = () => async dispatch => {
    try {
        _getPosts().then( async (res) => {
        return dispatch({type: GET_POSTS, data: res})
      })
    } catch (error) {
      throw new Error(error);
    }
  };