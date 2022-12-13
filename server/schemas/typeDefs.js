// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    reviews: [Review]
    reservations: [Reservation]
  }

  type Review {
    _id: ID
    reviewText: String
    reviewStars: Int
    createdAt: String
    username: String
  }

  type Reservation {
    _id: ID
    username: [User]
    arrivalDate: String
    departureDate: String
    roomType: [Room]
  }

  type Room {
    _id: ID
    roomType: String
  }
`;

// export the typeDefs
module.exports = typeDefs;