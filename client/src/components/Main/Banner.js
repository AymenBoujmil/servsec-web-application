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
              <div style={{paddingLeft:"20px",alignItems:"center"}}>
               <h1 style={{fontWeight:"800"}}>ServSec</h1> 
                <p>
                  An easy solution for an easy life.
                </p>
              </div>
           </div>
          </div>
        )
    }
export default Banner;
