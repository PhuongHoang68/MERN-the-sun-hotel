import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ReactCalendar = () => {
    const [date, setDate] = useState(new Date());

    // const onChange = date => {
    //     setDate(date);
    // };
  
    return (
        <section>
        <div>
          <h1 className='text-center'>React Calendar with Range</h1>
          <div>
            <Calendar
              onChange={setDate}
              selectRange={true}
            />
          </div>
          {date.length > 0 ? (
            <p className='text-center'>
              <span>Start:</span>{' '}
              {date[0].toDateString()}
              &nbsp;|&nbsp;
              <span>End:</span> {date[1].toDateString()}
            </p>
          ) : (
            <p className='text-center'>
              <span>Default selected date:</span>{' '}
              {date.toDateString()}
            </p>
          )}
          {console.log(date)}
        </div>
        </section>
      );
    }

  export default ReactCalendar; 