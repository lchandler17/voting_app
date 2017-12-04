// Include the Mongoose Dependencies
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ElectionSchema = new Schema({
  Title: {
    type: String,
    required: true
  },
  Type: {
    type: String,
   required: true
  },
  Position: {
    type: String,
    required: true
  },
  Candidate: [{
    type: Schema.Types.ObjectId,
    ref: "Candidate_mod"
  }]
});

// Create the Model
var Election = mongoose.model("Election", ElectionSchema);

// Export it for use elsewhere
module.exports = Election;
