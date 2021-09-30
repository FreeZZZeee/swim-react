import {ICONS_LIST_FAIL, ICONS_LIST_REQUEST, ICONS_LIST_SUCCESS} from "../constants/iconsConstants";

let initialState = {
    icons: [],
    loading: false,
    error: null,
}

const iconsReducers = (state = initialState, action) => {
    switch (action.type) {
        case ICONS_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case ICONS_LIST_SUCCESS:
            return {
                ...state,
                icons: action.payload.icons,
                loading: false,
            }
        case ICONS_LIST_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default iconsReducers