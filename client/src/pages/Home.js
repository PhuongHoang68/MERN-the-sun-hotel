import React from "react";
import DiscoverCards from "../components/Swiper/Discover";
import HeroAlt from "../components/Hero/Video/index";
import BookNowBar from "../components/BookNowBar";

const Home = () => {
    return (
    <div>
        {/* Hero Section */}
        <HeroAlt>
            <div>
                <button className="hero-btn"> Book Your Room Today!</button>
            </div>
        </HeroAlt>
        {/* Check rooms call to action section */}
        <section>
            <div  className="resCont">
                <div className=" resBox text-center">
                    <h4>
                        Reserve your room Today!
                    </h4>
                    <p>
                        Sun hotel reserves the right to switch, change, modify, of cancel any reservation at any moment. Thank you for Understanding.
                    </p>
                    <BookNowBar/>
                </div>
                <div className=" resBox1"></div>
                <div className=" resBox3"></div>
                <div className=" resBox2"></div>
                
            </div>
        </section>
        {/* Short About / Lead in section */}

        <section className="aboutCont">
            <div className="aboutleft text-center light text-stretch">
                <h2>The Sun Hotel</h2>
                <p>The Sun Hotel is the perfect spot to explore Ho Chi Minh City's fascinating cultural sights and attractions. Central Post Office is located 1.3 km away, and is one of the most famous tourist spots to visit and photograph. Never forget your time in Ho Chi Minh City with a special gift or trinket from Ben Thanh Market just 2.1 km away.</p>
            </div>
            <div className="aboutright">
                <h1>This is the Right</h1>
            </div>

        </section>
        {/* Start Discover Section */}
        <div className="discover light">
            <h2>Discover Sunrise</h2>
            <div className="discoverWrap">
                <DiscoverCards/>
            </div>
        </div>
    </div>
    );
};

export default Home;