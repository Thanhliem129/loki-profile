import { GET_USER, SIGN_UP, LOGIN } from "../type";


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
    default: {
      return state;
    }
  }
};
  
  export default auth;