const express = require('express');
const { query } = require('express');
const router  = express.Router();

const trueFalse = function(val1, val2) {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

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
  router.get("/:id", (req, res) => {
    db.query(`SELECT * FROM quizzes
    JOIN questions ON quizzes.id = quiz_id
    JOIN answers ON questions.id = answers.question_id
    WHERE quizzes.id =${req.params.id};`)
      .then(data => {
        const quizzes = {a1: data.rows[0], a2: data.rows[1], a3: data.rows[2], a4: data.rows[3], a5: data.rows[4], a6: data.rows[5], a7: data.rows[6], a8: data.rows[7], a9: data.rows[8], a10: data.rows[9], a11: data.rows[10], a12: data.rows[11], userTakingQuizId: 1};
        res.render('quiz', quizzes);
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/:id/results", (req, res) => {
    const score = Number(Object.keys(req.body)[0]);
    db.query(`INSERT INTO quizzes_solved (
      quiz_id, user_id, score)
      VALUES($1, 1, $2)
      RETURNING score;
      `, [req.params.id, score])
      .then(function(data) {
        res.json(data);
      });
  });



  router.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.body);
    db.query(`INSERT INTO quizzes (
      user_id, title, time_created, subject, public)
      VALUES($1, $2, $3, $4, $5)
      RETURNING id;
      `, [1, req.body.title, '2020-06-27 20:37:41.347345', req.body.subject, true])
      .then(function(quiz) {
        const quizId = quiz.rows[0].id;
        console.log('quizid is', quizId);
        db.query(`INSERT INTO questions (quiz_id, question_text)
        VALUES($1, $2)
        RETURNING id;`, [quizId, req.body.question_text])
          .then(function(question) {
            const questionId = question.rows[0].id;

            db.query(`INSERT INTO answers (question_id, answer_text, true_false)
            VALUES($1, $2, $3), ($1, $4, $5), ($1, $6, $7), ($1, $8, $9);`,
            [questionId, req.body.answer_text1, trueFalse(req.body['rightAnswer-Question1'],'answer1_text1'), req.body.answer_text2, trueFalse(req.body['rightAnswer-Question1'], 'answer1_text2'), req.body.answer_text3, trueFalse(req.body['rightAnswer-Question1'], 'answer1_text3'), req.body.answer_text4, trueFalse(req.body['rightAnswer-Question1'], 'answer1_text4')])
            console.log('right answer QUESTION 1 IS    ', req.body['rightAnswer-Question1'])
              .then(function(answer1) {
                console.log('right answer is thtndsjfs    ', req.body['rightAnswer-Question1']);
              });

          });

        console.log('quizid is', quizId);
        db.query(`INSERT INTO questions (quiz_id, question_text)
        VALUES($1, $2)
        RETURNING id;`, [quizId, req.body.question2_text])
          .then(function(question) {
            const questionId = question.rows[0].id;
            console.log('questionid is', questionId);

            db.query(`INSERT INTO answers (question_id, answer_text, true_false)
            VALUES($1, $2, $3), ($1, $4, $5), ($1, $6, $7), ($1, $8, $9);`,
            [questionId, req.body.answer2_text1, trueFalse(req.body['rightAnswer-Question2'],'answer2_text1'), req.body.answer2_text2, trueFalse(req.body['rightAnswer-Question2'], 'answer2_text2'), req.body.answer2_text3, trueFalse(req.body['rightAnswer-Question2'], 'answer2_text3'), req.body.answer2_text4, trueFalse(req.body['rightAnswer-Question2'], 'answer2_text4')])
              .then(function(answerq2) {
                console.log('answer q2 is  giving me problems   ', answerq2.rows);
              });
          });
        console.log('quizid is', quizId);
        db.query(`INSERT INTO questions (quiz_id, question_text)
        VALUES($1, $2)
        RETURNING id;`, [quizId, req.body.question3_text])
          .then(function(question) {
            const questionId = question.rows[0].id;
            console.log('questionid is', questionId);

            db.query(`INSERT INTO answers (question_id, answer_text, true_false)
            VALUES($1, $2, $3), ($1, $4, $5), ($1, $6, $7), ($1, $8, $9);`,
            [questionId, req.body.answer3_text1, trueFalse(req.body['rightAnswer-Question3'],'answer3_text1'), req.body.answer3_text2, trueFalse(req.body['rightAnswer-Question3'], 'answer3_text2'), req.body.answer3_text3, trueFalse(req.body['rightAnswer-Question3'], 'answer3_text3'), req.body.answer3_text4, trueFalse(req.body['rightAnswer-Question3'], 'answer3_text4')])
              .then(function(answerq3) {
                console.log('answer q3 is  giving me problems   ', answerq3.rows);
                res.json(answerq3.rows);
              });
          });
      });
  });
  return router;
};
