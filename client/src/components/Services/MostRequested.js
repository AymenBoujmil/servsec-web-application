import { Grid } from "@material-ui/core";
import React,{useState} from "react";
import {Carousel} from "react-bootstrap";
import '../../assets/styleCarousel.css'
import ServiceItem from './ServiceItem'

function MostRequested() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (  
    <> 
    <div className="row title" style={{marginBottom: "20px"}} >      
    <div class="col-sm-12 btn ">      
      <h1>Check out these services!</h1>
    </div>      
    </div>
    <Carousel activeIndex={index} onSelect={handleSelect} className="">
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src="https://imgd.aeplcdn.com/1280x720/n/cw/ec/38904/mt-15-right-front-three-quarter.jpeg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src="https://filedn.com/ltOdFv1aqz1YIFhf4gTY8D7/ingus-info/BLOGS/Photography-stocks3/stock-photography-slider.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImg"
          src="https://img-19.ccm2.net/uV_MR86--H0-ZK2MioHY7jYD07o=/1000x420/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </>
  );
}

export default MostRequested;
