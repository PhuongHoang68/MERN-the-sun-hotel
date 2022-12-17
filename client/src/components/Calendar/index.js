import React, {useState} from "react";
import Calendar from 'react-calendar';
import Bookings from "../BookedDates";
import 'react-calendar/dist/Calendar.css';
import { eachDayOfInterval} from 'date-fns'
import moment from 'moment';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_RESERVATIONS } from "../../utils/queries";
import { ADD_RESERVATION } from "../../utils/mutations";

const ReactCalendar = () => {
    const reservationArr = [];

    const [date, setDate] = useState((new Date()));
    const [reservation, setReservation] = useState([])

    //add Reservation

    const [addReservation, {err} ] = useMutation(ADD_RESERVATION, {
      update(cache, { data: { addReservation } }) {

      
      // update  Reservation array's cache
      // const { reservations } = cache.readQuery({ query: QUERY_RESERVATIONS});
      // cache.writeQuery({
      //   query: QUERY_RESERVATIONS,
      //   data: { reservations: [addReservation, reservations]},
      // })
      }
    });


    const handleSubmit = async (e) => {
      e.preventDefault();
      getDates(date)
       let arrivalDate = reservation[0];
       let departureDate = reservation[reservation.length-1];
       let daysBooked = reservation;
      try {
        await addReservation({
          variables: { arrivalDate, departureDate, daysBooked }
        })
      } catch (err) {
        console.error(err)
      } if (!err){
        (console.log("Your Reservation was Successful"))
      }
  
    };

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
        setReservation(reservationArr);
        console.log(reservation)
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