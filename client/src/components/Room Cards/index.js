import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_RESDATES, QUERY_ROOMS } from "../../utils/queries";


const RoomPage = () => {

     //Query all rooms
    const { loading, data } = useQuery(QUERY_ROOMS);
    const rooms = data?.allRooms || [];
    console.log(rooms);

return (

    <section>

    </section>
)

}

export default RoomPage;