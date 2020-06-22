const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/airbnb');

mongoose.connection.on("error", err => {
  console.log("err", err)
});
mongoose.connection.on("connected", (err, res) => {
  console.log("mongoose is connected")
});

let reviewSchema = mongoose.Schema({
  listingId: {type:Number, unique:true},
  firstName:String,
  lastName:String,
  avatarURL:String,
  comments:String,
  createdAt:Date,
  cleanliness:Number,
  accuracy:Number,
  communcation:Number,
  location:Number,
  checkIn:Number,
  value:Number
});

let Reviews = mongoose.model('Reviews',reviewSchema);

module.exports.Reviews = Reviews;

