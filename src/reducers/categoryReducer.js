import { TOGGLE_CATEGORY } from "../actions/categoryActions";


const initialState = {
    category: {
        type: false,
        participants: false,
        price: false,
    }
}

const categoryReducer = (state = initialState, action) => {
    console.log('category reducer triggered', action.payload)
    switch (action.type) {
        case TOGGLE_CATEGORY:{
            return {
                ...state,
                category: {
                    ...state.category,
                    [action.payload]: !state.category[action.payload]
                }
            }
        }
        default: return state;
    }
}

export default categoryReducer