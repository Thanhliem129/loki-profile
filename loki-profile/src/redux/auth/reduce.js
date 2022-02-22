import { 
  GET_USER, 
  SIGN_UP, 
  // LOGIN, 
  UPDATE_USER 
} from "../type";


const initialState = {
    listUser: [],

  };

const auth = (state = initialState, action) => {
  switch(action.type) {
    case GET_USER:
      return {
        ...state,
        listUser: action.data
      }
    case SIGN_UP: 
      return {
        ...state
      }
    case UPDATE_USER: 
      return {
        ...state
      }
    default: {
      return state;
    }
  }
};
  
  export default auth;