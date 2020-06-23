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

const find = (listingId) =>{
  return Reviews.find({listingId:listingId}).sort({createdAt: -1}).exec();
}

const save = (reviews) =>{
  for(var i =0; i<reviews.length;i++){
    listingIdReviews = reviews[i];
    for(var j=0; j<listingIdReviews.length;j++){
      var reviewObj = listingIdReviews[j];

      return Reviews.create(reviewObj);
    }
  }
}

module.exports.Reviews = Reviews;
module.exports.save = save;
module.exports.find = find;
