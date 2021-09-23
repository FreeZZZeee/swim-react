import NavBarCollapse from "./NavBarCollapse";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {navBarNav: state.categories}
}

const NavBarCollapseContainer = connect(mapStateToProps)(NavBarCollapse)

export default NavBarCollapseContainer;