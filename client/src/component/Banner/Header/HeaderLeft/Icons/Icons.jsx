import React from 'react';
import styles from "./Icons.module.scss";

const Icons = (props) => {
    return (
        <div className={styles.agileinfo_social_grids}>
            <ul>
                {props.icons.map((icon) => (
                    <li key={icon._id}><a href={icon.href}><i
                        className={`${icon.classFa} ${icon.class} ${styles.fa} ${styles[icon.class]}`}/></a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Icons;