const express = require('express');
const { query } = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM quizzes;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/new", (req, res) => {
    res.render("../views/quiz");
  });

  // router.post("/", (req, res) => {
  //   const queryQuiz = {
  //     text: `INSERT INTO quizzes (
  //     user_id, title, time_created, subject, public)
  //     VALUES($1, $2, $3, $4, $5) RETURNING *;`,
  //     values: [quiz.user_id, quiz.title, quiz.time_created, quiz.subject, quiz.public]
  //   }
  //   const queryQuestion = {

  //   }
  //   return db.query(query)
  //   .then(res => res.rows);
  // })

//INSERT INTO questions (quiz_id, question_text)VALUES((SELECT quizzes.id FROM quizzes WHERE title = $), $)

  router.post("/", (req, res) => {
    console.log(req.body);
    const queryQuiz = {
      text: `INSERT INTO quizzes (
        user_id, title, time_created, subject, public)
        VALUES($1, $2, $3, $4, $5);
        `,
      values: [1, req.body.title, '2020-06-27 20:37:41.347345', req.body.subject, true]
    };

    const queryQuestion = {text: `INSERT INTO questions (quiz_id, question_text)
        VALUES((SELECT quizzes.id FROM quizzes WHERE title = $1), $2);`,
        values: [req.body.title, req.body.question_text]};

    const AnswerQuery1 = {text: `INSERT INTO answers (question_id, answer_text, true_false)
    VALUES((SELECT questions.id FROM questions WHERE question_text = $1), $2, $3);`,
    values: [req.body.question_text, req.body.answer_text1, false]}

    const AnswerQuery2 = {text: `INSERT INTO answers (question_id, answer_text, true_false)
    VALUES((SELECT questions.id FROM questions WHERE question_text = $1), $2, $3);`,
    values: [req.body.question_text, req.body.answer_text2, false]}

    const AnswerQuery3 = {text: `INSERT INTO answers (question_id, answer_text, true_false)
    VALUES((SELECT questions.id FROM questions WHERE question_text = $1), $2, $3);`,
    values: [req.body.question_text, req.body.answer_text3, false]}

    const AnswerQuery4 = {text: `INSERT INTO answers (question_id, answer_text, true_false)
    VALUES((SELECT questions.id FROM questions WHERE question_text = $1), $2, $3);`,
    values: [req.body.question_text, req.body.answer_text4, false]}

    console.log(req.body);
    db.query(queryQuiz)
      .then(function(quiz) {
        res.json(quiz.rows);
        db.query(queryQuestion)
          .then(function(question) {
            res.json(question.rows);
          });
      });
    db.query(AnswerQuery1)
      .then(function(answer1) {
        res.json(answer1.rows);
      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });



  // const quiz_id = `SELECT quizzes.id FROM quizzes WHERE title = '${req.body.title}';`
  // const queryQuestion = {
  //   text:`INSERT INTO questions (quiz_id, question_text) VALUES (${quiz_id}, $1);`,
  //   values: [req.body.question_text]
  // };
  // router.post("/", (req, res) => {
  //   console.log(req.body);
  //   const queryQuiz = {
  //     text: `INSERT INTO questions (
  //       quiz_id, question_text)
  //       VALUES(1, 'it this one?');`
  //   };
  //   return db.query(queryQuiz)
  //   .then(quiz => res.send(quiz.rows))
  //     .catch(e => {
  //     console.error(e);
  //     res.send(e)
  //     });
  // });
  return router;
};


db.query(queryQuiz)
      .then(function(quiz) {
        res.json(quiz.rows);
        db.query(queryQuestion)
          .then(function(question) {
            res.json(question.rows);
          });
      });
    db.query(AnswerQuery1)
      .then(function(answer1) {
        res.json(answer1.rows);
      })

db.query(queryQuiz, (err, result) => {

  if(result){
      db.query(queryQuestion, (err, result) => {

        if (result) {
          db.query(AnswerQuery1)
        }
          release(); // now you're done with the client so you can release it

          if (err) {
              if(err.code === POSTGRES_ERRORS.UNIQUE_VIOLATION){
                  return console.error('KEY ALREADY EXISTS');
              } else {
                  return console.error('query error', err);
              }
          }
      }
  }
});
// router.post("/", (req, res) => {
//   console.log(req.body);
//   const queryQuiz = {
//     text: `INSERT INTO questions (
//       quiz_id, question_text)
//       VALUES(1, 'is this?');`
//   }
//   return db.query(queryQuiz)
//   .then(quiz => res.send(quiz.rows))
// });
