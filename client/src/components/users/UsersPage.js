import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as userActions from "../../store/actions/userActions";
import UserList from "./UserList";
import { Link, Redirect } from "react-router-dom";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";

class UsersPage extends React.Component {
  state = {
    redirectToAddUserPage: false,
  };

  componentDidMount() {
    const { users, actions } = this.props;

    if (users.length === 0) {
      actions.getAllUsersByOrgId(2).catch((error) => {
        alert("loading users failed " + error);
      });
    }
  }

  render() {
    return (
      <>
        {this.state.redirectToAddUserPage && <Redirect to="/user" />}
        <h2>Users</h2>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary"
              onClick={() => this.setState({ redirectToAddUserPage: true })}
            >
              Add User
            </button>
            <UserList users={this.props.users} />
          </>
        )}
      </>
    );
  }
}

UsersPage.propTypes = {
  users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users,
  loading: state.apiCallsInProgress > 0,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
