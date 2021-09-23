import {combineReducers, createStore} from 'redux'
import logoReducer from "./logo-reducer";
import iconsReducer from "./icons-reducer";
import categoriesReducer from "./categories-reducer";

let reducers = combineReducers({
    logo: logoReducer,
    icons: iconsReducer,
    categories: categoriesReducer,
})

let store = createStore(reducers)

export default store