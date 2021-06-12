import React, { Component } from 'react'
import  Banner from '../Banner';
import  Productlist from '../Productlist';
import  Clientreview from '../Clientreview';
import  Featurepart from '../Featurepart';
import  Subscribe from '../Subscribe';
import  Trendingitem from '../Trendingitem';
import Category from '../category/Category';

const Main = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
    return (
        <div>

                {/* <Banner/> */}
                {user? (
                    <Category/>
                ) : (
                    <div className="container card border-0 shadow my-5 card-body p-5" > 
                        <div class="alert alert-info" role="alert">
                            <h4 class="alert-heading">Welcome To our app!</h4>
                            <p>First of all you have to login to start using it. This is a demo for the authentification system.</p>
                            <hr/>
                            <p class="mb-0">Please login now , use google authentification or create a new account ( button top right corner)</p>
                        </div>
                    </div>
                )}
                {/*<Productlist/>*/}
                {/*<Trendingitem/>**/}
                {/*<Clientreview/>*/}
                {/*<Featurepart/>*/}
                {/* <Subscribe/> */}
        </div>
 )}

 export default Main;