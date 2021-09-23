import React from 'react';
import styles from './BannerInfo.module.scss'

const BannerInfo = (props) => {
    return (
        <div className={styles.banner_info}>
            <div className="container">
                <h3>Новое поколение в обучении</h3>
                <h2>УРОКИ ПЛАВАНИЯ</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere tempor quam, vitae
                    vestibulum lacus placerat non. Donec volutpat odio sed neque molestie elementum quis nec
                    nisi. Phasellus elit leo, lobortis non massa in, elementum maximus urna.</p>
            </div>
        </div>
    );
};

export default BannerInfo;