import React, { useEffect, useState } from 'react';
import Review from './Review';
const GetReview = () => {
    const[review, setReview] = useState([])
    useEffect(() => {
        fetch('https://immense-hamlet-65512.herokuapp.com/review')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
        .catch(err => console.log(err))
    } ,[])
    return (
        <div className="container">
            <h1 className="my-5">Testimonial//See What People Say About Us</h1>
      <div className="row">
          {
              review.map(data => <Review data={data}></Review>)
          }
      </div>
        </div>
      
    );
};

export default GetReview;