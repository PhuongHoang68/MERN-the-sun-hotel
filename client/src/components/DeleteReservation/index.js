import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_RESERVATION } from '../../utils/mutations';
 
function DeleteReservation(props) {
  const [formState, setFormState] = useState();
  const [delReservation, { error }] = useMutation(DELETE_RESERVATION);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await delReservation({
      variables: { 
        id: formState._id 
      } 
    });
    window.location.reload();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(value)
  };

  return (
  <div>
    <h3>Delete a Reservation</h3>
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='reservation'>Enter booking ID</label>
        <input 
          name='_id'
          type='text'
          id='_id'
          onChange={handleChange}
        />
      </div>
      {error ? (
          <div>
            <p>Something went wrong</p>
          </div>
        ) : null}
      <div>
        <button type="submit">Delete</button>
      </div>
    </form>
  </div>
  )
}

export default DeleteReservation;