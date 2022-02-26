import { 
  GET_MOVIE,
  POST_MOVIE,
  UPDATE_MOVIE,
  DELETE_MOVIE  
} from "../type";

const initialState = {
    listMovie: [],
  };

const movie = (state = initialState, action) => {
  switch(action.type) {
    case GET_MOVIE:
      return {
        ...state,
        listMovie: action.data
      }
    case POST_MOVIE:
      return {
        ...state,
      }
    case UPDATE_MOVIE:
      return {
        ...state,
      }
    case DELETE_MOVIE:
      return {
        ...state,
      }
    default: {
      return state;
    }
  }
};
  
  export default movie;