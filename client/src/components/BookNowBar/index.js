import React, {useState} from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import "./bnb.css"

import 'react-calendar/dist/Calendar.css';

const BookNowBar = () => {

const [calendarActive, setCalendarActive] = useState(false);

//tracks Calander date input
const [date, setDate] = useState((new Date()));

const toggleCalendar = () =>{
    setCalendarActive(!calendarActive)
    console.log(calendarActive)
}


return (

    <div className="bnbCont">
        <div className="bnBar">
            <div className="bnArrival">
                <div>
                <FaCalendar/>
                <input  type="text" placeholder="Arrive" onFocus={toggleCalendar}></input>
                </div>
                <div>
                <FaCalendar/>
                <input  type="text" placeholder="Depart" onFocus={toggleCalendar}></input>
                </div>
            </div>
            {calendarActive === true ? (<div>
                <Calendar
                    id = "Calendar"/>
                    </div>) : ( <div>
            <div className="bnRooms">
            <select name="rooms" id="rooms">
                <option value="undefined">Choose Room Type</option>
                <option value="Deluxe Double">Deluxe Double Room</option>
                <option value="Superior Double">Superior Double Room</option>
                <option value="Superior Suite">Superior Suite Room</option>
              </select>
            </div>
            <button> Check available</button>
           </div> ) }
        </div>
    </div>

    )

}

export default BookNowBar;