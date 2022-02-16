import { GET_POSTS } from "../type";

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
    
    default: {
      return state;
    }
  }
};
  
  export default posts;