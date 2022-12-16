import {gql} from '@apollo/client';

//Queries all reviews by username
export const QUERY_REVIEWS = gql`
    query reviews($username: String){
        reviews(username: $username) {
            _id
            reviewText
            reviewStars
            createdAt
            username
        }
    }
`;

//Queries single review by ID
export const QUERY_REVIEW = gql`
    query review($id: ID!) {
        review(_id: $id) {
            _id
            reviewText
            reviewStars
            createdAt
            username
        }
    }
`;


//query Room
//Will each room have its own unqiue id? How are we tracking this
export const QUERY_ROOM = gql`
    query room()
`

//query Rooms


//query Reservation
export const QUERY_RESERVATION = gql`
    query revervation($id: ID!) {
        review(_id: $id) {
            _id
            arrivalDate
            departureDate
            totalStay
            username
            roomType
            discount
            totalCost
        }
    }
`;

//query All reservations (This will be needed to ensure things do not get double booked) I think...

//query User
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      reviews {
        _id
        reviewText
        reviewStars
        createdAt
      }
      reservations {
        _id
        arrivalDate
        departureDate
        roomType
      }
    }
  }
`;