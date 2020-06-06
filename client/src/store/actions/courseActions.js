import * as actionType from './constants';

export function createCourse(course){
    debugger;
    return {type: actionType.CREATE_COURSE, payload: course};
}