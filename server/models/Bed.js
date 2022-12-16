//import dependencies
const { Schema, model } = require('mongoose');

//create room schema
const BedSchema = new Schema(
  {
   bedId: {
    type: Schema.Types.ObjectId
   },
   bedType: [],
   bedAmount: {
    type: Number
   }
  }
);


//export room model
module.exports = BedSchema;