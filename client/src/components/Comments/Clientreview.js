import { Carousel } from 'react-bootstrap';
import './Clientreview.css';
import React , {useState,useEffect} from 'react';
import {fetchReviews } from '../../api';
import { date } from 'yup/lib/locale';


function Clientreview () {
        const [reviews, setReviews] = useState(null)
        const [loading,setLoading] = useState(true)
        useEffect(()=>{
            Promise.all([fetchReviews()])
                .then((res)=>{
                setReviews(res[0].data);
                setLoading(false);
                }
                )
        },[])
        if(loading)  return <div> loading ... </div>
        const getDate=(timestamp)=>
        {
            var date = new Date(timestamp);
            return date.toGMTString();
        }
        return (
            <div id="cr" style={{alignItems:"center"}}>   
                <div className="container section-header" style={{paddingLeft:"20px",alignItems:"center"}}>
                    <h1 style={{fontWeight:"1000",fontSize:'200%'}}>What Clients say about us ! </h1> 
                </div>
                <Carousel fade >
                    {reviews.map((option) =>
                        (
                            <Carousel.Item >
                                <img
                                height="200x"
                                className="d-block w-100"
                                src="img/product_overlay.png"
                                alt={option.name}
                                />
                                <Carousel.Caption>
                                    <div style={{height:"150px",paddingTop:"30px"}}>
                                    <figure>
                                        <blockquote >
                                            <h3>"{option.message}"</h3>
                                        </blockquote>
                                        <figcaption style={{fontSize:'larger'}}>—{option.name}, <cite>{getDate(option.timestamp)}</cite></figcaption>
                                    </figure>
                                    </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    )}
                </Carousel>
            </div>
        )
    }
export default Clientreview;