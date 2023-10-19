import { FETCH_ACTIVITY_START, FETCH_ACTIVITY_SUCCESS, FETCH_ACTIVITY_FAIL } from "../actions/fetchAction";


const initialState = {
    activity: '',
    isFetching: false,
    error: '',
};

const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ACTIVITY_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_ACTIVITY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                activity: action.payload
            };
        case FETCH_ACTIVITY_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        default: return state;
    }
};

export default fetchReducer;