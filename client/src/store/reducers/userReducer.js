import * as types from '../actions/constants'
import initialState from "./initialState";

// const userReducer = (state = [], {type, payload}) => {
const userReducer = (state = initialState.users, action) => {
  debugger;
    switch (action.type) {
      case types.GET_ALL_ORG_USERS_SUCCESS:
        return action.users
      case types.CREATE_USER_SUCCESS:
        return [...state, { ...action.user[0] }];
      case types.UPDATE_USER_SUCCESS:
        console.log("update api called");
        return state.map(user => 
          user.UserId === action.user[0].UserId ? action.user[0] : user);
      case types.DELETE_USER_OPTIMISTIC:
        return state.filter(user => user.UserId !== action.user.UserId);
      default:
        return state
    }
}

export default userReducer;