var faker = require('faker');
var chance = require('chance');
var chanced = new chance();
var fs = require('fs');

const {Reviews} = require ('../MongoDB/index.js');
const {dbConnection} = require('../MYSQL/index.js');

// function randomReviews(){
//   return Math.round((Math.random()*5+1))
// }


function weightedRandomDistrib(min,max,mean,varianceFactor) {
  let prob = [], seq = [];
  for(let i=min;i<max;i++) {
    prob.push(Math.pow(max-Math.abs(mean-i),varianceFactor));
    seq.push(i);
  }

  return chanced.weighted(seq, prob);
}


function generateSeed(){
  var seed = [];

  for(var i = 0 ; i<100;i++){
    var seedArr=[];
    var numReviews = weightedRandomDistrib(1,100,40,3);
    for(var j = 0; j<numReviews ; j++){
      var obj = {
        listingId : i,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        avatarURL:faker.internet.avatar(),
        comments: faker.lorem.sentences(),
        createdAt:faker.date.between('2015-01-01','2020-07-10'),
        cleanliness: faker.random.number({min:1,max:5}),
        accuracy:faker.random.number({min:1,max:5}),
        communication:faker.random.number({min:1,max:5}),
        location:faker.random.number({min:1,max:5}),
        checkIn:faker.random.number({min:1,max:5}),
        value:faker.random.number({min:1,max:5})
      }
      seedArr.push(obj);
    }
    seed.push(seedArr)
  }
  return seed;
}


function generateSeed2(){
  var roomtype = ['Entire place', 'private rooms','shared room'];
  var seed2 = [];
  for(var i = 0; i<12;i++){
    var obj ={
      listingId:faker.random.number({min:0,max:99}),
      roomtype: roomtype[Math.floor(Math.random()*3)],
      numberOfBeds : faker.random.number({min:0,max:3}),
      placeName: faker.lorem.words(),
      price: faker.finance.amount(40,250,2),
      pictureURL:'https://source.unsplash.com/320x240/?houses'
    }

    seed2.push(obj)

  }
  return seed2
}
var seed = generateSeed();

fs.writeFile(__dirname+'/dummyData.txt', JSON.stringify(seed), err =>{
  if(err){
    console.log('error writing dummy data',err)
  }else{
    console.log('succesfully wrote dummy data file')
  }
})

seed2= generateSeed2()

fs.writeFile(__dirname+'/dummyData2.txt', JSON.stringify(seed2), err =>{
  if(err){
    console.log('error writing dummy data',err)
  }else{
    console.log('succesfully wrote dummy data file')
  }
})

module.exports.seed = seed;
module.exports.seed2 = seed2;