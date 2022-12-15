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
    totalStay: {
      type: String
    },
    username: {
      type: String,
      required: true
    },
    roomType: {
      type: String,
      required: true
    },
    discount: {
      type: String
    },
    totalCost: {
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