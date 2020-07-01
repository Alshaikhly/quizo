/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    console.log(req.params);
    db.query(`SELECT users.name, users.email, quizzes.title, questions.quiz_id, score FROM users
JOIN quizzes_solved ON users.id = user_id
JOIN quizzes ON quizzes.id = quizzes_solved.quiz_id
JOIN questions ON questions.id = quizzes_solved.quiz_id
JOIN answers ON answers.question_id = questions.id
WHERE users.id = $1
ORDER BY quiz_id;`, [req.params.id])
      .then(data => {
        console.log('hey');
        const users = data.rows;
        res.send(data.rows);
      })
      .catch(err => {
        console.log('catch');
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
