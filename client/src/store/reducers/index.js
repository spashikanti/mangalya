import {combineReducers} from 'redux';
import customerReducer from './customer';
import userReducer from './userReducer';
import courseReducer from "./courseReducer";

export default combineReducers({
  customers: customerReducer,
  users: userReducer,
  courses: courseReducer
})
