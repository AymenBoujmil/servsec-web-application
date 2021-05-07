import React, { Component } from 'react'

export default class Clientreview extends Component {
    render() {
        return (
            <div>
                 {/* client review part here */}
  <section className="client_review">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="client_review_slider owl-carousel">
          <div className="single_client_review">
            <div className="client_img">
              <img src="img/client.png" alt="#" />
            </div>
            <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
            <h5>- Micky Mouse</h5>
          </div>
          <div className="single_client_review">
            <div className="client_img">
              <img src="img/client_1.png" alt="#" />
            </div>
            <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
            <h5>- Micky Mouse</h5>
          </div>
          <div className="single_client_review">
            <div className="client_img">
              <img src="img/client_2.png" alt="#" />
            </div>
            <p>"Working in conjunction with humanitarian aid agencies, we have supported programmes to help alleviate human suffering.</p>
            <h5>- Micky Mouse</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* client review part end */}
            </div>
        )
    }
}
