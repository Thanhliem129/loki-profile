import { 
    _getMovie,
    _postMovie,
    _updateMovie,
    _deleteMovie
} from "../../api/myMovie";

import { 
    GET_MOVIE,
    POST_MOVIE,
    UPDATE_MOVIE,
    DELETE_MOVIE
} from "../type";

export const getMovie = (userID) => async dispatch => {
    try {
      _getMovie(userID).then( async (res) => {
        return dispatch({type: GET_MOVIE, data: res})
      })
    } catch (error) {
      throw new Error(error);
    }
  };

export const postMovie = (userID, body) => async dispatch => {
  // console.log(userID, body)
  try {
    _postMovie(userID, body).then( async(res) => {
        // console.log('oki')
      return dispatch({type: POST_MOVIE, data: res})
    })
  } catch (error) {
    throw new Error(error);
  }
};

export const updateMovie = (userId, id, body) => async dispatch => {
  try {
    _updateMovie(userId, id, body).then( async(res) => {
      return dispatch({type: UPDATE_MOVIE, data: res})
    })
  } catch (error) {
    throw new Error(error);
  }
}

export const deleteMovie = (userId, id) => async dispatch => {
  try {
    _deleteMovie(userId, id).then( async(res) => {
      return dispatch({type: DELETE_MOVIE, data: res})
    })
  } catch (error) {
    
  }
}