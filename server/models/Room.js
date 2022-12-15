//import dependencies
const { Schema, model } = require('mongoose');
const BedSchema = require("./Bed");

//create room schema
const roomSchema = new Schema(
  {
    roomType: {
      type: String
    },
    bedType: [BedSchema],
    roomView: {
      type: String
    },
    inventory: {
      type: Number
    },
    price: {
      type: Number
    }
  }
);

//create room model
const Room = model('Room', roomSchema);

//export room model
module.exports = Room;