import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from './posts/reduce';
import auth from './auth/reduce';
import movie from './myMovie/reduce'

const rootReducer = combineReducers({
    posts, auth, movie
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;