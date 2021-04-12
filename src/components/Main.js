import React, { Component } from 'react'
import  Banner from './Banner';
import  Productlist from './Productlist';
import  Clientreview from './Clientreview';
import  Featurepart from './Featurepart';
import  Subscribe from './Subscribe';
import  Trendingitem from './Trendingitem';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Banner/>
                <Productlist/>
                <Trendingitem/>
                <Clientreview/>
                <Featurepart/>
                <Subscribe/>
            </div>
        )
    }
}
