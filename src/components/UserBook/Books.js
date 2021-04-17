import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Books = ({data}) => {
    console.log(data)
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const{name, fullDescription} = order.service;
    return (
        <>
             <div className="col-md-3 mb-4">
                <div className="card text-center">
                    <button>update status</button>
                    <img src={data.service.images} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5>Name: {data.shipments.name}</h5>
                        <p>Service: {data.service.name}</p>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Books;