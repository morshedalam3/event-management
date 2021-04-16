import React , { useState,useEffect } from 'react';
import './EventDetails.css';
import { useParams } from 'react-router-dom';

const EventDetails = () => {
    const [currentEvent,setCurrentEvent] = useState([])
    console.log(currentEvent)
    const {_id} = useParams();

    useEffect(() => {
        fetch("http://localhost:8080/events")
        .then(res=>res.json())
        .then(data => {
            setCurrentEvent(data);
        })
        .catch(err => console.log(err))
    }, [])
    const event = currentEvent.find(pd => pd._id === _id);
    console.log(event)  
    return (

        <div className="food-details my-5 pt-5 container">
            {
                event?

                <div className="row">
                    <div className="col-md-6 pr-md-4">
                        <h1>{event.name}</h1>
                        <p className="my-5">{event.fullDescription}</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={event.images} alt="" />
                    </div>
                </div>: ''
            }
        </div>
        
    );
};

export default EventDetails;