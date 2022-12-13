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
    username: {
      type: String,
      required: true
      // Unsure of whether it is the above or this one
      // type: Schema.Types.ObjectId,
      // ref: 'User'
    },
    roomType: {
      type: Schema.Types.ObjectId,
      ref: 'Room'
      // Unsure of whether it is the above or 
      // type: String,
      // required: true
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