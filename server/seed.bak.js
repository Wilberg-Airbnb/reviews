function generateListingIdSeed(hostArr){
  //array of hostArr will be array of 100 listingIds where ListingIDs and hostID has one to many relatinship
  var hostSeed = {};

  for(var i =0 ; i<hostArr.length; i++){
    var host = hostArr[i];

    if(hostSeed[host.hostId] !== undefined){
      hostSeed[host.hostId] = [host.listingId]
    }else{
      hostSeed[host.hostId].push(host.listingId)
    }
  }

  var keys = Object.keys(hostSeed) // keys will be array of hostIds

  var seed = [];

  for(var j = 0 ; j<keys.length; j++){ // loop through the hostId keys
    if(hostSeed[keys[j]].length > 1){ // if hostSeed at hostId key has length > 1 loop through the array of hostId key
      for(var k =0; k<hostSeed[keys[j]].length;k++){
        seed.push({hostingId:hostSeed[keys[j]],listingId:hostSeed[keys[j]][k]})
      }
    }else{
      seed.push({hostId:keys[k],listingId:hostSeed[keys[j]]})
    }
  }

  var reviewSeed= [];


  //Now generate random number of reviews per listingId
  for (var l = 0 ;l <seed.length;l++){
    var reviewArr=[];
    var numReviews = weightedRandomDistrib(1,100,40,3); // generate weighted random number

    for(var m = 0; m<numReviews; m++){
      var obj = {
        listingId:seed.listingId,
        hostingId:seed.hostingId,
        firstName: faker.name.firstName(),
        lastName:faker.name.lastName(),
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
      reviewArr.push(obj);
    }
    reviewSeed.push(reviewArr);
  }
  return reviewSeed

}


function generatePlaceSuggestionSeed(){
  var numArr=[];
  for(var i = 0; i<100;i++){
    numArr.push(i)
  }

  // get 12 random suggestion out of 100 listingIds
  var randomArr=[];
  for (var j = 0; j<12;j++){
    var randomNum = numArr[Math.floor(Math.random() * numArr.length)];
    randomArr.push(randomNum)
  }

  for(var k = 0; k<randomArr.length; k++){
    listId = randomArr[k];
    var ericObj = axios.get(`/api/descriptions/${listingId}`);
    var samObj = axios.get(`/api/explore/${listingId}`);
    var {price} = samObj
    var {roomType,numberOfBeds,placeName,pictureUrl} = ericObj;
  }
}