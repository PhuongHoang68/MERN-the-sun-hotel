import React, {useState} from "react";
import Calendar from 'react-calendar';
import Bookings from "../BookedDates";
import 'react-calendar/dist/Calendar.css';
import { eachDayOfInterval} from 'date-fns'
import moment from 'moment';

const calendar = document.querySelector('#calendar')

const ReactCalendar = () => {
    const reservationArr = [];

    const [date, setDate] = useState((new Date()));

    const handleSubmit = () => {
      getDates(date)
      console.log(reservationArr);
      let arrivalDate = reservationArr[0];
      let departureDate = reservationArr[reservationArr.length-1];
      //Send add reservation here
    }

    const getDates = (date) => {
        setDate(date);
        let arrivalDate = (moment(date[0]).format("MM/DD/YYYY"));
        let departureDate = (moment(date[1]).format("MM/DD/YYYY"));
        let bookedDates = eachDayOfInterval({
          start: new Date(arrivalDate),
          end: new Date(departureDate)
        })
        for (let i = 0; i < bookedDates.length; i++) {
          const booked = (moment(bookedDates[i]).format("MM/DD/YYYY"));
          reservationArr.push(booked);
        }      
    };
  

  
    return (
      <div>
        <main>
        <div>
          <h1 className='text-center'>React Calendar with Range</h1>
          <div>
            <Calendar
              id = "Calendar"
              onChange={getDates}
              selectRange={true}
              returnValue="range"
            />
          </div>
          {date.length > 0 ? (
            <p className='text-center'>
              <span>Start:</span>{' '}
              {date[0].toDateString()}
              &nbsp;|&nbsp;
              <span>End:</span> {date[1].toDateString()}
            </p>
          ) : (
            <p className='text-center'>
              <span>Default selected date:</span>{' '}
              {date.toDateString()}
            </p>
          )}
        </div>
        <Bookings/>
        </main>
        <section>
        <button type="submit" onClick={handleSubmit}>
            Confirm your Booking!
        </button>
        </section>
      </div>
      );
    }

  export default ReactCalendar; 