import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

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
            <Sidebar />
            <div className="container col-md-6 my-5">


                <div className="row">
                    <table class="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">ServiceName</th>
                                <th scope="col">Payment Method</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                order.map(order => <tr>
                                    <td scope="row">{order.name}</td>
                                    <td>{order.service.name}</td>
                                    <td>Card</td>
                                    <td>{order.status}</td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default UserBook;