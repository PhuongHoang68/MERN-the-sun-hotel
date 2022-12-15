//import schemas
const { AuthenticationError } = require('apollo-server-express');
const { User, Review, Reservation, Room } = require('../models');
const { signToken } = require("../utils/auth");

const resolvers = {
//ALL READ OPERATIONS
  Query: {
    // get all users
    allUsers: async () => {
      return User.find()
      .populate('reviews')
      .select('-__v -password')
      .populate('reservations');
    },
    //get user by ID
    user: async (parent, { _id }) => {
      return User.findOne({ _id })
        .select('-__v -password')
        .populate('reviews')
        .populate('reservations');
    },
    // get a user by username 
    userByName: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('reviews')
        .populate('reservations');
    },
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('reviews')
          .populate('reservation');
    
        return userData;
      }
    
      throw new AuthenticationError('Not logged in');
    },
    
    // get all reviews
    allReviews: async () => {
      return Review.find()
    },
    // get reviews by ID
    review: async (parent, { _id }) => {
      return Review.findOne({ _id });
    },
    // get all reservations
    allReservations: async () => {
      return Reservation.find()
    },
    // get reservations by ID
    reservation: async (parent, { _id }) => {
      return Reservation.findOne({ _id });
    },
    // get all rooms
    allRooms: async () => {
      return Room.find()
      .populate('username')
    },
    // get rooms by ID
    room: async (parent, { _id }) => {
      return Room.findOne({ _id })
    }
  },
//END OF READ OPERATIONS
//TODO: Add Mutations
Mutation: {
  addUser: async (parent, args) => {
    const user = await User.create(args);
    const token = signToken(user);
  
    return { token, user };
  },
  login: async (parent, { email, password }) => {
    const user = await User.findOne({ email });
  
    if (!user) {
      throw new AuthenticationError('Incorrect credentials');
    }
  
    const correctPw = await user.isCorrectPassword(password);
  
    if (!correctPw) {
      throw new AuthenticationError('Incorrect credentials');
    }
  
    const token = signToken(user);
    return { token, user };
  }
  
  
}
//TODO: Add Auth
};

module.exports = resolvers;