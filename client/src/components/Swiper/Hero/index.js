import React, { Component } from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const heroGallery = [
    {
        id: 1,
        headline: '',
        image:"../../../assets/images/hero0.jpg",
    },
    {
        id: 2,
        headline: '',
        image:"../../../assets/images/hero1.jpg",

    },
    {
        id: 3,
        headline: '',
        image:"../../../assets/images/hero2.jpg",
    },
    {
        id: 4,
        headline: '',
        image:"../../../assets/images/hero3.jpg",
    },
    {
        id: 5,
        headline: '',
        image:"../../../assets/images/hero4.jpg",
    },
    {
        id: 6,
        headline: '',
        image:"../../../assets/images/hero5.jpg",
    }
];


class Hero extends Component{
    render() {
          const settings = {
              dots: true,
              fade: true,
              infinite: true,
              speed: 500,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 4000,
              cssEase:"linear"
            };
            return (
                <Slider {...settings}>
                    {heroGallery.map((slide, i) => (
              <div key={slide.id} className="hero">
                <img 
                  src={require(`../../../assets/images/hero${i}.jpg`)} 
                  alt={slide.headline}
                   />
              </div>
                    )
                )
            }
                </Slider>
            )
        }
    };

export default Hero; 