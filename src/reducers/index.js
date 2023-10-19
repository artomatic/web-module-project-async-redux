import { combineReducers } from "redux";
import formReducer from './formReducer';
import favoritesReducer from './favoritesReducer';
import categoryReducer from "./categoryReducer";
import fetchReducer from "./fetchReducer";

const rootReducer = combineReducers({
    formReducer, 
    favoritesReducer,
    categoryReducer,
    fetchReducer
})

export default rootReducer

