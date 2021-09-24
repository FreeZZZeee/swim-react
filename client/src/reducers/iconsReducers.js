import {ICONS_LIST_FAIL, ICONS_LIST_REQUEST, ICONS_LIST_SUCCESS} from "../constants/iconsConstants";

let initialState = []

const iconsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ICONS_LIST_REQUEST:
            return {loading: true}
        case ICONS_LIST_SUCCESS:
            return {loading: false, icons: action.payload}
        case ICONS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export default iconsReducers