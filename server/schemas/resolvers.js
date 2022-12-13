//import schemas
const { User, Review, Reservation, Room } = require('../models');

const resolvers = {
//ALL READ OPERATIONS
  Query: {
    // get all users
    users: async () => {
      return User.find()
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select('-__v -password')
        .populate('reviews')
        .populate('reservations');
    },
    // get all reviews
    allReviews: async () => {
      return Review.find()
        .populate('username');
    },
    // get reviews by username
    reviews: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Review.find(params).sort({ createdAt: -1 });
    },
    // get reviews by ID
    review: async (parent, { _id }) => {
      return Review.findOne({ _id });
    },
    // get all reservations
    allReservations: async () => {
      return Reservation.find()
        .populate('username');
    },
    // get reservations by username
    reservations: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Reservation.find(params).sort({ createdAt: -1 });
    },
    // get reservations by ID
    reservation: async (parent, { _id }) => {
      return Review.findOne({ _id });
    },
    // get all rooms
    rooms: async () => {
      return Room.find()
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