import {gql} from '@apollo/client';


export const ADD_RESERVATION = gql`
    mutation addArrivalDate($arrivalDate: String!) {
        addArrivalDate(arrivalDate: $arrivalDate) {
            _id
            arrivalDate
        }
    }
    mutation addDepartureDate($departureDate: String!) {
        addDepartureDate(departureDate: $departureDate) {
            _id
            departureDate
        }
    }
`;
