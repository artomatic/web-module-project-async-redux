import { FETCH_ACTIVITY_START, FETCH_ACTIVITY_SUCCESS, FETCH_ACTIVITY_FAIL } from "../actions/fetchAction";



const initialState = {};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTIVITY_START:
            return {

            };
        case FETCH_ACTIVITY_SUCCESS:
            return {

            };
        case FETCH_ACTIVITY_FAIL:
            return {

            };
        default: return state;
    }
};

export default fetchReducer;