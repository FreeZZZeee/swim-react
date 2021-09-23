import React from 'react';
import styles from "./TopNav.module.scss";
import NavBarCollapseContainer from "./NavBarCollapse/NavBarCollapseContainer";
import NavBarHeaderContainer from "./NavBarHeader/NavBarHeaderContainer";

const TopNav = (props) => {
    return (
        <div className={`${styles.top_nav}`}>
            <nav className={`navbar navbar-expand-lg ${styles.navbar_default} ${styles.top_nav}`}>
                <NavBarHeaderContainer />
                <NavBarCollapseContainer />
            </nav>
        </div>
    );
};

export default TopNav;