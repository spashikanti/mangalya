import React from 'react';
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const UserList = ({ users, onDeleteClick }) => (
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Email</th>
              <th>Mobile</th>
              <th></th>
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
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => onDeleteClick(user)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
)

UserList.propTypes = {
  users: PropTypes.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default UserList;