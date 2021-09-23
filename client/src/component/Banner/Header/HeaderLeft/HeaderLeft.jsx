import React from 'react';
import styles from "./HeaderLeft.module.scss";
import IconsContainer from "./Icons/IconsContainer";
import LogoContainer from "./Logo/LogoContainer";

const HeaderLeft = (props) => {
    return (
        <div className={styles.header_left}>
            <LogoContainer />
            <IconsContainer />
            <div className="clearfix"></div>
        </div>
    );
};

export default HeaderLeft;