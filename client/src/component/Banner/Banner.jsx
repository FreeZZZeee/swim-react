import React from 'react';
import styles from './Banner.module.scss'
import BannerInfoContainer from "./BannerInfo/BannerInfoContainer";
import HeaderContainer from "./Header/HeaderContainer";

const Banner = (props) => {
    return (
        <div className={styles.banner} id={'head'}>
            <HeaderContainer />
            <BannerInfoContainer />
        </div>
    );
};

export default Banner;