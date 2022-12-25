import React from "react";
import "./HeroAlt.css";
import Video from "../../../assets/video/hotel-hero.mp4";
import Logo from "../../Logo";


const HeroAlt = () => {


return(
  <div className= "heroWrap">
<div className="background-video-wrapper">
  <video className="background-video" autoPlay loop muted playsInline>
    <source src={Video} type='video/mp4' />
  </video>
</div>
<Logo/>
</div>

)
}

export default HeroAlt;
