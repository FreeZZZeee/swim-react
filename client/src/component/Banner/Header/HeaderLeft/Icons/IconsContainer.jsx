import {connect} from "react-redux";
import Icons from "./Icons";

let mapStateToProps = (state) => {
    return {icons: state.icons}
}

const IconsContainer = connect(mapStateToProps)(Icons)

export default IconsContainer;