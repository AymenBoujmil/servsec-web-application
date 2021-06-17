import  React, { Component,useState } from 'react'
import  Banner from './Banner';
import  Funclist from './FuncList';
import  Clientreview from '../Comments/Clientreview';
import  Featurepart from '../Featurepart';
import  Subscribe from '../Subscribe';
import  Trendingitem from '../Trendingitem';
import  Category from '../category/Category';
import  FileUpload from '../Profile/Forms/FileUpload';
import ControlledCarousel from '../../_utils/Carousel';
import SiteReview from '../Comments/SiteReview';

const Main = () => {
    const user = JSON.parse(localStorage.getItem('profile'));
   
    return (
        <div>
                <Banner/> 
                <Funclist/>
                <Clientreview/>
                {user? (
                    <div className="container" style={{paddingTop:"50px"}}>                                      
                        <Category/>
                    </div>
                ) : (
                  null
                )}
                <SiteReview/>
                <br/>
                {/*<Productlist/>*/}
                {/*<Trendingitem/> */}
                {/*<Clientreview/>*/}
                {/*<Featurepart/>*/}
                {/* <Subscribe/> */}
        </div>
    )}

 export default Main;