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
                  <h3>User2</h3>
                  <p>"Good Site"</p>
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
                <h3>User1</h3>
                <p>"Great Site"</p>
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
              <h3>User3</h3>
              <p>"Amazing"</p>
              </Carousel.Caption>
              </Carousel.Item>
          </Carousel>
        </div>
            </div>
        )
    }
export default Clientreview;