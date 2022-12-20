// import all models
const User = require('./User');
const Review = require('./Review');
const Reservation = require('./Reservation');
const Room = require('./Room');
// const Bed = require('./Bed'); Currently not using the Bed model

// export models
module.exports = { User, Review, Reservation, Room };
