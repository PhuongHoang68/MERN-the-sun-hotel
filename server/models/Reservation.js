//import mongoose functions
const { Schema, model } = require('mongoose');

//reservation model as joined table between room & user
//create reservation schema
const reservationSchema = new Schema(
  {
    arrivalDate: {
      type: Date,
      required: true
    },
    departureDate: {
      type: Date,
      required: true
    },
    daysBooked: {
      type: String
    },
    username: {
      type: String,
      // required: true
    },
    roomType: {
      type: String,
      // required: true
    },
    discount: {
      type: String
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Reservation = model('Reservation', reservationSchema);

module.exports = Reservation;