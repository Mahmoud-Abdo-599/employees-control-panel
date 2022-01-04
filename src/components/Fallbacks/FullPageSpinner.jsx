import React from 'react'
import styles from "./styles.module.scss";
import { Spin } from 'antd';

function FullPageSpinner() {
    return (
        <div className={styles.fullPageSpinner}>
            <Spin size='large' />
        </div>
    )
}

export default FullPageSpinner
