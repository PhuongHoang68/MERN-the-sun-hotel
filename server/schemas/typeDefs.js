// import the gql tagged template function
const { gql } = require('apollo-server-express');

//TODO: Add roomNumbers: [{roomNumber, unavailableDates}] with right syntax
// Add room to reservation mutation

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
    user: String
  }

  type Reservation {
    _id: ID
    user: String
    arrivalDate: String!
    departureDate: String!
    daysBooked: [String]
    room: String
    discount: Int
  }

  type Room {
    id: ID
    roomType: String!
    price: Int
    roomCount: Int
  }

  input RoomInput {
    id: ID
    roomType: String!
    price: Int
    roomCount: Int
  }
 
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
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

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewText: String!, reviewStars: Int): Review
    addReservation(arrivalDate: String!, departureDate: String!, daysBooked: [String], user: String, room: String ): Reservation
    addRoom(roomType: String, price: String, roomCount: Int): Room
    updateReservation: Reservation
  }
  
`;
// login(email: String!, password: String!): Auth
// export the typeDefs
module.exports = typeDefs;