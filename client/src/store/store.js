import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import logoReducer from "../reducers/logo-reducer";
import iconsReducers from "../reducers/iconsReducers";
import categoriesReducer from "../reducers/categories-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
    logo: logoReducer,
    icons: iconsReducers,
    categories: categoriesReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)))

export default store