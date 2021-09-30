import {ICONS_LIST_FAIL, ICONS_LIST_REQUEST, ICONS_LIST_SUCCESS} from "../constants/iconsConstants";
import axios from "axios";

export const listIcons = () => async (dispatch) => {
    dispatch({type: ICONS_LIST_REQUEST})
    try {
        const res = await axios.get('/api/icons')
        if (res.status === 200) {
            dispatch({type: ICONS_LIST_SUCCESS, payload: res.data})
        }
    } catch (e) {
        dispatch({type: ICONS_LIST_FAIL, payload: e.message})
    }
}
