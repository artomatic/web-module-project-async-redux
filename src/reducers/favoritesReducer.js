import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../actions/favoritesActions";

const initialState = {
    favorites: [
        {
            activity: "Write a poem",
            key: "6453647"
        },
        {
            activity: "Configure two-factor authentication on your accounts",
            key: '7465738'
        },
    ]
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACTIVITY:
            console.log('123', action.payload)
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_ACTIVITY:
            return {
                ...state,
                favorites: state.favorites.filter(item=>(item.key!==action.payload))
            }
        default: return state;
    } 
}

export default favoritesReducer