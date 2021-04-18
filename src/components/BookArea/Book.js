import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,} from '@fortawesome/free-solid-svg-icons';
import './Book.css'

const Book = ({ event }) => {
    const { _id, name, shortDescription, images } = event;
    return (
        <div className="col-md-3 mb-4 box-area">
            <div className="card text-center">
                <img src={images} alt="" className="card-img-top" />
                <div className="card-body">
                    <h5>{name}</h5>
                    <p>{shortDescription}</p>
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
                    <Link to={"shipment/" + _id}><button className="btn btn-outline-secondary">Book</button></Link>
                </div>
            </div>
        </div>
    );
};


export default Book;