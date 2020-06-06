import { GET_ALL_ORG_USERS } from '../actions/constants'

const userReducer = (state = [], {type, payload}) => {
    switch (type) {
      case GET_ALL_ORG_USERS:
        return payload
      default:
        return state
    }
}

export default userReducer;