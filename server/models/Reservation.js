//import mongoose functions
const { Schema, model } = require('mongoose');

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
      type: Number
    },
    user: {
      type: String,
      required: true
    },
    room: {
      type: String,
      required: true
    },
    discount: {
      type: Number
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