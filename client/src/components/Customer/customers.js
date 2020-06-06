import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import {getCustomers} from '../../store/actions/customer'
import './customers.css';

class Customers extends Component {

  static propTypes = {
    getCustomers: PropTypes.func.isRequired,
    customers: PropTypes.array.isRequired
  }

  static defaultProps = {
    customers: []
  }

  componentWillMount() {
    debugger;
    this.props.getCustomers(2);
    
  }

  render() {
    console.log(this.props.customers);
    return (
      <div>
        <h2>Customers</h2>
        <ul>
        {this.props.customers.map(customer =>
          <li key={customer.orgId}>{customer.firstName} {customer.lastName}</li>
        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers
})

const dispatchToProps = (dispatch) => ({
   getCustomers: (id) => dispatch(getCustomers(id))
})

export default connect(mapStateToProps, dispatchToProps)(Customers);
