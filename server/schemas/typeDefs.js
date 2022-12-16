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
    bedType: String
    image: String
    inventory: Int
    price: Int
    roomNumbers: [{roomNumber, unavailableDates}]
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
    addRoom(roomType: String!, bedType: String!, roomView: String!, price: String!): Room
    addReservation(arrivalDate: String!, departureDate: String!, user: [ID], room: [ID] ): Reservation
    updateReservation(): Reservation
    addReview(reviewText: String!, reviewStars: Int, username: String): Review
  }
  
`;

// export the typeDefs
module.exports = typeDefs;