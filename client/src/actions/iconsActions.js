import {ICONS_LIST_FAIL, ICONS_LIST_REQUEST, ICONS_LIST_SUCCESS} from "../constants/iconsConstants";
import axios from "axios";

const listIcons = () => async (dispatch) => {
    dispatch({type: ICONS_LIST_REQUEST})
    try {
        const {icons} = await axios.get('/api')
        dispatch({type: ICONS_LIST_SUCCESS, payload: icons})
    } catch (e) {
        dispatch({type: ICONS_LIST_FAIL, payload: e.message})
    }
}