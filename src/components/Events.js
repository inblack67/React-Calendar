import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import EventItem from './EventItem';

const Events = () => {

    useEffect(() => {
        getEvents();
    },[])

    const [events, setEvents] = useState(null);
    const [loading, setLoading] = useState(true);

    const getEvents = async () => {
        const res = await axios('./JSON/Events.json');
        setEvents(res.data.events);
        setLoading(false);
    }
    
    if(loading){
        return <h3 className='text-center'>Loading...</h3>
    }

    return (
        <div className="events">
            { !loading && events && events.map((event, index) => <EventItem key={index} event={event} />) }
        </div>
    )
}

export default Events
