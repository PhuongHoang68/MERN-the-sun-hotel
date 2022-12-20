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
      type: []
    },
    user: {
      type: String,
      required: true
    },
    //A room ID to reference the room reserved.
    room: {
      type: String,
    },
    //Not needed
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