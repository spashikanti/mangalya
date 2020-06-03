import React from 'react';
import userTypes from '../data/userTypes';
import map from 'lodash/map';


class RegisterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            orgId: 2,
            firstName: '',
            lastName: '',
            userEmail: '',
            userPwd: '',
            mobile: '',
            userType: '',
            isActive: 1,
            endDate: '',
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e){
      debugger;
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.userCreateRequest(this.state).then(
          () => {},
          ({data}) => this.setState({errors: data, isLoading: false })
        );
    }

    render(){
        const userTypeOptions = map(userTypes, (val, key) => 
            <option key={val} value={val}>{key}</option>
        );
        return(
            <form onSubmit={this.onSubmit}>
                <h1>Register User</h1>
                <div className="form-group">
                  <label className="control-label">First Name</label>
                  <input 
                    value={this.state.firstName}
                    onChange={this.onChange}
                    type="text" 
                    name="firstName" 
                    className="form-control" 
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Last Name</label>
                  <input 
                    value={this.state.lastName}
                    onChange={this.onChange}
                    type="text"
                    name="lastName"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">User Email</label>
                  <input 
                    value={this.state.userEmail}
                    onChange={this.onChange}
                    type="text" 
                    name="userEmail" 
                    className="form-control" 
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Password</label>
                  <input 
                    value={this.state.userPwd}
                    onChange={this.onChange}
                    type="text" 
                    name="userPwd" 
                    className="form-control" 
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">Mobile</label>
                  <input 
                    value={this.state.mobile}
                    onChange={this.onChange}
                    type="text" 
                    name="mobile" 
                    className="form-control" 
                  />
                </div>
                <div className="form-group">
                  <label className="control-label">User Type</label>
                  <select 
                    value={this.state.userType}
                    onChange={this.onChange}
                    name="userType" 
                    className="form-control" 
                  >
                      <option disabled value="">Choose User Type</option>
                      {userTypeOptions}
                  </select>
                </div>
                <div className="form-group">
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
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Register
                    </button>
                </div>
            </form>
        );
    }
}

// RegisterForm.propTypes = {
//   userCreateRequest: React.PropTypes.func.isRequired
// }

export default RegisterForm;