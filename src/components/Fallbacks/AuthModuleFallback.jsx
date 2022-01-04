import React from 'react'
import styles from "./styles.module.scss"
import { Skeleton } from 'antd'

function AuthModuleFallback() {
    return (
        <div className={styles.authModuleFallback}>
            <Skeleton active />
        </div>
    )
}

export default AuthModuleFallback
