import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../actions/favoritesActions";

const initialState = {
    favorites: []
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