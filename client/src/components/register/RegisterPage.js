import React from 'react';
import RegisterForm from './RegisterForm';
import { connect } from 'react-redux';

import { userCreateRequest } from "../../store/actions/userActions";

class RegisterPage extends React.Component{    
    render(){
        const { userCreateRequest } = this.props;
        return(
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <RegisterForm userCreateRequest={userCreateRequest} history={this.props.history} />
                </div>
            </div>
        );
    }
}

// RegisterPage.propTypes = {
//     userCreateRequest: React.PropTypes.func.isRequired
// }

export default connect(null, {userCreateRequest})(RegisterPage);