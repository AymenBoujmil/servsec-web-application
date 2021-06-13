import React from 'react'
import ControlledCarousel from '../../_utils/Carousel'
import {Link} from "react-router-dom";

function  Funclist () {
  const user=JSON.parse(localStorage.getItem('profile'));
  var val = user ? "/ServiceList" : "/login";

        return (
            <div>
                {/* product list start*/}
  <section className="single_product_list" style={{paddingTop:"50px"}}>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="single_product_iner">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-sm-6">
              <div className="single_product_img">
                <ControlledCarousel/>
                <img src="img/product_overlay.png" alt="#" className="product_overlay img-fluid" style={{height:"320px"}} />
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="single_product_content">
                <h5>Check it now</h5>
                <h2> <a href="#">Assured Quality while saving time and money !!</a> </h2>
                <Link to={val} className="btn_3">{user ? "Start Now! " : "Log In Now !" }</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="single_product_iner">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-sm-6">
              <div className="single_product_img">
                <img src="img/banner.jpg" className="img-fluid" alt="#" />
                <img src="img/product_overlay.png" alt="#" className="product_overlay img-fluid" style={{height:"220px",width:"60%"}} />
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="single_product_content">
                <h5>A variety of choices </h5>
                <h2> <a href="#categoryList">Explore all our categories and choose what you need ..</a> </h2>
                {user?(
                  <a href="#categoryList" className="btn_3">Explore Now</a>
                ):(
                  <Link to="/login" className="btn_3">Explore Now</Link>
                )}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* product list end*/}
            </div>
        )
    }
export default Funclist;
