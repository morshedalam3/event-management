import React, { useEffect, useState } from 'react';
import Book from './Book';
import Loading from '../Loading/Loading';

const BookArea = () => {
    const[events, setEvents] = useState([]);
    const[isLoading, setIsLoading] = useState(true);
    console.log(events)
    useEffect(() => {
        fetch('https://immense-hamlet-65512.herokuapp.com/events')
        .then(res => res.json())
        .then(data => {
            setEvents(data);
        })
        setIsLoading(false)
        // .catch(err => console.log(err))
        // setIsLoading(false)
    } ,[])
    if(isLoading){
        return <Loading/>
    }
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