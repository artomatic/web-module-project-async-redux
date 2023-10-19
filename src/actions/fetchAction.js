export const FETCH_ACTIVITY_START = 'FETCH_ACTIVITY_START';
export const FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS';
export const FETCH_ACTIVITY_FAIL = 'FETCH_ACTIVITY_FAIL';
import axios from 'axios';



export const fetchActivity = (url) => dispatch => {
    dispatch({type:FETCH_ACTIVITY_START});
    axios.get(url)
        .then (response => {
            console.log(response.data);
            const newActivity = {
                activity: response.data.activity,
                key: response.data.key
            }
            dispatch({type: FETCH_ACTIVITY_SUCCESS, payload: newActivity})
        })
        .catch (error => {
            console.log(error);
            dispatch({type: FETCH_ACTIVITY_FAIL, payload: error.response})
        })
}
export const fetchActivitySuccess = () => dispatch => {
    return {type: FETCH_ACTIVITY_SUCCESS, payload: url}
}
export const fetchActivityFail = () => dispatch => {
    return {type: FETCH_ACTIVITY_FAIL, payload: url}
}
