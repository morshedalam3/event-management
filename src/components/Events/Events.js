import React, { useEffect, useState } from 'react';
import EventType from '../EventType/EventType';
import Loading from '../Loading/Loading';
import './Events.css'

const Events = () => {
    const [events, setEvents] = useState([]);
    console.log(events)
    const [selectedEventType, setSelectedEventType] = useState("Festival");
    // const [preloaderVisibility, setPreloaderVisibility] = useState(true);

    useEffect(() => {
        fetch('https://immense-hamlet-65512.herokuapp.com/events')
        .then(res => res.json())
        .then(data => {
            setEvents(data);
        })
        .catch(err => console.log(err))
    } ,[])

    const selectedEvent =  events.filter(event => event.type == selectedEventType)
    
    return (
        <section className="event-area my-5">
            <div className="container">
                {events.length === 0 && <Loading/>}
                <nav>
                    <ul className="nav justify-content-center">
                        <li onClick={() => setSelectedEventType("Festival")} className="nav-item">
                            <span  to="festival" className={selectedEventType === "Festival" ?  "active nav-link" : "nav-link"}>Festival</span>
                        </li>
                        <li onClick={() => setSelectedEventType("conference")} className="nav-item">
                            <span to="Conference" className={selectedEventType === "conference" ?  "active nav-link" : "nav-link"}>Conference</span>
                        </li>
                        <li onClick={() => setSelectedEventType("playGround")} className="nav-item">
                            <span to="Playground" className={selectedEventType === "playGround" ?  "active nav-link" : "nav-link"}>Playground</span>
                        </li>
                    </ul>
                </nav>

                <div className="row my-5">
                    {
                        selectedEvent.map(event => <EventType key={event.id}  event={event} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Events;