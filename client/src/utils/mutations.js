import {gql} from '@apollo/client';


export const ADD_RESERVATION = gql`
    mutation addReservation($arrivalDate: String!, $departureDate: String!, $daysBooked: [String]) {
        addReservation (
            arrivalDate: $arrivalDate, 
            departureDate: $departureDate,
            daysBooked: $daysBooked
            ){
            arrivalDate
            departureDate
            daysBooked
        }
    }
`;
