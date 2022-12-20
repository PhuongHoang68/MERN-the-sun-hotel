import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png"

const Header = ()=>{
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

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
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				{/* <FaBars /> */}
			</button>
		</header>
	);
}

export default Header;
