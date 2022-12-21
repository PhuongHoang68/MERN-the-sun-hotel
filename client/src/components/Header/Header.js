import { React, useRef } from "react";
import Auth from "../../utils/auth"
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const Header = () =>{
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="login">
            <Link to="/myprofile">
              My Profile
            </Link>
            <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
      </div>
      );
    } else {
      return(
        <div className="login">
            <Link to="/login">Login</Link>
        </div>
      );
    }
  }

	return (
		<header ref={navRef}>
			
			<img src={logo} alt="Sun Hotel Logo" height={200}></img>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/dining">Wine & Dine</Link>
				<Link to="/rooms">Rooms & Suites</Link>
				<Link to="/reservations">Reservation</Link>
				<Link to="/review">Hotel Reviews</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					{/* <FaTimes /> */}
				</button>
        {showNavigation()}
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
		</header>
	);
}

export default Header;
