import React, { Component } from 'react'
import {Link,Route} from "react-router-dom";

function Banner (){
    const user=JSON.parse(localStorage.getItem('profile'));
    var val = user ? "/ServiceList" : "/login";
        return (
          <div className="container" style={{paddingTop:"100px"}}>
            <div style={{width:'100%'}} >
              <img  style={{width:'100%',height:"220px"}} src="img/welcome.jpg"/>
            </div>
            <br></br>
            <div class='section-header'>
              <h2>ServSec</h2>
              <p>
                An easy solution for an easy life 
                learn everything <Link to="/Aboutus"></Link>about us 
              </p>
          </div>
          </div>
        )
    }
export default Banner;
