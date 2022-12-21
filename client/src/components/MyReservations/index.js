import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
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
      <div className='reservation-component'>
        {me ? (
          <>
            <h2>
              Check your Reservations:
            </h2>
          {me.reservations.map((reservation) => (
            <div className='user-reservations'key={reservation._id}>
              <h3> From: {new Date(parseInt(reservation.arrivalDate)).toLocaleDateString()} </h3>
              <h3> To: {new Date(parseInt(reservation.departureDate)).toLocaleDateString()} </h3>
              <h4>Room: {reservation.room}</h4>
              <h5>Booking ID: {reservation._id}</h5>
            </div>
              ))}
              <DeleteReservation/>
            </> 
          ) : null }
      </div>
  )
}

export default MyReservations;