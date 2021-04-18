
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './SideAnimation.css'

const SideAnimation = () => {
  const style={
  }
    return (
      <div className="align">
<Carousel fade className="">
  <Carousel.Item >
    <div className>

    </div>
  <img
      className="d-block w-100"
      src="https://i.ibb.co/gJg9h58/headway-5-Qg-Iuu-Bx-Kw-M-unsplash.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 style={{color:'black',backgroundColor:'white'}}>What you need, is an Event, to remember for a lifetime</h1>
      <p>Creativity and innovation is to events, what the heart and soul is to the living</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/BBN5MDp/matthew-osborn-w-MRIc-T86-SWU-unsplash.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h1 style={{backgroundColor:'black'}}>You can't be a good manager if you are doing everything yourself</h1>
      <p>On the day of an event, a good event manager is always the first to arrive and last to leave.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/2tmYx9b/paul-hanaoka-tl-Tqr-Z3d0nw-unsplash.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h1>The only way to do great work is to love what you do</h1>
      <p>An event shouldn't be just an experiential thing, it should be an emotional thing</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/k1T8dWh/neonbrand-Pfa7-Soh0euw-unsplash.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      
      <h1>A goal without a plan is just a wish.</h1>
      <p>The purpose of event management is to create a client who creates other clients</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
      </div>

    );
};

export default SideAnimation;