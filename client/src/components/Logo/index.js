import React from "react";
import "./Logo.css";
import logo from "../../assets/images/logo.png"

const Logo = () => {

    return (
        <div className="logoCont">
			<div className="logo">
			<div className="logoImg">
			<img src={logo} alt="Sun Hotel Logo"></img>
			</div>
			</div>
			</div>
    )
}

export default Logo;