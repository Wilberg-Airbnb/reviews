const express = require('express');
const PORT = 3000;


// var {seed,seed2}=require('./seed.js');

// console.log(seed);


const app = express();
app.use(express.static('public/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/reviews/:listingId',(req,res) =>{
  const listingId= req.param.listingId;
  Reviews.find(listingId, (err,reviews) =>{
    if(err) {
      console.log(err);
    }else{
      res.send(reviews)
    }
  })
})

app.listen(PORT, () => {
  console.log(`App is now listening on port ${PORT}`);
});