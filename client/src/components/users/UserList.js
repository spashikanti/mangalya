import React from 'react';
import { Link } from "react-router-dom";

function UserList(props){
    return(
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Email</th>
            </tr>
          </thead>
          <tbody>
            {props.users.map((user) => {
              return (
                <tr key={user.UserId}>
                  <td><Link to={"/user/" + user.UserId}>{user.FirstName}</Link></td>
                  <td>{user.LastName}</td>
                  <td>{user.UserEmail}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
    );
}

export default UserList;