import React from 'react';
import styles from "./Header.module.scss";
import TopNavContainer from "./TopNav/TopNavContainer";
import HeaderLeftContainer from "./HeaderLeft/HeaderLeftContainer";

const Header = (props) => {
    return (
        <div className={styles.header}>
            <HeaderLeftContainer />
            <TopNavContainer />
            <div className="clearfix"></div>
        </div>
    );
};

export default Header;