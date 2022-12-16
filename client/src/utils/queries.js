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


//query Room
// //Will each room have its own unqiue id? How are we tracking this
// export const QUERY_ROOM = gql`
//     query room()
// `

//query Rooms


//query Reservation
// export const QUERY_RESERVATIONS = gql`
//     query revervations($username: String) {
//         reservations(username: $username) {
//             _id
//             arrivalDate
//             departureDate
//             totalStay
//             username
//             roomType
//             discount
//             totalCost
//         }
//     }
// `;

//query All reservations (This will be needed to ensure things do not get double booked) I think...

// query allUsers
export const QUERY_USERS = gql`
  query allUsers {
    users{
      _id
    }
  }
  
`;