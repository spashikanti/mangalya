import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/userActions";
import UserForm from "./UserForm";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function ManageUserPage({
  users,
  getAllUsersByOrgId,
  saveUser,
  history,
  ...props
}) {
  const [user, setUser] = useState({ ...props.user });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (users.length === 0) {
      getAllUsersByOrgId(2).catch((error) => {
        alert("loading users failed " + error);
      });
    } else {
      setUser({ ...props.user });
    }
  }, [props.user]);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: name === "UserId" ? parseInt(value, 10) : value,
    }));
  }

  function formIsValid(){
    const { FirstName, LastName, UserEmail } = user;
    const errors = {};

    if(!FirstName) errors.FirstName = "First Name is required";
    if(!LastName) errors.LastName = "Last Name is required";
    if(!UserEmail) errors.UserEmail = "User Email is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleSave(event) {
    debugger;
    event.preventDefault();
    if(!formIsValid()) return;
    setSaving(true);
    saveUser(user)
      .then(() => {
        toast.success("User saved");
        history.push("/users");
      })
      .catch(error => {
        debugger;
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  }

  return users.length === 0 ? (
    <Spinner />
  ) : (
    <UserForm
      user={user}
      errors={errors}
      onChange={handleChange}
      onSave={handleSave}
      saving={saving}
    />
  );
}

ManageUserPage.propTypes = {
  user: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  getAllUsersByOrgId: PropTypes.func.isRequired,
  saveUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

ManageUserPage.defaultProps = {
  user: {
    IsActive: 1,
    OrgId: 2,
  },
};

export function getUserByUserId(users, userId) {
  return users.find((user) => user.UserId === userId) || null;
}

function mapStateToProps(state, ownProps) {
  debugger;
  const userId = ownProps.match.params.userId;
  const user =
    userId && state.users.length > 0
      ? getUserByUserId(state.users, parseInt(userId, 10))
      : {};
  return {
    user: user,
    users: state.users,
  };
}

const mapDispatchToProps = {
  getAllUsersByOrgId: userActions.getAllUsersByOrgId,
  saveUser: userActions.saveUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUserPage);
