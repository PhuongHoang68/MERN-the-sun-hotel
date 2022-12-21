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
    mutation addArrivalDate($arrivalDate: String!) {
        addArrivalDate(arrivalDate: $arrivalDate) {
            _id
            arrivalDate
            departureDate
        }
    }
    mutation addDepartureDate($departureDate: String!) {
        addDepartureDate(departureDate: $departureDate) {
            _id
            departureDate
        }
    }
`;

export const DELETE_RESERVATION = gql`
  mutation Mutation($id: ID!) {
    deleteReservation(_id: $id) {
      _id
    }
  }
`;

export const UPDATE_EMAIL = gql`
  mutation Mutation($email: String) {
    updateUser(email: $email) {
      email
    }
  } 
`;