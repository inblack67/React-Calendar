import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-calendar';

const EventItem = ({ event: { start, end, name } }) => {

    const [startDate, setStartDate] = useState(new Date(start));
    const [endDate, setEndDate] = useState(new Date(end));

    const [defaults, setDefaults] = useState([startDate, endDate]);
    
    return (
<div className='container'>
    <div className="card">
        <div className="card-content">
            <h1 className="card-title">
                {name}
            </h1>
            <span><strong>Start:</strong> {start}</span>
            <span><strong>End:</strong> {end}</span>
        </div>
    </div>

    <div className="calendar">
        <Calendar value={defaults} />
    </div>

</div>
)
}

EventItem.propTypes = {
    event: PropTypes.object.isRequired,
}

export default EventItem
