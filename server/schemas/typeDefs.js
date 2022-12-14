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
    username: String
    arrivalDate: String
    departureDate: String
    roomType: String
  }

  type Room {
    _id: ID
    roomType: String
    inventory: Int
    price: Int
  }

  type Query {
    allUsers: [User]
    user(_id: ID!): User
    userByName(username: String!): User
    allReviews: [Review]
    review(_id: ID!): Review
    allReservations: [Reservation]
    reservation(_id: ID!): Reservation
    allRooms: [Room]
    room(_id: ID!): Room
  }
`;

// export the typeDefs
module.exports = typeDefs;