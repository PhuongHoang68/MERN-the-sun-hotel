import React from "react";
import ReactCalendar from "../Calendar";
import { useQuery } from '@apollo/client';
import { QUERY_USERS, QUERY_RESERVATIONS, QUERY_RESDATES } from "../../utils/queries";

const Bookings = () => {
    // use useQuery hook to make query request
    //Query all users -- working
    //  const { loading, data } = useQuery(QUERY_USERS);
    //  const users = data?.allUsers || [];
    //  console.log(data);
    //  console.log(users);

    //Query all reservations
    // const { loading, data } = useQuery(QUERY_RESERVATIONS);
    // const reservations = data?.allReservations || [];
    // console.log(reservations);
  

    //Query Res dates and room types only
    const { loading, data } = useQuery(QUERY_RESDATES);
    const bookedDates = data?.allReservations || [];

    
    console.log(bookedDates);
    return (
      <main>
        <div>
          <ReactCalendar/>
        </div>
        <div className="bookingBox">
            {/* Select Room type drop down*/}
            <div className="bookingDropdown">
              <label htmlFor="rooms">What type of room would you like?</label>
              <br/>
              <select name="rooms" id="rooms">
                <option value="standard">Standard</option>
                <option value="twin">Twin</option>
                <option value="master">Master</option>
                <option value="deluxe">Deluxe</option>
                <option value="suite">Suite</option>
                <option value="nopref">No Preference</option>
              </select>
              <br/>
              <label htmlFor="beds">How many beds will you need?</label>
              <br/>
              <select name="beds" id="beds">
                  <option value="nopref"> No Preference</option>
                  <option value="one">One</option>
                  <option value="two">Two</option>
              </select>
            </div>
            <button type="submit">Confirm your Booking!</button>
        </div>
      </main>
    );
  };

  export default Bookings;