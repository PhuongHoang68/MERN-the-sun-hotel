//import dependencies
const { Schema, model } = require('mongoose');


//create room schema 
const roomSchema = new Schema(
  {
    roomType: {
      type: String
    },
    price: {
      type: Number
    },
    roomCount:
      {
      type: Number, 
      }
      
  }
);

//create room model
const Room = model('Room', roomSchema);

//export room model
module.exports = Room;