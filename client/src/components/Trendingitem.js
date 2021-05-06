import React, { Component } from 'react'

export default class Trendingitem extends Component {
    render() {
        return (
            <div>
                {/* trending item start*/}
  <section className="trending_items">
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="section_tittle text-center">
          <h2>Trending Items</h2>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 col-sm-6">
        <div className="single_product_item">
          <div className="single_product_item_thumb">
            <img src="img/tranding_item/tranding_item_1.png" alt="#" className="img-fluid" />
          </div>
          <h3> <a href="single-product.html">Cervical pillow for airplane
              car office nap pillow</a> </h3>
          <p>From $5</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single_product_item">
          <img src="img/tranding_item/tranding_item_2.png" alt="#" className="img-fluid" />
          <h3> <a href="single-product.html">Foam filling cotton slow rebound pillows</a> </h3>
          <p>From $5</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single_product_item">
          <img src="img/tranding_item/tranding_item_3.png" alt="#" className="img-fluid" />
          <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
          <p>From $5</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single_product_item">
          <img src="img/tranding_item/tranding_item_4.png" alt="#" className="img-fluid" />
          <h3> <a href="single-product.html">Cervical pillow for airplane
              car office nap pillow</a> </h3>
          <p>From $5</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single_product_item">
          <img src="img/tranding_item/tranding_item_5.png" alt="#" className="img-fluid" />
          <h3> <a href="single-product.html">Foam filling cotton slow rebound pillows</a> </h3>
          <p>From $5</p>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        <div className="single_product_item">
          <img src="img/tranding_item/tranding_item_6.png" alt="#" className="img-fluid" />
          <h3> <a href="single-product.html">Memory foam filling cotton Slow rebound pillows</a> </h3>
          <p>From $5</p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* trending item end*/}
            </div>
        )
    }
}
