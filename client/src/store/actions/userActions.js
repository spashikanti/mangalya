import { CREATE_USER } from "./constants";

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
