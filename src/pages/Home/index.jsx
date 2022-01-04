import React, { useEffect, useState } from 'react';
import styles from "./styles.module.scss";
import { Card } from 'antd';
import requester from "../../helpers/httpRequester";
import Header from './partials/Header';
import ArriveTime from './partials/ArriveTime';
import ExitTime from './partials/ExitTime';
import LunchBreakTimes from './partials/LunchBreakTimes';
import getCurrentDate from "../../helpers/getCurrentDate";

function Home() {
    useEffect(() => {
        fetchEmployeeData()
    }, [])

    const [employeeData, setEmployeeData] = useState()
    const [isLoading, setIsLoading] = useState(false)

    console.log(employeeData, "employeeData");

    const startNewDay = async () => {
        setIsLoading(true)
        await requester.post("/days", {
            day: getCurrentDate(),
            arriveTime: null,
            exitTime: null,
            lunchBreakTimes: null
        }).then((response) => {
            setEmployeeData(response.data[0])
        })
        setIsLoading(false)
    }

    const fetchEmployeeData = async () => {
        setIsLoading(true)
        await requester.get(`/days?day=${getCurrentDate()}`).then((response) => {
            console.log(response, "response");
            if (response.data?.length > 0) {
                setEmployeeData(response.data[0])
            } else {
                startNewDay()
            }
        })
        setIsLoading(false)
    }

    const partialsProps = {
        data: employeeData,
        isLoading
    }

    return (
        <Card className={styles.home}>
            <Header />
            <div className={styles.home__content}>
                <ArriveTime {...partialsProps} />
                <ExitTime {...partialsProps} />
                <LunchBreakTimes {...partialsProps} />
            </div>
        </Card>
    )
}

export default Home
