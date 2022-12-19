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
    user: String
  }

  type Reservation {
    _id: ID
    user: String
    arrivalDate: String!
    departureDate: String!
    daysBooked: Int
    room: String
    discount: Int
  }

  type Room {
    _id: ID
    roomType: String
    bedType: String
    roomView: String
    price: Int
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
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(reviewText: String!, reviewStars: Int): Review
    addReservation(arrivalDate: String!, departureDate: String!, room: String!, ): Reservation
    addRoom(roomType: String!, bedType: String!, roomView: String, price: String!): Room
    updateUser(username: String, email: String, password: String): User
    deleteReservation(_id: ID!): Reservation
  }
  
`;

// export the typeDefs
module.exports = typeDefs;