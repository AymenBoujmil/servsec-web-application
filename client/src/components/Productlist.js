import React, { Component } from 'react'

export default class Productlist extends Component {
    render() {
        return (
            <div>
                {/* product list start*/}
  <section className="single_product_list">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="single_product_iner">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-sm-6">
              <div className="single_product_img">
                <img src="img/single_product_1.png" className="img-fluid" alt="#" />
                <img src="img/product_overlay.png" alt="#" className="product_overlay img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="single_product_content">
                <h5>Started from $10</h5>
                <h2> <a href="single-product.html">Printed memory foam 
                    brief modern throw 
                    pillow case</a> </h2>
                <a href="product_list.html" className="btn_3">Explore Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="single_product_iner">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-sm-6">
              <div className="single_product_img">
                <img src="img/single_product_2.png" className="img-fluid" alt="#" />
                <img src="img/product_overlay.png" alt="#" className="product_overlay img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="single_product_content">
                <h5>Started from $10</h5>
                <h2> <a href="single-product.html">Printed memory foam 
                    brief modern throw 
                    pillow case</a> </h2>
                <a href="product_list.html" className="btn_3">Explore Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className="single_product_iner">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 col-sm-6">
              <div className="single_product_img">
                <img src="img/single_product_3.png" className="img-fluid" alt="#" />
                <img src="img/product_overlay.png" alt="#" className="product_overlay img-fluid" />
              </div>
            </div>
            <div className="col-lg-5 col-sm-6">
              <div className="single_product_content">
                <h5>Started from $10</h5>
                <h2> <a href="single-product.html">Printed memory foam 
                    brief modern throw 
                    pillow case</a> </h2>
                <a href="product_list.html" className="btn_3">Explore Now</a>
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
}
