import React, {useState} from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import "./bnb.css"

import 'react-calendar/dist/Calendar.css';

const BookNowBar = () => {


return (

    <div className="bnbCont">
        <div className="bnBar">
            <div className="bnArrival">
                <div>
                <FaCalendar/>
                <input  type="text"></input>
                </div>
                <div>
                <FaCalendar/>
                <input  type="text"></input>
                </div>
            </div>
            <div className="bnRooms">
            <select name="rooms" id="rooms">
                <option value="undefined">Choose Room Type</option>
                <option value="Deluxe Double">Deluxe Double Room</option>
                <option value="Superior Double">Superior Double Room</option>
                <option value="Superior Suite">Superior Suite Room</option>
              </select>
            </div>
            <button> Check available</button>
        </div>
    </div>

    )

}

export default BookNowBar;