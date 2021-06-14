import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function FrequentlyAskedQuestion() {
  useEffect(() => {
    AOS.init()
})
    return (
        <div className="container" data-aos="fade-up">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-5"> {/* this is were we write the body */}
              <div className="center btmspace-80">
                <h4 className="heading underline font-x2" style={{fontWeight:800, color: '#0062cc',textAlign:'center'}}>Frequently Asked Questions</h4>
              </div>
              <br/>
              <h3>"What is the purpose of ServSec ?"</h3><br />
              <p style={{fontSize: 'large'}}> ServSec is a web application that let you choose between of variety of
                services to choose the best that suits your time limits and budget, it makes the process of fulfilling 
                daily tasks as easy as a clicking a button.
                It provides several individual advantages for the client (saving time and expenses) and for the provider
                (improve reputation, increase demands).</p>
                <br />
              <h3>"Why i can't add my own service ?"</h3><br />
              <p style={{fontSize: 'large'}}> You must first create an account to be able to add your service. If you
              already have an account, log in <a href="/login"> ici </a> or create one under the "Enterpriser" role.
              Then navigate to your services tab to start adding.
              </p><br />
              <h3>"I forgot my password, What should i do ? "</h3><br />
              <p style={{fontSize: 'large'}}> In the login page, click on "forgot password"
              and follow the instructions.</p><br />
              <h3>"Should i pay for the service expenses within the app ?"</h3><br />
              <p style={{fontSize: 'large'}}> ServSec is an information intermediary platform between
              Clients and Providers , any form of payment must be discussed between them without our
              intervention.ServSec will monitor the status of your requested services</p><br />
              <h3>"How can i demand a certain information from the clients ?"</h3><br />
              <p style={{fontSize: 'large'}}> You can edit your own request form to demand any type of information
              in your services tab. </p><br />
              <h3>"I noticed a bug on the site ?"</h3><br />
              <p style={{fontSize: 'large'}}> Nothing is perfect and the sites are always able to be improved.
              Contact us by email on ServSec80@gmail.com </p><br />
            </div>
          </div>
        </div>
      );
}
