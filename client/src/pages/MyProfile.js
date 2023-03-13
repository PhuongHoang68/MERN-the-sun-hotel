//Import dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import UserUpdate from '../components/UserUpdate';
import MyReservations from '../components/MyReservations';
import CreateReview from '../components/CreateReview';
import 'bootstrap/dist/css/bootstrap.min.css';
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
            <div className='welcome text-center'>
              <h1>Welcome back <span>{me.username}</span> !</h1>
              <Link to='/reservations'><h2 className='profile-link'>Make a new reservation</h2></Link>
            </div>
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