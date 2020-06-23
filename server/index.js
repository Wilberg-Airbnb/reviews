const express = require('express');
const PORT = 3000;
const {dbConnection} = require('../MYSQL/index.js');
const faker = require('faker');
const morgan = require('morgan');


const app = express();
app.use(express.static('public/dist'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'))


app.get('/api/reviews/:listingId',(req,res) =>{
  const listingId= req.params.listingId;

  if(req.query.type=== 'review'){
      dbConnection.query(`SELECT * FROM reviews WHERE listingId = ${listingId}`, (err,data)=>{
        let length = data.length;
        let score=0;

        console.log('ahhhh')
        data.forEach(review =>{
          score+=review.average;
        })

        let averageReview = parseFloat((score/length).toFixed(2));
        console.log(averageReview)

        res.json(averageReview)
      })
  }else{
    dbConnection.query(`SELECT * FROM reviews WHERE listingId = ${listingId}`, (err,data)=>{
      console.log(data);
      res.json(data);
    })
  }
})




app.get('/api/suggestions/:listingId',(req,res) =>{
  const listingId = req.params.listingId;
  let listArr=[Number(listingId)];

  // let lists = [];
  // for(let i = 0 ; i<100;i++){
  //   lists.push(i)
  // };

  let lists = new Array(100).fill(null).map((ele,idx) =>{return idx})

  lists.splice(listingId,1);

  for(var j =0; j<12;j++){
    var random = lists[Math.floor(Math.random() * lists.length)];
    listArr.push(random);
    var index = lists.indexOf(random)
    lists.splice(index,1);
  }

  var result = []
  listArr.forEach(listId =>{
    result.push(new Promise((resolve,reject)=>{
      dbConnection.query(`SELECT * FROM suggestions WHERE listingId=${listId}`,(err,listObj)=>{
        console.log(listObj)
        resolve(listObj[0])
      })
    }))
  })

  return Promise.all(result).then(suggestList =>{
    res.json(suggestList)
  }).catch(err =>{
    console.log(err);
  })



})


app.listen(PORT, () => {
  console.log(`App is now listening on port ${PORT}`);
});