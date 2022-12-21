import React, {useState} from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { eachDayOfInterval} from 'date-fns'
import moment from 'moment';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_RESERVATIONS, QUERY_ROOMS, QUERY_ME_RES } from "../../utils/queries";
import { ADD_RESERVATION } from "../../utils/mutations";
import Auth from "../../utils/auth"

const ReactCalendar = () => {
    //Holds all know reservations
    const reservationArr = [];
    //The dates requesting to be reserved
    const daysReq = [];
    //The amount of rooms the hotel has for specific roomType
    const roomCount = [];
    

        //Query all reservations
        const {data: resData } = useQuery(QUERY_RESERVATIONS);
        //Query all Rooms
        const {data: roomData} = useQuery(QUERY_ROOMS);
        //Query for current user
        const {data: userData} = useQuery(QUERY_ME_RES);
        //Return
        const reservations = resData?.allReservations || [];
        const rooms = roomData?.allRooms || [];
        const currentUser = userData?.me || [];
        
        
         //Push fetched reservations in Array for reference
        reservationArr.push(reservations);

    //States
    //tracks Calander date input
    const [date, setDate] = useState((new Date()));
    //Tracks input for requested reservation
    const [reqReservation, setReqReservation] = useState([]);
    //Tracks which room is being chose
    const [roomType, setRoomType] = useState();
    //Tracks if the Requested Reservation can be booked
    const [isValid, setIsValid] = useState(false);

    //sets state from string from drop down selection
    const roomChange = () => 
    {let roomInput = document.querySelector('#rooms').value
      setRoomType(roomInput)
    }
    
    //Checks to see if room is open
    const checkAvailable = () => {
      //Array of all reservations that have selected roomType
      let matchingRes = [];
      //Array of all dates that a roomType is reserved for
      let blockedDates = [];
      console.log(currentUser._id)
      //Finds out the Room Count of chosen room type and pushes to array
        for (let r = 0; r < rooms.length; r++) {
        const roomMatched = (rooms[r].roomType);
        if(roomMatched === roomType){
          let roomNum = rooms[r].roomCount
          roomCount.length = 0;
          roomCount.push(roomNum)
        }}
  
      console.log(reservationArr[0].length)
      //Find all reservations that contain the resquested room type and put the matches in new array
      for (let i = 0; i < reservationArr[0].length; i++) {
        if(roomType === reservationArr[0][i].room){
          matchingRes.push(reservationArr[0][i])
        }}

        //if No matches are found then the room is available.
        console.log(matchingRes)
       if (matchingRes.length < roomCount[0] || matchingRes.length === 0){
        console.log("Your room is available")
        setIsValid(!isValid)
         console.log(isValid)
      } 


      //Loops through all matching reservations to find matching dates. Push dates to array
      for (let i = 0; i < matchingRes.length; i++) {
        const daysBooked = matchingRes[i].daysBooked;
          for (let j = 0; j < daysBooked.length; j++) {
            const date = daysBooked[j];
            console.log(date)
            if(reqReservation.includes(date)){
              blockedDates.push(date)}
              console.log(blockedDates)
            }}
            const count = blockedDates.reduce((accumulator, value) => {
              return {...accumulator, [value]: (accumulator[value] || 0) + 1};
            }, {});
          console.log(Object.entries(count));
        
          //If there are more reservations for that day than there are rooms. The reservation cannot be made
          for (const [key, value] of Object.entries(count)) {
          if(`${value}` >= roomCount[0]){
            console.log("No rooms")
            setIsValid(isValid)
            console.log(isValid)
              } if (`${value}` < roomCount[0]) {
                setIsValid(!isValid)
                console.log(isValid)
              }
            }
          
        };

         //Trigger to Check if Room is open
    const handleCheckAvailable = async (event) => {
      event.preventDefault();
      checkAvailable()
      {console.log(isValid)}
    }
    //add Reservation
    
    const [addReservation, {err} ] = useMutation(ADD_RESERVATION, {
      update(cache, { data: { addReservation } }) {

      
      // update  Reservation array's cache
      // const { reservations } = cache.readQuery({ query: QUERY_RESERVATIONS});
      // cache.writeQuery({
      //   query: QUERY_RESERVATIONS,
      //   data: { reservations: [addReservation, reservations]},
      // })
      }
    });

    const handleSubmit = async (e) => {
      e.preventDefault();
      getDates(date)
       let arrivalDate = reqReservation[0];
       let departureDate = reqReservation[reqReservation.length-1];
       let daysBooked = reqReservation;
       let room = roomType;
       let userID = currentUser._id;

      try {
        await addReservation({
          variables: { arrivalDate, departureDate, daysBooked, userID, room }
        })
      } catch (err) {
        console.error(err)
      } if (!err){
        //Redirect to Profile Page
      }
  
    };

    //Get requested dates from calendar by state change
    const getDates = (date) => {
        setDate(date);
        let arrivalDate = (moment(date[0]).format("MM/DD/YYYY"));
        let departureDate = (moment(date[1]).format("MM/DD/YYYY"));
        let bookedDates = eachDayOfInterval({
          start: new Date(arrivalDate),
          end: new Date(departureDate)
        })
        for (let i = 0; i < bookedDates.length; i++) {
          const booked = (moment(bookedDates[i]).format("MM/DD/YYYY"));
          daysReq.push(booked);
        }      
        setReqReservation(daysReq);
    };
  

    return (
      <div>
        <main className="light">
        <div>
          <h1 className='text-center'>Calendar</h1>
          <div>
            <Calendar
              id = "Calendar"
              onChange={getDates}
              selectRange={true}
              returnValue="range"
            />
          </div>
          <br/>
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
        </div>
      <div className="bookingMain">
      <div className="bookingCont">
        <div className="bookingBox">
            {/* Select Room type drop down*/}
            <div className="bookingDropdown">
              <label htmlFor="rooms">What type of room would you like?</label>
              <br/><br/>
              <select name="rooms" id="rooms" onChange={roomChange}>
                <option value="null">Choose Room Type</option>
                <option value="Deluxe Double">Deluxe Double Room</option>
                <option value="Superior Double">Superior Double Room</option>
                <option value="Superior Suite">Superior Suite Room</option>
              </select>
            </div>
            <br/>{ isValid === false ? (<div>
            <div>Check if your Room is available.</div>
            <br/><br/>
            <button type="click" onClick={handleCheckAvailable}>
            Check Available
        </button></div>) : (
          <div className="bookingBox">
            <span>Your Room is Available!</span>
            <br/>
        <button type="submit" onClick={handleSubmit}>
            Confirm your Booking!
        </button></div>)}
        </div>
      </div>
      </div>
        </main>
        <button id = "hiddenBtn" type="submit" onClick={ () =>console.log(isValid)}>Check State</button>
      </div>
      );
    }
  
  export default ReactCalendar;