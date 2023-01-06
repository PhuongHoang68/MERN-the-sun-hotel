import React from "react";
import DropDown from "../components/DropDown";
import DiscoverCards from "../components/Swiper/Discover";
import HeroAlt from "../components/Hero/Video/index";
import BookNowBox from "../components/BookNowBox";
import Logo from "../components/Logo";
import roomPhoto from "../assets/images/hero1.jpg"
import roomPhoto2 from "../assets/images/hero4.jpg"


const Home = () => {
    return (
    <div>
        <DropDown/>
        <div>
        {/* Hero Section */}
            <HeroAlt/>
                <div className="heroBook">
                    <BookNowBox/>
                </div>
                <span>
                    <Logo/>
                </span>
        </div>
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
                    <BookNowBox/>
                </div>
                <div className=" resBox1 classyBorder">
                    <img src={roomPhoto} alt="Deluxe Room"></img>
                </div>
                <div className=" resBox3"></div>
                <div className=" resBox2 classyBorder">
                    <img src={roomPhoto2} alt="Standard Room"></img>
                </div>
                
            </div>
        </section>
        {/* Short About / Lead in section */}
        {/* <section className="aboutCont">
            <div className="aboutleft text-center light text-stretch">
                <h2>The Sun Hotel</h2>
                <p>The Sun Hotel is the perfect spot to explore Ho Chi Minh City's fascinating cultural sights and attractions. Central Post Office is located 1.3 km away, and is one of the most famous tourist spots to visit and photograph. Never forget your time in Ho Chi Minh City with a special gift or trinket from Ben Thanh Market just 2.1 km away.</p>
            </div>
            <div className="aboutright">
                <h1>This is the Right</h1>
            </div>

        </section> */}
        {/* Start Discover Section */}
        <div className="discover light">
            <div className="discoverWrap">
                <DiscoverCards/>
            </div>
        </div>
    </div>
    );
};

export default Home;