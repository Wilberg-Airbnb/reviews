
const request = require('supertest')
const {app} = require('../server/index.js');
// const {generateSeed,generateSeed2} = require('../server/seed.js')




xdescribe('dummy data generation seed Test',() =>{

  test('generate reviews information for 100 listingId',async() =>{
    const reviewSeed = await generateSeed();
    expect(reviewSeed.length).toEqual(100);
    expect(reviewSeed[0][0].listingId).toEqual(0);
  });



});

describe('server endpoints Test',()=>{

  test("it should get an array of reviews for endpoint '/api/reviews/:listingId'", async()=>{
    const response = await request(app).get("/api/reviews/13");
    expect(JSON.parse(response.text)).toEqual(expect.any(Array))
    expect(JSON.parse(response.text)[0].listingId).toEqual(13)
  })

  test("it should get an average score of review for the listingId when endpoint query contains type=review", async()=>{

    const response = await request(app).get("/api/reviews/2?type=review");

    expect(JSON.parse(response.text)).toEqual(expect.any(Number))
  })



  test("it should get average review score for array of listIds requested as req.query.array", async() =>{
    const response = await request(app).get("/api/reviews/?array=[1,2]");
    expect(JSON.parse(response.text)).toEqual(expect.any(Number))
  })
})

