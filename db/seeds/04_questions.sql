INSERT INTO questions (quiz_id, question_text) VALUES (1, 'The day on which the Sun’s direct rays cross the celestial equator is called:'), (1, 'Who invented the telescope?'),

(1, 'Which of these objects is the farthest from the Sun?'), (2, 'What is the name of the instrument used to measure wind speed?'),(2, 'Which golf term means one under par?'),
(2, 'Which mountain is the worlds tallest?'), (3,'What is the best-selling video game of all time?'), (3, 'What inspired games maker Satoshi Tajiri to create Pokémon?'),
(3, 'What is the armoured vehicle in Halo called?'), (4, 'Canadas birthday is on:'),(4, 'The population of Canada in 2015 was almost:'),
(4, 'The capital city of Canada is:');


/*\i db/seeds/04_questions.sql
psql:db/seeds/04_questions.sql:6: ERROR:  column "Which mountain is the world's tallest?" does not exist
LINE 3: (2, "Which mountain is the world's tallest?"), (3,'What is t...
            ^*/
