// const { Pool } = require('pg');
// const dbParams = require('./lib/db.js');
// const db = new Pool(dbParams);
// db.connect();

$(document).ready(function() {
  console.log('yooyoyoyoyoyyoyoyoy');
  // db.query(`SELECT * FROM quizzes;`)
  //   .then(data => {
  //     console.log(data.rows);
  // });
});



/*
on click, query the datbase and see if the selected answer is marked as true or false. if true add to a score counter variable ++
once the quiz is finished insert the total score along with the quiz_id into the quizzes_solved table in DB.
*/
