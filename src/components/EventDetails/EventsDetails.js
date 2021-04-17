import React , { useState,useEffect } from 'react';
import './EventDetails.css';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,} from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading'
const EventDetails = () => {
    const [currentEvent,setCurrentEvent] = useState([])
    // const[isLoading, setIsLoading] = useState(true);
    console.log(currentEvent)
    const {_id} = useParams();

    useEffect(() => {
        fetch("https://immense-hamlet-65512.herokuapp.com/events")
        .then(res=>res.json())
        .then(data => {
            setCurrentEvent(data);
        })
       
    }, [])
    const event = currentEvent.find(pd => pd._id === _id);
    console.log(event)  
  
    return (

        <div className="food-details my-5 pt-5 container">
      
            {
                !event? <Loading/> :

                <div className="row">
                    <div className="col-md-6 pr-md-4">
                        <h1>{event.name}</h1>
                        <p className="my-5">{event.fullDescription}</p>
                        <ul className="list-unstyled d-flex justify-content-center text-warning">
                            <li>
                            <FontAwesomeIcon icon={faStar} /> 
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faStar} /> 
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faStar} /> 
                            </li>
                            <li>
                            <FontAwesomeIcon icon={faStar} /> 
                            </li>
                        </ul>
                        <a href={`https://www.youtube.com/watch?v=ZpC6MLYPI6w`}> <img style={{width:'30%'}} src="https://i.ibb.co/nR2Rk7S/source.gif" alt=""/> </a>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={event.images} alt="" />
                    </div>
                </div>
            }
            <Link to="/">Go Back</Link>
        </div>
        
    );
};

export default EventDetails;