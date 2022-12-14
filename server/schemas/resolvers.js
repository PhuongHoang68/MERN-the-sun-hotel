//import schemas
const { User, Review, Reservation, Room } = require('../models');

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
  }
//END OF READ OPERATIONS
//TODO: Add Mutations
//TODO: Add Auth
};

module.exports = resolvers;