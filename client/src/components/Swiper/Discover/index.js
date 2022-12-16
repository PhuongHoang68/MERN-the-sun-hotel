import React, { Component } from "react";
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
        link:"",
    },
    {
        id: 2,
        name: 'Room Offers',
        description: 'Enjoy a relaxing time at Sunrise, in the most elegant and luxurious atmosphere…',
        image:"../../../assets/images/1.jpg",
        link:"",
    },
    {
        id: 3,
        name: 'Promotions',
        description: 'The Sunrise will be delighted to introduce more attractive offers this Season!',
        image:"../../../assets/images/2.jpg",
        link:"",
    },
    {
        id: 4,
        name: 'Events',
        description: 'The most joyous experience can be had here at Sunrise. Event Hosting.',
        image:"../../../assets/images/3.jpg",
        link:"",
    },
    {
        id: 5,
        name: 'Accomadations',
        description: 'Sunrise Offers many ways to relax and enjoy.',
        image:"../../../assets/images/4.jpg",
        link:"",
    },
    {
        id: 6,
        name: 'Gallery',
        description: 'Immerse yourself in the Sunrise ambiance by viewing our virtual gallery',
        image:"../../../assets/images/5.jpg",
        link:"",
    }
];

class DiscoverCards extends Component{
  render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 8000,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10,
            cssEase:"linear"
          };
          return (
          <main>
            <Slider {...settings}>
             {discoverCard.map((card, i) => (
              <div key={card.id} className=" discoverCard">
                <div className="text-center">
                  <h4>
                    {card.name}
                  </h4>
                  
                </div>
                <img 
                  src={require(`../../../assets/images/${i}.jpg`)} 
                  alt={card.name}
                   />
                <div className="text-center cardTextcnt">
                  <p>
                    {card.description}
                  </p>
                </div>
                <div className="center cardBtn">
                <button className="cardBtn">Learn more!</button>
                </div>
              </div>
             ))}
            </Slider>
          </main>
          );
        }
      }
  export default DiscoverCards;