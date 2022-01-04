import React from 'react'
import { Card, Skeleton } from 'antd'

function ModulesFallBack() {
    return (
        <Card>
            <Skeleton active />
            <Skeleton active />
        </Card>
    )
}

export default ModulesFallBack
