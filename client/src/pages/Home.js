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
            <div className="about text-center">
                <h2>Sunrise Hotel</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius morbi enim nunc faucibus a pellentesque. Sed augue lacus viverra vitae. Eget sit amet tellus cras adipiscing enim. Leo integer malesuada nunc vel risus commodo viverra maecenas. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi</p>
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