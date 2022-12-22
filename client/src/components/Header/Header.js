import { React, useRef, useState, useEffect } from "react";
import Auth from "../../utils/auth"
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom";



const Header = () =>{
	const navRef = useRef();
	const [width, setWidth] = useState(window.innerWidth)
	const breakpoint = 800;
	const [isNavOpen, setIsNavOpen] = useState(false);

	useEffect(() => {
		setIsNavOpen(false)
		const handleResizeWindow = () => setWidth(window.innerWidth);
		 window.addEventListener("resize", handleResizeWindow);
		 return () => {
		   window.removeEventListener("resize", handleResizeWindow);
		 };
	   }, []);
	   console.log(isNavOpen)

	const toggleNavBar = () => {

		setIsNavOpen(!isNavOpen);
	  }

	// const showNavbar = () => {
	// 	navRef.current.classList.toggle("responsive_nav");
	// };


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

  if (width > breakpoint) {
	return (
		<header ref={navRef}>
		<div>
			<img src={logo} alt="Sun Hotel Logo"></img>
			</div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/dining">Wine & Dine</Link>
				<Link to="/rooms">Rooms & Suites</Link>
				<Link to="/reservations">Reservation</Link>
				<Link to="/review">Hotel Reviews</Link>
				<button
					className="nav-btn nav-close-btn"
					type="submit"
					onClick={() => toggleNavBar()}>
					<FaTimes />
				</button>
        {showNavigation()}
			</nav>
			</header>
	);
}
{
	return (<div>
		{isNavOpen === !true ? (
		<header>
		<div>
			<img src={logo} alt="Sun Hotel Logo"></img>
			</div>
			<button type= "submit" className="nav-btn" onClick={() => toggleNavBar()}>
				<FaBars/>
			</button>
			</header>) : (
				<div>
					(
    <div className="mobileNav">
    <header ref={navRef}>
        <div>
    <img src={logo} alt="Sun Hotel Logo"></img>
    </div>
    <button type= "submit" className="nav-btn" onClick={() => toggleNavBar()}>
				<FaBars/>
			</button>
            </header>
    <main className="mobileLinks">
    <nav>
        <Link to="/">Home</Link>
        <Link to="/dining">Wine & Dine</Link>
        <Link to="/rooms">Rooms & Suites</Link>
        <Link to="/reservations">Reservation</Link>
        <Link to="/review">Hotel Reviews</Link>
        </nav>
        </main>
        </div>
        )
				</div>)}
			</div>
	)
}
}
export default Header;
