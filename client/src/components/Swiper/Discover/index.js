import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const discoverCard = [
    {
        id: 1,
        name: 'Cuisine',
        description: 'Our Dining offers top of the line ingredients. Prepared but Seasoned Chefs to your liking.',
        image:"../../../assets/images/0.jpg",
        link:"/dining",
    },
    {
        id: 2,
        name: 'Room Offers',
        description: 'Enjoy a relaxing time at Sunrise, in the most elegant and luxurious atmosphere…',
        image:"../../../assets/images/1.jpg",
        link:"/rooms",
    },
    {
        id: 3,
        name: 'Reviews',
        description: 'The Sunrise will be delighted to introduce more attractive offers this Season!',
        image:"../../../assets/images/2.jpg",
        link:"/review",
    },
    {
        id: 4,
        name: 'Events',
        description: 'The most joyous experience can be had here at Sunrise. Event Hosting.',
        image:"../../../assets/images/3.jpg",
        link:"/dining",
    },
    {
        id: 5,
        name: 'Accomadations',
        description: 'Sunrise Offers many ways to relax and enjoy.',
        image:"../../../assets/images/4.jpg",
        link:"/rooms",
    },
    {
        id: 6,
        name: 'Gallery',
        description: 'Immerse yourself in the Sunrise ambiance by viewing our virtual gallery',
        image:"../../../assets/images/5.jpg",
        link:"/comingsoon",
    }
];



const DiscoverCards = () =>{
  const [activeCard, setActiveCard] = useState()


  const handleClick = (card) => {
    setActiveCard(card)
    console.log(activeCard)
  }
        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 8000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10,
            cssEase:"linear",
            mobileFirst: true,
            responsive: [
              {breakpoint: 500,
                settings: {
                dots: false,
                speed: 100,
                draggable: true,
                slidesToShow: 1,
                infinite: true,
                autoplay: false,
                }
              },
              {breakpoint: 500,
                settings: {
                dots: false,
                speed: 100,
                draggable: true,
                slidesToShow: 2,
                infinite: true,
                autoplay: false,
                }
              },
              {breakpoint: 950,
                settings: {
                dots: false,
                speed: 100,
                draggable: true,
                slidesToShow: 2,
                infinite: true,
                autoplay: false,
                }
              }
            ]
          };
          return (
          <div>
            <Slider {...settings}>
             {discoverCard.map((card, i) => (
              <div key={card.id} className=" discoverCard light">
                <div className="text-center discoverDiv">
                  <h4>
                    {card.name}
                  </h4>
                  
                </div>
                <img 
                  className="border"
                  src={require(`../../../assets/images/${i}.jpg`)} 
                  alt={card.name}
                   />
                <div className="text-center cardTextcnt">
                  <p>
                    {card.description}
                  </p>
                </div>
                <div id = "arrows">
                </div>
                <div className="center cardBtn">
                  <Link to={activeCard}>
                <button name ={card.name} className="" onPointerEnter={()=>handleClick(card.link)}>Learn more!</button>
                </Link>
                </div>
              </div>
             ))}
            </Slider>
          </div>
          );
        }
      
  export default DiscoverCards;