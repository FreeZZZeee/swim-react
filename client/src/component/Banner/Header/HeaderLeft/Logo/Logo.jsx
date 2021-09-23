import React from 'react';
import styles from "./Logo.module.scss";

const Logo = (props) => {
    return (
        <div className={styles.w3layouts_logo}>
            <h1>
                <a href={'#head'}>{props.logo.title}</a>
            </h1>
        </div>
    );
};

export default Logo;