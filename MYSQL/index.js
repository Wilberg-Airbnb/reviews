var mysql = require('mysql');
const {password} = require('./config.js')

var dbConnection = mysql.createConnection({
  host: 'db',
  user:'root',
  password:password,
  database:'airbnb',
  port: '3306'
});

dbConnection.connect(err =>{
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('mysql database connected');
  }
})
// var dbConnection
// const makeConnection = async ()=>{
//   let retries =5;

//   while(retries){
//     try{
//       var dbConnection = mysql.createConnection({
//         host: '127.0.0.1',
//         user:'root',
//         password:process.env.MYSQL_PASSWORD,
//         database:'airbnb',
//         port: '3307'
//       });

//       dbConnection.connect(err =>{
//         if (err) {
//           console.log(err);
//           return;
//         } else {
//           console.log('mysql database connected');
//         }
//       })

//     }catch(err){
//       console.log(err);
//       retries -=1;
//       console.log(`retries left: ${retries}`)

//       await new Promise(res =>setTimeout(res,5000));
//     }
//   }
// }

// makeConnection();

module.exports.dbConnection= dbConnection



