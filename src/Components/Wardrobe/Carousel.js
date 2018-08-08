import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import WardrobePage from "./WardrobePage";
import Slider from "react-slick";
import Slide from "./Slide"

import outfit from '../../assets/check.jpg';


class Carousel extends Component {
    render(){
        var settings = {
            dots: true,
            lazyLoad: 'ondemand',
            // infinite: true,
            speed: 500,
            // slidesToShow: 1,
            // slidesToScroll: 1
         };

         return(
            <div className="slider">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="outfit-wrapper">
                            <Slide />
                        </div>
                    </div>

                    <div><img src={outfit} alt="Mountain View" /></div>

                    <div><img src="http://engineeronline.ws/images/NewZealand/NZ%20SI%20MitrePeak.jpg" alt="Mountain View" /></div>
                </Slider>
            </div>
        );
    }
}

export default Carousel;
