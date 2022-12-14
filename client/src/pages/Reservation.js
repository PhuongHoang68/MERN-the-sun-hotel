import React, { useState } from "react";
import ReactCalendar from "../components/Calendar";
import Auth from "../utils/auth"
import { Link } from "react-router-dom";

  
const Reservation = () => {
  const loggedIn = Auth.loggedIn();

    return (
      <div className="resPage">
        <div className="resHead">
        <h1 className="text-center">Book your Reservation Today!</h1>
        </div>
            {loggedIn ? (
              <div className="calendar">
              <div>
                <ReactCalendar />
              </div>
              </div>
            ) : 
              <div className ="text-center loginPlsBtn">
                <Link to="/login">You need to log in first</Link>
              </div> }
        </div>
    );
};

export default Reservation;