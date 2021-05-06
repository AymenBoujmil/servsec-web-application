import React, { Component } from 'react'
import  Banner from './Banner';
import  Productlist from './Productlist';
import  Clientreview from './Clientreview';
import  Featurepart from './Featurepart';
import  Subscribe from './Subscribe';
import  Trendingitem from './Trendingitem';
import Category from './category/Category';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Category></Category>
                <Productlist/>
                <Trendingitem/>
                <Clientreview/>
                <Featurepart/>
                {/* <Subscribe/> */}
            </div>
        )
    }
}
