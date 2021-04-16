import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({event}) => {
    const {_id,name,shortDescription,images} = event;
    return (
        <div className="col-md-3 mb-4">
                <div className="card text-center">
                    <img src={images} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5>{name}</h5>
                        <p>{shortDescription}</p>
                        <Link to={"shipment/"+_id}><button className="btn btn-outline-secondary">Book</button></Link>
                    </div>
                </div>
        </div>
    );
};


export default Book;