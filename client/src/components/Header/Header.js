import { React, useRef } from "react";
import Auth from "../../utils/auth"
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Header = () =>{
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Link to="/myProfile"

      )
    } else {
      return()
    }



	return (
		<header>
			<h3>LOGO</h3>
			<nav ref={navRef}>
				<Link to="/dining">Wining& Dining</Link>
				<Link to="/rooms">Rooms&Suites</Link>
				<Link to="/reservations">Reservation</Link>
				<Link to="/review">Hotel Reviews</Link>
        <Link to="/login">Login</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					{/* <FaTimes /> */}
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
		</header>
	);
}

export default Header;
