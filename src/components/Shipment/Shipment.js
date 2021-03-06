import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import Sidebar from '../DashBoard/Sidebar/Sidebar';

const Shipment = () => {
  const [currentEvent, setCurrentEvent] = useState([])
  const { _id } = useParams();
  useEffect(() => {
    fetch("https://immense-hamlet-65512.herokuapp.com/events")
      .then(res => res.json())
      .then(data => {
        setCurrentEvent(data);
      })
      .catch(err => console.log(err))
  }, [])
  const event = currentEvent.find(pd => pd._id === _id);

  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null)
  const onSubmit = data => {
    setShippingData(data);
  }

  const handlePaymentSuccess = paymentId => {
    // console.log(data);
    const orderDetails = {
      ...loggedInUser,
      service: event,
      shipments: shippingData,
      paymentId,
      status: "pending",
      orderTime: new Date()
    }

    fetch('https://immense-hamlet-65512.herokuapp.com/submitOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          alert('your order placed successfully')
        }
      })
  }

  console.log(watch("example"));
  return (
    <section className="container-fluid row">
      <Sidebar />
      <div className="shipment row container col-md-6 col-sm-12 col-12 my-5">
        <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6">
          <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
            <input name="name" ref={register({ required: true })} placeholder="your name" />
            {errors.name && <span className="error">Name is required</span>}
            <input name="email" ref={register({ required: true })} placeholder="your email" />
            {errors.email && <span className="error">Email is required</span>}
            <input name="address" ref={register({ required: true })} placeholder="your address" />
            {errors.address && <span className="error">address is required</span>}
            <input name="phone" ref={register({ required: true })} placeholder="your phone" />
            {errors.phone && <span className="error">phone is required</span>}
            <input type="submit" />
          </form>
        </div>
        <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
          <h1>Payment Method</h1>
          <ProcessPayment event={event} handlePayment={handlePaymentSuccess}></ProcessPayment>
        </div>
      </div>
    </section>
  );
};

export default Shipment;
