import React from "react";
import { useQuery } from '@apollo/client';
// import { QUERY_RESERVATIONS } from "../../utils/queries";

const Bookings = () => {
    // use useQuery hook to make query request
    // const { loading, data } = useQuery(QUERY_RESERVATIONS);
    // const reservations = data?.reservations || [];
    // console.log(reservations);
  
    return (
      <main>
        <div>
          <h1>Render Check</h1>
        </div>
      </main>
    );
  };

  export default Bookings;