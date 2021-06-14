import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function TermsofService() {
useEffect(() => {
    AOS.init()
})
    return (
        <div class="container" id="heart" data-aos="fade-up">
            <div class="card border-0 shadow my-5">
                <div class="card-body p-5">
                    <div class="center btmspace-80">
                        <h4 class="heading underline font-x2" style={{fontWeight:"800" , color: "#0062cc",textAlign:'center'}}>Terms of Service</h4>
                    </div>
                    <br></br>
                    <p style={{fontSize:"large"}}> ServSec is a registered trademark at the National Institute for Standardization
                        and Industrial Property. <br/>
                        The site, ServSec and its content are protected by Tunisian laws on
                        copyright protection. The elements contained in the site namely, the images, the text
                        as well as the graphic charter are the property of the site. <br/>
                        Under the rules relating to intellectual property, any reproduction of the elements cited
                        above is prohibited without the prior written consent of and / or the rights holder.
                        Any unauthorized use of this content constitutes an offense of counterfeiting and may give rise to
                        to civil and / or criminal legal proceedings and to the payment of damages.
                        <br/>
                        <br/>
                        On ServSec, Services providers are either enterprises or individuals that respect the law and the
                        integrity for their work.All communication between the client and the provider would be monitored 
                        to ensure the protection of the consumer
                        <br/>
                        <br/>
                        The price of a service is determined by its owner and can be discussed throught negotiations, but 
                        the final decision is held by him/her.Servsec offers the possiblity to check many providers, controlling 
                        the price is not withing its functionalities.
                        <br/>
                        <br/>

                        <strong>Contents:</strong> The ServSec team will always strive to provide real-time,
                        reliable and high-quality information, if any information is incorrect, do not hesitate to
                        contact our webmaster on our contact email.
                        <br/>
                        <br/>

                        <strong>Responsibility:</strong> Visitors to this website declare that they agree to access and
                        to use this website and its contents under their own responsibility. ServSec cannot be held
                        responsible for loss, direct or indirect damage outside the planification and tracking of the 
                        service status.
                        <br/>
                        <br/>

                        <strong>Jurisdiction:</strong> These General Conditions are subject to the Tunisian law.
                        In the event of a dispute, express jurisdiction is assigned to the courts of Tunis.</p>
                        <br/>
                </div>
            </div>
        </div>
    )
}
