import React, {useState} from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import moment from "moment";
import "./bnb.css"

import 'react-calendar/dist/Calendar.css';

const BookNowBar = () => {

const [calendarActive, setCalendarActive] = useState(false);

//tracks Calander date input
const [date, setDate] = useState((new Date()));
const [arriveDate, setArriveDate] = useState("");
const [departDate, setDepartDate] = useState("");

const toggleCalendar = () =>{
    if (!calendarActive){
        setCalendarActive(true)
    } else {
    setCalendarActive(false)
}}

//Get requested dates from calendar by state change
const getDate = (date) => {
     setDate(date);
     let Arrive = (moment(date[0]).format("MM/DD/YYYY"));
     let Depart = (moment(date[1]).format("MM/DD/YYYY"));
     setArriveDate(Arrive)
     setDepartDate(Depart)
     setCalendarActive(false)
     ;
};



return (

    <div className="bnbCont">
        <div className="bnBar">
            <div className="bnArrival">
                <div>
                <FaCalendar/>
                <input  type="text" placeholder="Arrive" defaultValue={arriveDate} onFocus={toggleCalendar}></input>
                </div>
                <div>
                <FaCalendar/>
                <input  type="text" placeholder="Depart" defaultValue={departDate} onFocus={toggleCalendar}></input>
                </div>
            </div>
            {calendarActive === true ? (<div>
                <Calendar
                    id = "Calendar"
                    onChange={getDate}
                    onBlur={toggleCalendar}
                    selectRange={true}
                    returnValue="range"/>
                    </div>) : ( <div>
            <div className="bnRooms">
            <select name="rooms" id="rooms">
                <option value="undefined">Select Room Type</option>
                <option value="Deluxe Double">Deluxe Double Room</option>
                <option value="Superior Double">Superior Double Room</option>
                <option value="Superior Suite">Superior Suite Room</option>
              </select>
            </div>
            <button> Book Now</button>
           </div> ) }
        </div>
    </div>

    )

}

export default BookNowBar;