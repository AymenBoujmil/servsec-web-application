import React from 'react'
import {Link} from "react-router-dom";

function Banner (){
    const user=JSON.parse(localStorage.getItem('profile'));
    var val = user ? "/ServiceList" : "/login";
        return (
          <div className="container" style={{paddingTop:"100px"}}>
            {/*<div style={{width:'100%'}} >
              <img  style={{width:'100%',height:"220px"}} src="img/welcome.jpg"/>
        </div>*/}
            <br></br>
            <div class='section-header'>
              
              <h1 style={{fontWeight:"800"}}>ServSec</h1>
              <p>
                An easy solution for an easy life, 
                learn everything <Link to="/Aboutus">about us</Link>
              </p>
          </div>
          </div>
        )
    }
export default Banner;
