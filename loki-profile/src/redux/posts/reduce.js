import { GET_POSTS, POST_POSTS } from "../type";

const initialState = {
    listPosts: [],
  };

const posts = (state = initialState, action) => {
  switch(action.type) {
    case GET_POSTS:
      return {
        ...state,
        listPosts: action.data
      }
      case POST_POSTS:
        return {
          ...state,
        }
    default: {
      return state;
    }
  }
};
  
  export default posts;