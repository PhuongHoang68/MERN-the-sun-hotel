import {gql} from '@apollo/client';

//Queries all reviews by username
// export const QUERY_REVIEWS = gql`
//     query reviews($username: String){
//         reviews(username: $username) {
//             _id
//             reviewText
//             reviewStars
//             createdAt
//             username
//         }
//     }
// `;

//Queries single review by ID
// export const QUERY_REVIEW = gql`
//     query review($id: ID!) {
//         review(_id: $id) {
//             _id
//             reviewText
//             reviewStars
//             createdAt
//             username
//         }
//     }
// `;


// query allUsers
export const QUERY_USERS = gql`
  query allUsers {
    allUsers{
      _id
    }
  }
`;

//Query all Reservations

export const QUERY_RESERVATIONS = gql`
    query allReservations {
      allReservations{
            _id
            arrivalDate
            departureDate
            username
            roomType
        }
    }
`;

export const QUERY_RESDATES = gql`
    query allReservations {
      allReservations{
            arrivalDate
            departureDate
            roomType
        }
    }
`;


//Query all Rooms
export const QUERY_ROOMS= gql`
    query allRooms {
      allRooms{
        _id
        roomType
        inventory
        price
      }
    }
`

