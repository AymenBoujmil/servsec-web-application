import React, { Component } from 'react'


export default class AboutUs extends Component {
    render() {
        return (
            <div>
                <br/><br/>
                <div className="container card border-0 shadow my-5 card-body p-5"> 
                <div className="center btmspace-80">
                    <h3  style={{fontWeight: 600, color: 'burlywood',textAlign:'center'}}>
                    -Our Mission-</h3>
                </div>
                <br />
                <p style={{fontSize: 'large',textAlign:'center'}}> To provide a reliable web application to access dierse services</p>
                <br />
                <h3  style={{fontWeight: 600, color:'burlywood',textAlign:'center'}}>
                -About-</h3>
                <br/>
                <p style={{fontSize: 'large'}}>At <strong>Servsec</strong> we all come to work every day because we want
                to solve the biggest problem in our society.Solving our daily problems in the most efficient way.
                it is all about acquiring the<strong> best service quality</strong> out there with the <strong>lowest possible cost</strong> that deals with
                the given issue <strong>quickly</strong> and our application offers that and more!  </p>
                <br />
                <p>On one hand, our application offers the possibility to navigate many services providers to enusre that you have 
                the best deal.A full system of rating and review is set to help you choose the best on the field with the possibility 
                to follow the progress of the work.
                </p>
                <br />
                <p>On the other hand, if you are a dedicated worker looking to magnify the range of your activity
                you have the possibility to sign up as a provider and to offer your services to the masses.
                </p>
                <br />
                <h3  style={{fontWeight: 600, color:'burlywood',textAlign:'center'}}>
                -Our Staff-</h3>
                <br/><br/>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                    <div>
                        <img src={window.location.origin + '/img/Man.png'} />
                        <figure>
                            <blockquote >
                                <p style={{paddingRight:'20px',fontSize:'1.2vw'}}>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
                            </blockquote>
                            <figcaption style={{fontSize:'1.2vw'}}>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
                        </figure>
                    </div>
                    <div>
                        <img src={window.location.origin + '/img/Man.png'} />
                         <figure>
                            <blockquote >
                                <p style={{paddingRight:'20px',fontSize:'1.2vw'}}>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
                            </blockquote>
                            <figcaption style={{fontSize:'1.2vw'}}>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
                      </figure>
                    </div>
                    <div>
                    <img src={window.location.origin + '/img/Man.png'} />
                    <figure>
                    <blockquote>
                        <p style={{fontSize:'1.2vw'}}>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
                    </blockquote>
                    <figcaption style={{fontSize:'1.2vw'}}>—Aldous Huxley, <cite>Brave New World</cite></figcaption>
              </figure>
                    </div>
                </div>


                </div>
            </div>
        )
    }
}
