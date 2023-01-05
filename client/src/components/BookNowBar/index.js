import React, {useState} from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import moment from "moment";
import { eachDayOfInterval} from 'date-fns'
import "./bnbar.css"
import 'react-calendar/dist/Calendar.css';

const BookNowBar = (props) => {


//tracks Calander date input
const [date, setDate] = useState((new Date()));
const [arriveDate, setArriveDate] = useState("");
const [departDate, setDepartDate] = useState("");
// const [calendarActive, setCalendarActive] = useState(false);

const toggleCalendar = () =>{
    if (!props.calendarActive){
        props.setCalendarActive(true)
    } else {
    props.setCalendarActive(false)
}
console.log(props.calendarActive)}

const handleChange = () => {
    let roomType = document.getElementById("rooms").value
    props.roomChange(roomType)
}
const handleSubmit = () => {
    props.handleCheckAvailable();
}

//Get requested dates from calendar by state change
const getDate = (date) => {
     setDate(date);
     props.getDates(date)
     let Arrive = (moment(date[0]).format("MM/DD/YYYY"));
     let Depart = (moment(date[1]).format("MM/DD/YYYY"));
     setArriveDate(Arrive)
     setDepartDate(Depart)
     props.setCalendarActive(false)
};

return (
    <div>
    <div className="bnbarCont">
        <div className="bnbBar">
            <div className="bnbarArrival">
                <div>
                <FaCalendar/>
                <input  type="text" placeholder="Arrive" defaultValue={arriveDate} onFocus={toggleCalendar}></input>
                </div>
                <div>
                <FaCalendar/>
                <input  type="text" placeholder="Depart" defaultValue={departDate} onFocus={toggleCalendar}></input>
                </div>
            </div>
                         <div>
            <div className="bnbarRooms">
            <select name="rooms" id="rooms" onChange={handleChange}>
                <option value="undefined">Select Room Type</option>
                <option value="Deluxe Double">Deluxe Double Room</option>
                <option value="Superior Double">Superior Double Room</option>
                <option value="Superior Suite">Superior Suite Room</option>
              </select>
            </div>
           </div> 
           <button onClick={handleSubmit}> Book Now</button>
        </div>
    </div>
    {props.calendarActive === true ? (<div className="calendarCont">
                <Calendar
                    id = "Calendar"
                    onChange={getDate}
                    onBlur={toggleCalendar}
                    selectRange={true}
                    returnValue="range"/>
                    </div>) : ( null )}
    </div>

    )

}

export default BookNowBar;