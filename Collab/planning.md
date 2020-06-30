-Pick a Project:
Quiz App
An app that lets you create quizzes and share them between friends. The creator of the quiz can view and share all the results at the end of the quiz.

-Requirements:
users can create quizzes
users can make their quiz unlisted (make them private and not available on the home page, but if someone knows the quiz URL they can visit and take the quiz)
users can share a link to a single quiz
users can see a list of public quizzes
users can see a list of public quizzes on the home page
users can attempt a quiz
users can see the results of their recent attempt
users can share a link to the result of their attempt

-User stories:
As a user I want to be able to create/save quizzes, so that I could share them as a URL later.
As a user I want to be able to make my quizzes private, but shareable with designated users.
As a user I want to be able to browse other user's quizzes.
As a user I want to be able to see my previous quiz results.
As a user I can attempt quizzes and save the results.
As a user I want to be able to view other user's quizzes on the home page.
As a user I want to be able to share my results on a quiz.


-Routes 
Browse      GET     /quizzes
Read        GET     /quizzes/:id
Edit        POST    /quizzes/:id
Add         POST    /quizzes
Delete      POST    /quizzes/:id/delete

-WireFram




DAY 2

make ajax request that is contained in document ready function

loadQuizzes function 
first create html layout for each quiz thats has to laod

Load quiz function
just going to render all the json in our database from /quizzes

renderQuizzes functions
loops through the quizzes 
 
createQuiz function
create the quiz element 

styling the main page;
* forms in columns
* all quizzes on screen
* responsive
* form disappearing after "submit"







{
    id: 1,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'The day on which the Sun’s direct rays cross the celestial equator is called:',
    question_id: 1,
    answer_text: 'The Soltice',
    true_false: false },
  anonymous {
    id: 2,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'The day on which the Sun’s direct rays cross the celestial equator is called:',
    question_id: 1,
    answer_text: 'The Elcipse',
    true_false: false },
  anonymous {
    id: 3,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'The day on which the Sun’s direct rays cross the celestial equator is called:',
    question_id: 1,
    answer_text: 'Easter',
    true_false: false },
  anonymous {
    id: 4,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'The day on which the Sun’s direct rays cross the celestial equator is called:',
    question_id: 1,
    answer_text: 'The Equinox',
    true_false: true },
  anonymous {
    id: 5,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'Who invented the telescope?',
    question_id: 2,
    answer_text: 'Hans Lippershey',
    true_false: true },
  anonymous {
    id: 6,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'Who invented the telescope?',
    question_id: 2,
    answer_text: 'Galileo',
    true_false: false },
  anonymous {
    id: 7,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'Who invented the telescope?',
    question_id: 2,
    answer_text: 'Johannes Kepler',
    true_false: false },
  anonymous {
    id: 8,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'Who invented the telescope?',
    question_id: 2,
    answer_text: 'Archimedes',
    true_false: false },
  anonymous {
    id: 9,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'Which of these objects is the farthest from the Sun?',
    question_id: 3,
    answer_text: 'Saturn',
    true_false: false },
  anonymous {
    id: 10,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'Which of these objects is the farthest from the Sun?',
    question_id: 3,
    answer_text: 'Kuiper Belt',
    true_false: false },
  anonymous {
    id: 11,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'Which of these objects is the farthest from the Sun?',
    question_id: 3,
    answer_text: '90377 Sedna',
    true_false: true },
  anonymous {
    id: 12,
    user_id: 1,
    title: 'about the universe',
    time_created: 2020-06-30T00:01:26.850Z,
    subject: 'Astronomy',
    public: true,
    quiz_id: 1,
    question_text: 'Which of these objects is the farthest from the Sun?',
    question_id: 3,
    answer_text: 'Neptune',
    true_false: false } ]

