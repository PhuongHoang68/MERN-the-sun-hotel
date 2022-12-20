import React, { useState } from "react";

import ReactCalendar from "../components/Calendar";


// import { useMutation } from '@apollo/client';
// import { ADD_RESERVATION } from "../utils/mutations";
// import { QUERY_RESERVATION } from "../utils/queries";


//  const [addArrivalDate, { error}] = useMutation(ADD_RESERVATION, {
//     update(cache, { data: { addArrivalDate } }) {
//         try{
//         const { reservation } = cache.readQuery({ query: QUERY_RESERVATION});

//         cache.writeQuery({
//             query: QUERY_RESERVATION,
//             data: { reservation: [addArrivalDate, ...reservation] }
//         });
//     } catch (e) {
//         console.warn("First reservation insertion by user")
//     }

// }
// });


  
const Reservation = () => {

    return (
      <div>
        <div className="resHead">
        <h1 className="text-center">Book your Reservation Today!</h1>
        </div>
        <div className="calendar">
        <div>
          <ReactCalendar />
        </div>
        </div>
        </div>
        

    );
};

export default Reservation;