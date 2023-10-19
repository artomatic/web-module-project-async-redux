import { ADD_ACTIVITY, REMOVE_ACTIVITY } from "../actions/favoritesActions";

const initialState = {
    favorites: [
        {
            "activity": "Write a poem",
            "type": "recreational",
            "participants": 1,
            "price": 0,
            "link": "",
            "key": "8688620",
            "accessibility": 0
          },
        {
        "activity": "Configure two-factor authentication on your accounts",
        "type": "busywork",
        "participants": 1,
        "price": 0,
        "link": "https://en.wikipedia.org/wiki/Multi-factor_authentication",
        "key": "1572120",
        "accessibility": 0
        }
    ]
}

const favoritesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ACTIVITY:
            return {
                ...state,
                myActivities: [...state.myActivities, action.payload]
            }
        case REMOVE_ACTIVITY:
            return {
                ...state,
                myActivities: state.myActivities.filter(item=>(item.key!==action.payload))
            }
        default: return state;
    } 
}

export default favoritesReducer