import {gql} from '@apollo/client';


export const ADD_RESERVATION = gql`
    mutation addReservation($arrivalDate: String!, $departureDate: String!, $daysBooked: [String], $user: String, $room:String ) {
        addReservation (
            arrivalDate: $arrivalDate, 
            departureDate: $departureDate,
            daysBooked: $daysBooked
            user: $user
            room: $room
            ){
            arrivalDate
            departureDate
            daysBooked
            user
            room
        }
    }
`;

export const ADD_ROOM = gql`
    mutation addRoom($roomType: String!, $price: Int!, $roomCount: Int!) {
        addRoom (
            roomType: $roomType, 
            price: $price,
            roomCount: $roomCount
            ){
            roomType
            price
            roomCount
            }
        } 
`;
