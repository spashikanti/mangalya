import {GET_CUSTOMERS} from './constants';

export const getCustomers = () => dispatch => {
  return fetch('/api/customers')
    .then(res => res.json())
    .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
}

// export const getCustomers = (id) => dispatch => {
//   return fetch('/api/customers/'+id)
//     .then(res => res.json())
//     .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
// }

// export const getCustomers = (orgId) => dispatch => {
//   return fetch('/api/users/'+orgId)
//     .then(res => res.json())
//     .then(customers => dispatch({type: GET_CUSTOMERS, payload: customers}))
// }
