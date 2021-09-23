import Logo from "./Logo";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {logo: state.logo}
}

const LogoContainer = connect(mapStateToProps)(Logo)

export default LogoContainer;