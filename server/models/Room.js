//import dependencies
const { Schema, model } = require('mongoose');


//create room schema
const roomSchema = new Schema(
  {
    roomType: {
      type: String
    },
    bedType: String,
    roomView: {
      type: String
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