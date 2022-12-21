import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { DELETE_RESERVATION } from '../../utils/mutations';
import { Link } from 'react-router-dom';
import DeleteReservation from '../DeleteReservation';

function MyReservations () {
  const { data } = useQuery(QUERY_ME);
  let me;
  console.log(data);

  if (data) {
    me = data.me;
  }

  console.log(me)

  return(
    <>
      <div>
        <Link to='/reservations'>Make a new reservation</Link>

      {me ? (
        <>
          <h2>
            Here are your reservations
          </h2>
        {me.reservations.map((reservation) => (
          <div key={reservation._id}>
            <h3>
              From: {new Date(parseInt(reservation.arrivalDate)).toLocaleDateString()}<br></br>
              To: {new Date(parseInt(reservation.departureDate)).toLocaleDateString()}<br></br>
              Reference: {reservation._id}
            </h3>
          </div>
            ))}
            <DeleteReservation/>
           </> 
        ) : null }
      </div>
    </>
  )
}

export default MyReservations;