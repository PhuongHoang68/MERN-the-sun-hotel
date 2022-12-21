import {gql} from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_RESERVATION = gql`
    mutation addReservation($arrivalDate: String!, $departureDate: String!, $daysBooked: [String], $userID: String!, $room:String! ) {
        addReservation (
            arrivalDate: $arrivalDate, 
            departureDate: $departureDate,
            daysBooked: $daysBooked
            userID: $userID
            room: $room
            ){
            arrivalDate
            departureDate
            daysBooked
            userID
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
