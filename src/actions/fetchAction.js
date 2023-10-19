export const FETCH_ACTIVITY_START = 'FETCH_ACTIVITY_START';
export const FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS';
export const FETCH_ACTIVITY_FAIL = 'FETCH_ACTIVITY_FAIL';

export const fetchActivityStart = (url) => dispatch => {
    
}
export const fetchActivitySuccess = (url) => dispatch => {
    return {type: FETCH_ACTIVITY_SUCCESS, payload: url}
}
export const fetchActivityFail = (url) => dispatch => {
    return {type: FETCH_ACTIVITY_FAIL, payload: url}
}
