import {createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const middleware = [
  thunk
]

// export default function configureStore(initialState){
//    return createStore(rootReducer, initialState, applyMiddleware(...middleware));
// }

export default createStore(
    rootReducer, 
    applyMiddleware(...middleware)
);
