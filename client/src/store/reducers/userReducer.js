import * as types from '../actions/constants'
import initialState from "./initialState";

// const userReducer = (state = [], {type, payload}) => {
const userReducer = (state = initialState.users, action) => {
  debugger;
    switch (action.type) {
      case types.GET_ALL_ORG_USERS_SUCCESS:
        return action.users
      case types.CREATE_USER_SUCCESS:
        return [...state, { ...action.user }];
      case types.UPDATE_USER_SUCCESS:
        return state.map(user => 
          user.UserId === action.user.UserId ? action.user : user);
      default:
        return state
    }
}

export default userReducer;