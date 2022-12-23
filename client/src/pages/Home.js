import React from "react";
import DiscoverCards from "../components/Swiper/Discover";
import Hero from "../components/Swiper/Hero/"

const Home = () => {
    return (
    <div>
        {/* Hero Section */}
        <Hero>
            <div>
                <button className="hero-btn"> Book Your Room Today!</button>
            </div>
        </Hero>
        {/* Short About / Lead in section */}

        <section className="light">
            <div className="about text-center light text-stretch">
                <h2>The Sun Hotel</h2>
                <p>The Sun Hotel is the perfect spot to explore Ho Chi Minh City's fascinating cultural sights and attractions. Central Post Office is located 1.3 km away, and is one of the most famous tourist spots to visit and photograph. Never forget your time in Ho Chi Minh City with a special gift or trinket from Ben Thanh Market just 2.1 km away.</p>
            </div>

        </section>
        {/* Start Discover Section */}
        <div className="discover light">
            <h2>Discover Sunrise</h2>
            <div className="discoverWrap secondary">
                <DiscoverCards/>
            </div>
        </div>
    </div>
    );
};

export default Home;