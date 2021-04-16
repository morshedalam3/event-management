import React from 'react';
import { Col, Image } from 'react-bootstrap';

const Review = ({data}) => {
    const {name,description,images} = data;
    return (
        <div className="col-md-4 mb-4">
                <div className="card">
                    {/* <img src={images} alt="" className="card-img-top"/> */}
                    <div className="card-body">
                    <p>{description}</p>
                        <h5>by {name}</h5>
                         <Col xs={6} md={4}>
                        <Image style={{width:'100%', textAlign:'center'}} src={images}roundedCircle />
                        </Col>
                    
                    </div>
                </div>
        </div>
    );
};

export default Review;