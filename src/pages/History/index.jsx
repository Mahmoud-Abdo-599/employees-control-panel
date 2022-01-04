import React, { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import requester from "../../helpers/httpRequester";
import { Card } from 'antd';
import Timeline from "./partials/TimeLine";
import FullPageSpinner from "../../components/Fallbacks/FullPageSpinner";

function History() {
    const [historyData, setHistoryData] = useState();
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchHistoryData();
    }, [])

    const fetchHistoryData = async () => {
        setIsLoading(true)
        await requester.get("/days").then(response => {
            if(response.data) {
                setHistoryData(response.data)
            }
        })
        setIsLoading(false)
    }

    return (
        <Card className={styles.history}>
            <h1 className={styles.history__title}>History</h1>
            <div className={styles.history__body}>
                {!isLoading ? (
                    <Timeline data={historyData} />
                ): (
                    <FullPageSpinner />
                )}
            </div>
        </Card>
    )
}

export default History
