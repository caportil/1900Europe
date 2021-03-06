import {createStore, applyMiddleware} from 'redux';
import reducers from './../reducers/Reducers.js';
import thunk from 'redux-thunk';

const middleware = applyMiddleware(thunk)

export default createStore(reducers, middleware);
