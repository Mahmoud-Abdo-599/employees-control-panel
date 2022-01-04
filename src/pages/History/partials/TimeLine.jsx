import React from 'react';
import { Timeline } from 'antd';

function TimeLineComponent({ data }) {
    return (
        <Timeline>
            {data?.length > 0 && data.map((value, idx) => (
                <Timeline.Item key={idx}>
                    <p>Day: {value.day ? value.day : "Not exists"}</p>
                    <p>Arrive Time: {value.arriveTime ? value.arriveTime : "Not exists"}</p>
                    <p>Exit Time: {value.exitTime ? value.exitTime : "Not exists"}</p>
                    <p>Lunch Break Time: {" "}
                        {value.lunchBreakTimeStart ? value.lunchBreakTimeStart : "Not exists"} - {" "}
                        {value.lunchBreakTimeEnd ? value.lunchBreakTimeEnd : "Not exists"}
                    </p>
                </Timeline.Item>
            ))}
        </Timeline>
    )
}

export default TimeLineComponent
