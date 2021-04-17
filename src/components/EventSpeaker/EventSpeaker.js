import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Developer from "../../image/1608733312714.png"
import "./EventSpeaker.css";


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const EventSpeaker = () => {
    return (
        <>
        <h1 className="text-center my-5" style={{ marginLeft: "100px"}}> <span style={{fontFamily:"Impact, 'Arial Narrow Bold', sans-serif"}}>EVENT SPEAKERS</span>/ meet with greaters</h1>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item>
                <div className="text-center">
                <img style={{width:'90%'}} src={Developer} alt=""/>
                <h3>Karimul Haque <span>(manager)</span></h3>
                </div>
             </Item>
             <Item>
                <div className="text-center">
                <img style={{width:'90%'}} src={Developer} alt=""/>
                <h3>Karimul Haque <span>(developer)</span></h3>
                </div>
             </Item>
             <Item>
                <div className="text-center">
                <img style={{width:'90%'}} src={Developer} alt=""/>
                <h3>Karimul Haque <span>(developer)</span></h3>
                </div>
             </Item>
             <Item>
                <div className="text-center">
                <img style={{width:'90%'}} src={Developer} alt=""/>
                <h3>Karimul Haque <span>(manager)</span></h3>
                </div>
             </Item>
             <Item>
                <div className="text-center">
                <img style={{width:'90%'}} src={Developer} alt=""/>
                <h3>Karimul Haque <span>(manager)</span></h3>
                </div>
             </Item>
             <Item>
                <div className="text-center">
                <img style={{width:'90%'}} src={Developer} alt=""/>
                <h3>Karimul Haque <span>(developer)</span></h3>
                </div>
             </Item>
             <Item>
                <div className="text-center">
                <img style={{width:'90%'}} src={Developer} alt=""/>
                <h3>Karimul Haque <span>(manager)</span></h3>
                </div>
             </Item>
             <Item>
                <div className="text-center">
                <img style={{width:'90%'}} src={Developer} alt=""/>
                <h3>Karimul Haque <span>(manager)</span></h3>
                </div>
             </Item>
          </Carousel>
        </div>
      </>
    );
};

export default EventSpeaker;