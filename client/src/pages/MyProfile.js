//Import dependencies
import React from 'react';
import UserUpdate from '../components/UserUpdate';
import Review from '../components/Reviews';

import Auth from '../utils/auth';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';


function MyProfile () {
  const { data } = useQuery(QUERY_ME);
  let me;
  console.log(data);

  if (data) {
    me = data.me;
  }

  console.log(me);

  return (
    <main>
      <div>
        {me ? (
          <h2>Welcome back {me.username} </h2>) : null} 
      </div>
      <UserUpdate/> 
    </main>
  )
}

export default MyProfile;