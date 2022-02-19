import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from './posts/reduce';
import auth from './auth/reduce';

const rootReducer = combineReducers({
    posts, auth
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;