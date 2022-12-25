import React, {useState} from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

import 'react-calendar/dist/Calendar.css';

const bookNowBar = () => {


return (

    <div className="bnbCont">
        <div className="bnBar">
            <div className="bnArrival"></div>
            <div className="bnDeparture"></div>
            <div className="bnBtn"></div>
        </div>
    </div>

    )

}

export default bookNowBar;