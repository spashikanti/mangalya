import React from "react";
import userTypes from "../data/userTypes";
import map from "lodash/map";
import Validator from "validator";
import isEmpty from "lodash/isEmpty";
import classnames from "classnames";
import TextFieldGroup from "../common/TextFieldGroup";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgId: 2,
      firstName: "",
      lastName: "",
      userEmail: "",
      userPwd: "",
      mobile: "",
      userType: "",
      isActive: 1,
      endDate: "",
      errors: {},
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.firstName)) {
      errors.firstName = "This field is required";
    }
    if (Validator.isEmpty(data.lastName)) {
      errors.lastName = "This field is required";
    }
    if (Validator.isEmpty(data.userEmail)) {
      errors.userEmail = "This field is required";
    }
    if (!Validator.isEmail(data.userEmail)) {
      errors.userEmail = "Email is invalid";
    }
    if (Validator.isEmpty(data.userPwd)) {
      errors.userPwd = "This field is required";
    }
    if (Validator.isEmpty(data.mobile)) {
      errors.mobile = "This field is required";
    }
    if (Validator.isEmpty(data.endDate)) {
      errors.endDate = "This field is required";
    }

    return {
      errors,
      isValid: isEmpty(errors),
    };
  }

  isValid() {
    const { errors, isValid } = this.validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  }

  onSubmit(e) {
    debugger;
    e.preventDefault();

    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      this.props.saveUser(this.state).then(
        () => {
          debugger;
          this.props.history.push("/");
          toast.success("User Registered Successfully.");
        },
        ({ data }) => this.setState({ errors: data, isLoading: false })
      );
    }
  }

  render() {
    const { errors } = this.state;
    const userTypeOptions = map(userTypes, (val, key) => (
      <option key={val} value={val}>
        {key}
      </option>
    ));
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Register User</h1>

        <TextFieldGroup
          field="firstName"
          label="First Name"
          value={this.state.firstName}
          onChange={this.onChange}
          error={errors.firstName}
        />
        <TextFieldGroup
          field="lastName"
          label="Last Name"
          value={this.state.lastName}
          onChange={this.onChange}
          error={errors.lastName}
        />
        <TextFieldGroup
          field="userEmail"
          label="User Email"
          value={this.state.userEmail}
          onChange={this.onChange}
          error={errors.userEmail}
        />
        <TextFieldGroup
          field="userPwd"
          type="Password"
          label="Password"
          value={this.state.userPwd}
          onChange={this.onChange}
          error={errors.userPwd}
        />
        <TextFieldGroup
          field="mobile"
          label="Mobile"
          value={this.state.mobile}
          onChange={this.onChange}
          error={errors.mobile}
        />
        <div
          className={classnames("form-group", { "has-error": errors.userType })}
        >
          <label className="control-label">User Type</label>
          <select
            value={this.state.userType}
            onChange={this.onChange}
            name="userType"
            className="form-control"
          >
            <option disabled value="">
              Choose User Type
            </option>
            {userTypeOptions}
          </select>
        </div>
        <div
          className={classnames("form-group", { "has-error": errors.endDate })}
        >
          <label className="control-label">End Date</label>
          <input
            value={this.state.endDate}
            onChange={this.onChange}
            type="text"
            name="endDate"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <button
            disabled={this.state.isLoading}
            className="btn btn-primary btn-lg"
          >
            Register
          </button>
        </div>
      </form>
    );
  }
}

RegisterForm.propTypes = {
  userCreateRequest: PropTypes.func.isRequired
}


export default RegisterForm;
