import React from "react";

import { useQuery } from "@apollo/client";
import { QUERY_ALL_REVIEWS } from "../utils/queries";

const Review = () => {
  const { data } = useQuery(QUERY_ALL_REVIEWS);
  let reviews;

  if (data) {
    reviews = data.allReviews;
  }

  console.log(reviews);

  return (
      <main className="review-page">
        <div className="review-head">
        <h1>Your reviews:  </h1>
        </div>
        <div>
          { reviews ? (
             <div>
              {reviews
              .map((review) => (
                <div className="review-container"key={review._id}>
                  <p className="review-date">{review.createdAt}</p>
                  <p className="review-body">"{review.reviewText}"</p>
                </div>
              ))}
            </div>

           ) : null}
           </div>

             
      </main>
  );
};

export default Review;