import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import posts from './posts/reduce';

const rootReducer = combineReducers({
    posts
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;