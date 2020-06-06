import * as actionTypes from "../actions/constants";

const courseReducer = (state = [], action) => {
    debugger;
    switch(action.type){
        case actionTypes.CREATE_COURSE:
            return [...state, { ...action.payload }];
        default:
            return state
    }
}

export default courseReducer;