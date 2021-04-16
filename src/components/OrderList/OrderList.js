import React, { useEffect, useState } from 'react';
import Sidebar from '../DashBoard/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit} from '@fortawesome/free-solid-svg-icons'

const OrderList = () => {
    const[orderList, setOrderList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/orderList")
        .then(res=>res.json())
        .then(data => {
            setOrderList(data);
        })
        .catch(err => console.log(err))
    }, [])
    return (
        <section className="container-fluid row">
         <Sidebar/>
 <div className="container">
        <div className="row">
            <table class="table table-dark table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">ServiceName</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orderList.map(order => <tr>
                            <td scope="row">{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.service.name}</td>
                            <td><button class="btn btn-success"><FontAwesomeIcon icon={faEdit} /></button> <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button></td>
                        </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
        </section>
    );
};

export default OrderList;