import React from 'react';
import { Elements, CardElement } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IeARqLDOvl20Q7TAjfyTrRlv3VKKiilXmxwupXzq2B1GubrF4kfzHkhrvljQgAXsxWWX7mpt9CM8eFd4LgrA7WY00AkCX8Poc');

const ProcessPayment = ({event,handlePayment}) => {
    console.log(event)
    return (
        <>
       { event?  <h3>your payable amount: ${event.price} </h3>:''}
        <Elements stripe={stripePromise}>
           <SimpleCardForm handlePayment={handlePayment}></SimpleCardForm>
        </Elements>
       </>
    );
};

export default ProcessPayment;