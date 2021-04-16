import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const ManageService = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('https://immense-hamlet-65512.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    const deleteEvent =(id, e)=> {
        fetch(`https://immense-hamlet-65512.herokuapp.com/deleteService/${id}`,{
            method: 'delete'
        })
        .then(res => res.json())
        .then(result =>{
         console.log(result)   
        })
    }
      
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
 <div className="container">
        <div className="row">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Service Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events.map(event => <tr>
                            <td scope="row">{event.type}</td>
                            <td>{event.shortDescription}</td>
                            <td><button class="btn btn-success"><FontAwesomeIcon icon={faEdit} /></button> <button onClick={() => deleteEvent(event._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
        </section>
       
    );
};
export default ManageService;