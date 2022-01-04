import React from 'react';
import styles from "../styles.module.scss";
import getCurrentDate from "../../../helpers/getCurrentDate";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.header__hours}>
                <b>Expected working hours:</b>
                <p>8 hours</p>
            </div>
            <h2 className={styles.header__date}>{getCurrentDate()}</h2>
        </div>
    )
}

export default Header
