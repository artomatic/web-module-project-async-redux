import { combineReducers } from "redux";
import formReducer from './formReducer';
import favoritesReducer from './favoritesReducer';
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
    formReducer, 
    favoritesReducer,
    categoryReducer
})

export default rootReducer

