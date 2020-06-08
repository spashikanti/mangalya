import * as types from "./constants";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export const saveUser = (user) => (dispatch) => {
  debugger;
  console.log(user);
  dispatch(beginApiCall());
  if (user.UserId) {
    return fetch("/api/users/" + user.UserId, {
      method: "PUT",
      body: JSON.stringify({
            ...user,
            // Parse authorId to a number (in case it was sent as a string).
            UserId: parseInt(user.UserId, 10)
          }),
      headers: { "Content-Type": "application/json" },
    })
      .then(handleErrors)
      .then((userData) =>
        dispatch({ type: types.UPDATE_USER_SUCCESS, user: userData })
      )
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  } else {
    return fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({...user}),
      headers: { "Content-Type": "application/json" },
    })
      .then(handleErrors)
      .then((userData) =>
        dispatch({ type: types.CREATE_USER_SUCCESS, user: userData })
      )
      .catch(error => {
        debugger;
        dispatch(apiCallError(error));
        throw error;
      });
  }
};

export const getAllUsersByOrgId = (orgId) => (dispatch) => {
  dispatch(beginApiCall());
  return fetch("/api/users/" + orgId)
    .then(handleErrors)
    .then((userData) =>
      dispatch({ type: types.GET_ALL_ORG_USERS_SUCCESS, users: userData })
    )
    .catch(error => {
      dispatch(apiCallError(error));
      throw error;
    });
};

export function deleteUserOptimistic(user){
  return { type: types.DELETE_USER_OPTIMISTIC, user };
}

export const deleteUser = (user) => (dispatch) => {
  dispatch(deleteUserOptimistic(user));
  return fetch("/api/users/" + user.UserId, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
    .then(handleErrors)
    .then(
      //(userData) => dispatch({ type: types.DELETE_USER_OPTIMISTIC, users: userData })
    )
    .catch(error => {
      throw error;
    });
};

function handleErrors(response) {
  if (!response.ok) {
      console.log(response.statusText);
      throw Error(response.statusText);
  }
  return response.json();
}