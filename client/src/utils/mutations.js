import {gql} from '@apollo/client';


export const ADD_RESERVATION = gql`
    mutation addReservation($arrivalDate: String!, $departureDate: String!) {
        addReservation (
            arrivalDate: $arrivalDate, 
            departureDate: $departureDate,

            ){
            arrivalDate
            departureDate

        }
    }
`;
