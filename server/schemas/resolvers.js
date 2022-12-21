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

    // information for current logged in user
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('reviews')
          .populate('reservations');
    
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
    },

    // get rooms by ID
    room: async (parent, { _id }) => {
      return Room.findOne({ _id })
    },
  },
//END OF READ OPERATIONS

// START OF MUTATIONS (Add, update, delete)
  Mutation: {
    //add user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
    
      return { token, user };
    },

    //user login
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
    },
    
    //add hotel review (for Users)
    addReview: async (parent, args, context) => {
      if (context.user) {
        const review = await Review.create({ ...args, user: context.user._id });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { reviews: review._id } },
          { new: true }
        );
    
        return review;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

    // Create reservation
    addReservation: async (parent, args, context) => {
      // if 
      //(context.user) 
      {
        const reservation = await Reservation.create({ ...args, 
          //user: context.user._id 
        });
    
        // await User.findByIdAndUpdate(
        //   { _id: context.user._id },
        //   { $push: { reservations: reservation._id } },
        //   { new: true }
        // );
    
        return reservation;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },

    // Create a new room (database only)
    addRoom: async(parent, args, context) => {
      if (context.user){
        const room = await Room.create(args);
        return room;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    
    // Update user information
    updateUser: async(parent, args, context) => {
      if (context.user){
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('You need to be logged in!');
    },

    // delete reservation 
    deleteReservation: async(parent, { _id }, context) => {
      if (context.user) {
        const reservation = await Reservation.findByIdAndDelete({ _id });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $pull: { reservations: reservation._id } },
        );
    
        return reservation;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    } 
  }
  //END OF MUTATIONS
};

module.exports = resolvers;