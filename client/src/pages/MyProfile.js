//Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import UserUpdate from '../components/UserUpdate';
import MyReservations from '../components/MyReservations';
import CreateReview from '../components/CreateReview';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


function MyProfile () {
  const { data } = useQuery(QUERY_ME);
  let me;

  if (data) {
    me = data.me;
  }

  return (
    <main className='my-profile'>
        {me ? (
          <div>
            <h1>Welcome back {me.username} </h1>
            <Link to='/reservations'>Make a new reservation</Link>
              <div className='components'>
                <MyReservations/>
                <UserUpdate/>
                <CreateReview/>
              </div>
          </div>
          ) : (
            <div>
              <h1>Oh no!</h1>
              <p>It looks like you are not logged in.</p>
              <Link to='/login' >Log in here</Link>
            </div>
          )} 
      
    </main>
  )
}

export default MyProfile;