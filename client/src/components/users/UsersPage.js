import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllUsersByOrgId } from "../../store/actions/userActions";
import UserList from "./UserList";
import { Link } from "react-router-dom";

class UsersPage extends React.Component {
  static propTypes = {
    getAllUsersByOrgId: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  };

  static defaultProps = {
    users: []
  };

  componentDidMount() {
    debugger;
    console.log("caling");
    this.props.getAllUsersByOrgId(2);
  }

  render() {
      debugger;
    console.log(this.props.users);
    return (
      <>
        <h2>Users</h2>
        <Link className="btn btn-primary btn-lg" to="/user">Add User</Link>
        <UserList users={this.props.users} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const dispatchToProps = (dispatch) => ({
  getAllUsersByOrgId: (orgId) => dispatch(getAllUsersByOrgId(orgId)),
});

export default connect(mapStateToProps, dispatchToProps)(UsersPage);