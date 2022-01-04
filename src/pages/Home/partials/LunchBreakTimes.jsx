import React, { useEffect, useState } from 'react'
import styles from "../styles.module.scss";
import { TimePicker, Skeleton } from 'antd';
import requester from "../../../helpers/httpRequester";
import moment from 'moment';
import { ReactComponent as ClockIcon } from "../../../assets/images/clock.svg"

const format = 'HH:mm a';

function LunchBreakTimes({ data, isLoading }) {
    const [timeValue, setTimeValue] = useState()

    useEffect(() => {
        if (data?.lunchBreakTimeStart && data?.lunchBreakTimeEnd) {
            setTimeValue([data.lunchBreakTimeStart, data.lunchBreakTimeEnd])
        }
    }, [data])

    const updateLunchBreakTimes = async (times) => {
        await requester.patch(`/days/${data.id}`, {
            lunchBreakTimeStart: times[0],
            lunchBreakTimeEnd: times[1]
        })
    }

    const handleTimeChange = values => {
        let times = []
        values?.length > 0 && values.map((value) => {
            times.push(moment(value).format(format))
        })
        updateLunchBreakTimes(times)
        setTimeValue(times)
    }

    const timeValuesMoment = () => {
        let result = []
        timeValue?.length > 0 && timeValue.map((value) => {
            result.push(moment(value, format))
        })
        return result
    }

    return (
        <div className={styles.time}>
            <div className={styles.time__start}>
                <div className={styles.time__start__icon}><ClockIcon /></div>
                <b className={styles.time__start__title}>Lunch Break Times</b>
            </div>
            <div className={styles.time__end}>
                {!isLoading ? (
                    <TimePicker.RangePicker value={timeValue && timeValuesMoment()} onChange={handleTimeChange} format={format} />
                ) : (
                    <Skeleton.Input style={{ width: 150 }} active />
                )}
            </div>

        </div>
    )
}

export default LunchBreakTimes
