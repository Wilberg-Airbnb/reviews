const express = require('express');
const PORT = 3000;
const {dbConnection} = require('../MYSQL/index.js');
const faker = require('faker');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');



const app = express();
app.use(cors());
app.use(express.static('public/dist'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'))

app.use((req,res,next) =>{
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Headers','Origin','X-Requested-With','Content-Type','Accept')
  next();
})

app.use('/:listingId/', express.static('public/dist'));

app.get('/api/reviews/:listingId',(req,res) =>{

  console.log('received request')

  if(req.query.type=== 'review'){
    let listingId= req.params.listingId;
      dbConnection.query(`SELECT * FROM reviews WHERE listingId = ${listingId}`, (err,data)=>{
        let length = data.length;
        let score=0;


        data.forEach(review =>{
          score+=review.average;
        })

        let averageReview = parseFloat((score/length).toFixed(2));
        console.log(averageReview)

        res.json(averageReview)
      })
  }else{
    let listingId= req.params.listingId;
    dbConnection.query(`SELECT * FROM reviews WHERE listingId = ${listingId}`, (err,data)=>{
      // console.log(data);
      res.json(data);
    })
  }
})


app.get('/api/reviews',(req,res) =>{
  if(req.query.array){
    var array = JSON.parse(req.query.array);

    var averageReviews = [];

    for(let i =0; i<array.length;i++){
      let listingId = Number(array[i]);
      averageReviews.push(new Promise((resolve,reject) =>{
        dbConnection.query(`SELECT * FROM reviews WHERE listingId = ${listingId}`, (err,listObj)=>{
          if(err){
            console.log(err)
          }

          let listLength = listObj.length;

          console.log(listLength);
          resolve(listLength)
        })
      }))
    }

    return Promise.all(averageReviews).then(avgArr =>{
      let totalNumber = avgArr.reduce((a, b) => a + b);


      res.json(parseFloat((totalNumber).toFixed(2)));
    }).catch(err =>{
      console.log(err);
    })
  }
})

// app.use('/:listingId',(req,res,next) =>{
//   if(req.params.listingId> 99){
//     res.sendStatus(404);
//   }

//   var currentPage = path.join(__dirname, '../public/dist/index.html');

//   // res.sendFile(currentPage)
//   next();
// })

module.exports.app = app;