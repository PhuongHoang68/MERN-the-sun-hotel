
import React, {useRef, useState} from "react";
import { Link } from "react-router-dom";
import { FaBars} from "react-icons/fa";
import logo from "../../assets/images/logo.png"
import "./mainHead.module.css"

const MainHead = () => {
    
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
	const toggleNavBar = () => {

		setIsOpen(!isOpen);
	  }


    return (
        <div>
    <div className="mobileNav">
    <header ref={navRef}/>
        <nav>
        <Link to="/">Home</Link>
        <Link to="/dining">Cuisine</Link>
        <Link to="/rooms">Rooms</Link>
        <img src={logo} alt="Sun Hotel Logo"></img>
        <Link to="/reservations">Reservation</Link>
        <Link to="/review">Reviews</Link>
        <Link to="/myprofile">Profile</Link>
        </nav>
        </div>
        </div>
    );
       
}

export default MainHead;