import React from "react";
import DiscoverCards from "../components/Swiper/Discover";
import Hero from "../components/Swiper/Hero";

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
        <section>
            <div className="about">
                <h2>Sunrise Hotel</h2>
            </div>
            <div>
                <h3>Images go here</h3>
            </div>
        </section>
        {/* Start Discover Section */}
        <section>
            <h2>Discover Sunrise</h2>
            <div className="discoverWrap">
                <DiscoverCards/>
            </div>
        </section>
    </div>
    );
};

export default Home;