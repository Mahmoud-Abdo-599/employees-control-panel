import React, { useEffect, useState } from 'react'
import styles from "../styles.module.scss";
import { TimePicker, Skeleton } from 'antd';
import requester from "../../../helpers/httpRequester";
import moment from 'moment';
import { ReactComponent as ClockIcon } from "../../../assets/images/clock.svg"

const format = 'HH:mm a';

function ExitTime({ data, isLoading }) {
    const [timeValue, setTimeValue] = useState()

    useEffect(() => {
        if(data?.exitTime) {
            setTimeValue(data.exitTime)
        }
    }, [data])

    const updateExitTime = async (time) => {
        await requester.patch(`/days/${data.id}`, {
            exitTime: time
        })
    }

    const handleTimeChange = value => {
        let time = moment(value).format(format)
        updateExitTime(time)
        setTimeValue(time)
    }

    return (
        <div className={styles.time}>
            <div className={styles.time__start}>
                <div className={styles.time__start__icon}><ClockIcon /></div>
                <b className={styles.time__start__title}>Exit Time</b>
            </div>
            <div className={styles.time__end}>
                {!isLoading ? (
                    <TimePicker value={timeValue && moment(timeValue, format)} onChange={handleTimeChange} format={format} />
                ) : (
                    <Skeleton.Input style={{ width: 150 }} active />
                )}
            </div>

        </div>
    )
}

export default ExitTime
