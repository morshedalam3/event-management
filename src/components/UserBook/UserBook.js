  
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import Books from './Books';

const UserBook = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState([])
    const [isLoading, setLoading] = useState(true)
    console.log(order)
    useEffect(() => {
        fetch('https://immense-hamlet-65512.herokuapp.com/orderedEvent?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => setOrder(data))
            setLoading(false)

    }, [])

    return (
        <section className="container-fluid row">
          <Sidebar/>
          <div className="container col-md-6 my-5">
          {isLoading? <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden"></span>
                    </div>
                </div>:
          <div className=" row  my-5">
            {
                order.map( pd => <Books key={order._id} data={pd}></Books> )
            }
            
            </div>}
          </div>
          
        </section>
    );
};

export default UserBook;