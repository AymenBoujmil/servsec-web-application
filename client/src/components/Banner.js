import React, { Component } from 'react'

export default class Banner extends Component {
    render() {
        return (
          <div>
  {/* banner part start*/}
  <section className="banner_part">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5">
          <div className="banner_text">
            <div className="banner_text_iner">
              <h1>Best quality
                services</h1>
              <p>Enjoy a variety of services while saving money,time and much more ..
             </p>
              <a href="product_list.html" className="btn_1">Start now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="banner_img">
      <img src="img/banner.jpg" alt="#" className="img-fluid" />
      <img src="img/banner_pattern.png " alt="#" className="pattern_img img-fluid" />
    </div>
  </section>
  {/* banner part start*/}
</div>

        )
    }
}
