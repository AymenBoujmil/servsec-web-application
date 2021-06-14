import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap';
import './Clientreview.css'
function Clientreview () {
        return (
            <div id="cr">
          <div style={{alignItems:"center"}}>
          <Carousel fade >
              <Carousel.Item>
              <img
              height="150px"
              className="d-block w-100"
              src="img/product_overlay.png"
              alt="Third slide"
              />
              <Carousel.Caption>
                  <h3>Raul Garcia</h3>
                  <p>"I would highly recommend using this site if you're looking to get things done quickly and efficiently"</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
              height="150px"
              className="d-block w-100"
              src="img/product_overlay.png"
              alt="Third slide"
               />
              <Carousel.Caption>
                <h3>John Marston</h3>
                <p>"Great Site. You can easily request any service at any time almost instantly."</p>
              </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
              <img
                  height="150px"
                  className="d-block w-100"
                  src="img/product_overlay.png"
                  alt="Third slide"
              />
              <Carousel.Caption>
              <h3>Allison Smith</h3>
              <p>"This website is simply amazing! It has helped me find services when I'm in a pinch. Also, it is easy to use and navigate."</p>
              </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
        </div>
            </div>
        )
    }
export default Clientreview;