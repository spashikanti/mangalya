import React from 'react';
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const UserList = ({ users }) => (
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Email</th>
              <th>Mobile</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <tr key={user.UserId}>
                  <td><Link to={"/user/" + user.UserId}>{user.FirstName}</Link></td>
                  <td>{user.LastName}</td>
                  <td>{user.UserEmail}</td>
                  <td>{user.Mobile}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
)

UserList.propTypes = {
  users: PropTypes.isRequired
}

export default UserList;