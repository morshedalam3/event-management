import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

const BookArea = () => {
    const[events, setEvents] = useState([]);
    console.log(events)
    useEffect(() => {
        fetch('http://localhost:8080/events')
        .then(res => res.json())
        .then(data => {
            setEvents(data);
        })
        .catch(err => console.log(err))
    } ,[])
    return (
        <div className="container">
            <h1>Don't forget Book your Room</h1>
            <div className="row  my-5">
            {
                events.map(event => <Book key={event.id}  event={event}></Book> )
            }
            
            </div>
           
           
        </div>
    );
};

export default BookArea;