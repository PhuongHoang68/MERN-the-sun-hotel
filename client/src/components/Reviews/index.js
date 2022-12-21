import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';

function AddReview() {

  //Form logic
  const [formState, setFormState] = useState({ reviewText: '' });
  const [newReview, { error }] = useMutation(ADD_REVIEW);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await newReview({
      variables: {
        reviewText: formState.reviewText,
      }
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    console.log(value);
  };

  return (
    <section>
      <h2>Your Review</h2>
      <form id="review-form" onSubmit={handleFormSubmit}>
        <div className='reviewText'>
          <label htmlFor="reviewText">Review:</label>
          <textarea 
            type="text" 
            name="reviewText"
            id='reviewText' 
            onChange={handleChange}
          ></textarea>
        </div>

        {error ? (
          <div>
            <p>Something went wrong</p>
          </div>
        ) : null}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default AddReview;