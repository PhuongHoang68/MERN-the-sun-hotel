import React, {useRef, useState} from "react";
import "./DropDown.css"
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaHome} from "react-icons/fa";
import { BiDrink, } from "react-icons/bi";
import { MdOutlineBedroomParent, MdOutlineRateReview } from "react-icons/md";
import { BsCalendar2Date } from "react-icons/bs";


const DropDown = () => {
    const navRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
	const toggleNavBar = () => {

		setIsOpen(!isOpen);
	  }


    return (
        <div>
        { isOpen === true ? (
        <div>
            <div>
    <div className="mobileNav">
    <header ref={navRef}>
        <div>
    </div>
            </header>
    <main className="mobileLinks">
        <nav>
        <button type= "submit" className="navbtnMobile" onClick={() => toggleNavBar()}>
			<FaBars/>
		</button>
        <Link to="/">Home</Link>
        <Link to="/dining">Wine & Dine</Link>
        <Link to="/rooms">Rooms & Suites</Link>
        <Link to="/reservations">Reservation</Link>
        <Link to="/review">Hotel Reviews</Link>
        <Link to="/myprofile">Profile</Link>
        </nav>
        </main>
        </div>
        </div>
        </div>) : (
			<div className="navDiv">
			<nav>
            <button type= "submit" className="navbtn" onClick={() => toggleNavBar()}>
				<FaBars/>
			</button>
				<Link to="/"><FaHome/></Link>
				<Link to="/dining"><BiDrink/></Link>
				<Link to="/rooms"><MdOutlineBedroomParent/></Link>
				<Link to="/reservations"><BsCalendar2Date/></Link>
				<Link to="/review"><MdOutlineRateReview/></Link>
			</nav>
			</div>
			// {showNavigation()}
			)}
        </div>
    );
       
}

export default DropDown;