import  React, { Component,useState } from 'react'
import { Carousel } from 'react-bootstrap';

function ControlledCarousel() {
    return (
     <div >
        <Carousel fade prevIcon="" nextIcon=""  indicators="">
            <Carousel.Item interval={1700}>
            <img            
                className="d-block w-100 "
                height="250px"
                src="img/quality.png"
                alt="First slide"
            />                                         
            </Carousel.Item>
            <Carousel.Item interval={1700}>
            <img
                height="250px"
                className="d-block w-100"
                src="img/moneyandtime.jpg"
                alt="Second slide"
            />
            </Carousel.Item>
            <Carousel.Item interval={1700}>
            <img
                height="250px"
                className="d-block w-100"
                src="img/rating.jpg"
                alt="Third slide"
            />
            </Carousel.Item>
        </Carousel>
      </div>
    );
  }
  
 export default ControlledCarousel;