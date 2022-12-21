import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import { DELETE_RESERVATION } from '../../utils/mutations';
import { Link } from 'react-router-dom';

function MyReservations () {
  const { data } = useQuery(QUERY_ME);
  let me;
  console.log(data);

  if (data) {
    me = data.me;
  }

  console.log(me.reservations)

  return(
    <div>
      <Link to='/reservations'>Make a new reservation</Link>
      {me.reservations ? (
        <h2>Here are your reservations</h2>
        
        ) : null}
    </div>
  )

}

export default MyReservations;