import { UPDATE_ACTIVITY, UPDATE_INPUT } from "../actions/formActions"

const initialState = {
    activity: '',
    type: '',
    participants: '',
    price: '',
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case UPDATE_ACTIVITY:
            return {
                ...state,
                activity: action.payload
            }
        default: return state
    }
}

export default formReducer