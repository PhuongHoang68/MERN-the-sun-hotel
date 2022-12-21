import React, { useState } from "react";
import CreateReview from "../components/CreateReview"
import Auth from "../utils/auth"
import { Link } from "react-router-dom";

const Review = () => {

  return (
      <div>
        <h1>Leave a review today!</h1>

              <div>
                <CreateReview/>
              </div>
 
              <div>
                <Link to="/login">You need to log in first</Link>
              </div>
      </div>
  );
};

export default Review;