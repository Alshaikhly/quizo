-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  profile_picture VARCHAR(255)
);

DROP TABLE IF EXISTS quizzes CASCADE;
CREATE TABLE quizzes (
id SERIAL PRIMARY KEY NOT NULL,
user_id INTEGER REFERENCES users(id),
title VARCHAR(255),
date_created DATE,
subject VARCHAR(255),
public BOOLEAN DEFAULT TRUE
);

DROP TABLE IF EXISTS quizzes_solved CASCADE;
CREATE TABLE quizzes_solved(
id SERIAL PRIMARY KEY NOT NULL,
quiz_id INTEGER REFERENCES quizzes(id),
user_id INTEGER REFERENCES users(id),
score INTEGER
);

DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id SERIAL PRIMARY KEY NOT NULL,
  question_id INTEGER REFERENCES questions(id),
  answer_text TEXT,
  true_false BOOLEAN DEFAULT FALSE
);

DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  quiz_id INTEGER REFERENCES quizzes(id),
  question_text TEXT
);
