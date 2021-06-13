import React from 'react'

function OurAdvices() {
    return (
            <div className="container" id="heart">
              <div className="card border-0 shadow my-5">
                <div className="card-body p-5"> {/* this is were we write the body */}
                  <div className="center btmspace-80">
                    <h4 className="heading underline font-x2" style={{fontWeight: 800, color: '#0062cc',textAlign:'center'}}>Our Tips:</h4>
                  </div>
                  <br></br>
                  <p style={{fontSize: 'large'}}> To maintain a favorable experience for all, we present to you
                  a few tips: </p> <br />
                  <p style={{fontSize: 'large'}}>
                  </p>
                  <ul>
                    <li>Do not give your account information (email and password) to anyone.</li>
                    <li>Give your opinion (through rating and comments) to the site after a completed service so that you can help other clients and the provider to improve its services.</li>
                    <li>Respect all the providers and the terms of the contract.</li>
                    <li>Give reasonable prices depending on the quality of your service to attract more clients.
                    </li>
                    <li>Check the condition of your tools and workers before starting a request.</li>
                    <li>Do not engage with different providers at the same time.</li>
                  </ul>
                  <p /><br />
                  <p> All of these rules may seem obvious, but it is always good to remember them.</p><br />
                </div>
              </div>
            </div>
          );
}

export default OurAdvices
