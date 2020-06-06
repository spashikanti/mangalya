import { CREATE_USER, GET_ALL_ORG_USERS } from "./constants";

export const userCreateRequest = (userData) => (dispatch) => {
    console.log(userData);
    return fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {"Content-Type": "application/json"}
    })
        .then((res) => res.json())
        .then((userData) => dispatch({ type: CREATE_USER, payload: userData }));
};


export const getAllUsersByOrgId = (orgId) => (dispatch) => {
    console.log("user Actions ", orgId);
    return fetch("/api/users/"+orgId)
    .then((res) => res.json())    
    .then((userData) => dispatch({ type: GET_ALL_ORG_USERS, payload: userData }));
}