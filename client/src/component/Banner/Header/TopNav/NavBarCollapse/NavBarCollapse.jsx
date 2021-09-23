import React from 'react';
import styles from "./NavBarCollase.module.scss";

const NavBarCollapse = (props) => {
    return (
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`navbar-nav ${styles.navbar_nav}`}>
                {props.navBarNav.map((navBarLink) => (
                    <li key={`navBarNav-${navBarLink._id}`} className={`nav-item`}><a className={navBarLink.class}
                                                                       href={navBarLink.href}>{navBarLink.title}</a>
                    </li>
                ))}
            </ul>
            <div className="clearfix"></div>
        </div>
    );
};

export default NavBarCollapse;