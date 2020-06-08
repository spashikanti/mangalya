import React from "react";
import userTypes from "../data/userTypes";
import classnames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";
import PropTypes from "prop-types";

const UserForm = ({ user, onSave, onChange, saving = false, errors = {} }) => {
  const userTypeOptions = Object.keys(userTypes).map((val, key) => (
    <option key={key} value={val}>
      {val}
    </option>
  ));

  return (
    <form onSubmit={onSave}>
      <h2>{user.UserId ? "Edit" : "Add"} User</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextFieldGroup
        name="FirstName"
        label="First Name"
        value={user.FirstName}
        onChange={onChange}
        error={errors.FirstName}
      />
      <TextFieldGroup
        name="LastName"
        label="Last Name"
        value={user.LastName}
        onChange={onChange}
        error={errors.LastName}
      />
      <TextFieldGroup
        name="UserEmail"
        label="User Email"
        value={user.UserEmail}
        onChange={onChange}
        error={errors.UserEmail}
      />
      <TextFieldGroup
        name="UserPwd"
        type="Password"
        label="Password"
        value={user.UserPwd}
        onChange={onChange}
        error={errors.UserPwd}
      />
      <TextFieldGroup
        name="Mobile"
        label="Mobile"
        value={user.Mobile}
        onChange={onChange}
        error={errors.Mobile}
      />
      <div
        className={classnames("form-group", { "has-error": errors.UserType })}
      >
        <label className="control-label">User Type</label>
        <select
          value={user.UserType}
          onChange={onChange}
          name="UserType"
          className="form-control"
        >
          <option disabled value="" selected>
            Choose User Type
          </option>
          <option key="Profile" value="Profile">Profile</option>
          {userTypeOptions}
        </select>
        {errors.UserType && <div className="alert alert-danger">{errors.UserType}</div>}
      </div>
      <TextFieldGroup
        name="EndDate"
        label="End Date"
        value={user.EndDate}
        onChange={onChange}
        error={errors.EndDate}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

UserForm.propTypes = {
    user: PropTypes.object.isRequired,
    errors: PropTypes.object,
    onSave: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    saving: PropTypes.bool
}

export default UserForm;
