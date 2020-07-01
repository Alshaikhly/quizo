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
* As a user I want to be able to make my quizzes private, but shareable with designated users.
As a user I want to be able to browse other user's quizzes.
As a user I want to be able to see my previous quiz results.
As a user I can attempt quizzes and save the results.
As a user I want to be able to view other user's quizzes on the home page.
** As a user I want to be able to share my results on a quiz.


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







<!-- Page-specific content -->

      <div class ="body-inner-new-quiz">
        <div class="new-quiz-button">
          <button id="create-quiz-button">Create New Quiz</button>
        </div>
      </div>

      <div class ="body-inner-new-quiz">

      </div>
      <div class ="body-inner-quizzes">
        <div class ="body-inner-quizzes-title">

          <form id="quiz-form" action="/quizzes" method="POST">
            <!-- <div class ="body-inner-new-quiz-title">
              <p>Create your quiz</p>
            </div> -->
            <label for="title">Quiz Title</label>
            <input type="text" name="title">
            <label for="subject">Subject</label>
            <input type="text" name="subject">
            <label for="question_text">Question</label>
            <input type="text" name="question_text">
            <div>
              <label for="answer_text1">Answer 1</label>
              <input type="text" name="answer_text1">
              <!-- <input type="radio" name="answer1" id="answer1" value="answer1"> -->
            </div>
            <div>
              <label for="answer_text2">Answer 2</label>
              <input type="text" name="answer_text2">
              <!-- <input type="radio" name="answer1" id="answer2" value="answer2"> -->
            </div>
            <div>
              <label for="answer_text3">Answer 3</label>
              <input type="text" name="answer_text3">
              <!-- <input type="radio" name="answer1" id="answer3" value="answer3"> -->
            </div>
            <div>
              <label for="answer_text4">Answer 4</label>
              <input type="text" name="answer_text4">
              <!-- <input type="radio" name="true" id="answer4" value="answer4"> -->
              <p>Correct answer is:</p>
              <select name="rightAnswer-Question1">
                <option value="answer1">answer1</option>
                <option value="answer2">answer2</option>
                <option value="answer3">answer3</option>
                <option value="answer4">answer4</option>
              </select>
            </div>
            <label for="question_text">Question2</label>
            <input type="text" name="question2_text">
            <div>
              <label for="answer1">Answer 1</label>
              <input type="text" name="answer2_text1">
              <!-- <input type="radio" name="answer2" id="answer1" value="answer1"> -->
            </div>
            <div>
              <label for="answer2">Answer 2</label>
              <input type="text" name="answer2_text2">
              <!-- <input type="radio" name="answer2" id="answer2" value="answer2"> -->
            </div>
            <div>
              <label for="answer3">Answer 3</label>
              <input type="text" name="answer2_text3">
              <!-- <input type="radio" name="answer2" id="answer3" value="answer3"> -->
            </div>
            <div>
              <label for="answer4">Answer 4</label>
              <input type="text" name="answer2_text4">
              <!-- <input type="radio" name="answer2" id="answer4" value="answer4"> -->
              <p>Correct answer is:</p>
              <select name="rightAnswer-Question2">
                <option value="answer1">answer1</option>
                <option value="answer2">answer2</option>
                <option value="answer3">answer3</option>
                <option value="answer4">answer4</option>
              </select>
            </div>
            <label for="question_text">Question3</label>
            <input type="text" name="question2_text">
            <div>
              <label for="answer1">Answer 1</label>
              <input type="text" name="answer3_text1">
              <!-- <input type="radio" name="answer3" id="answer1" value="answer1"> -->
            </div>
            <div>
              <label for="answer2">Answer 2</label>
              <input type="text" name="answer3_text2">
              <!-- <input type="radio" name="answer3" id="answer2" value="answer2"> -->
            </div>
            <div>
              <label for="answer3">Answer 3</label>
              <input type="text" name="answer3_text3">
              <!-- <input type="radio" name="answer3" id="answer3" value="answer3"> -->
            </div>
            <div>
              <label for="answer4">Answer 4</label>
              <input type="text" name="answer3_text4">
              <!-- <input type="radio" name="answer3" id="answer4" value="answer4"> -->
              <p>Correct answer is:</p>
              <select name="rightAnswer-Question3">
                <option value="answer1">answer1</option>
                <option value="answer2">answer2</option>
                <option value="answer3">answer3</option>
                <option value="answer4">answer4</option>
              </select>
            </div>
            <button type="submit">Submit</button>
          </form>

        </div>
        <div id="quiz-container">
          <section class="quizzes"></section>
      </div>


      </div>
      <div class ="body-inner-quizzes">
        <!-- <p>User's Quizzes</p> -->
      <section id="quiz-container"></section>
    </div>
    </div>
  </body>

  <!-- CSS -->
 .body-wrap {
  overflow: hidden;
  /* Sticky footer */
  display: flex;
  flex-direction: column;
  min-height: 200vh;
  background-color: #006fd1;
}

.body-box {

}

.body-inner-new-quiz {
  height: 100px;
  /* background-color: lightblue; */
  margin-top: 10px;
  color: white;
  /* border: solid pink 3px; */
}

.body-inner-new-quiz-title {
  display: flex;
  justify-content: center;
}

.new-quiz-button {
  display: flex;
  justify-content: center;
}

button {
  background-color: pink;
  border-radius: 10px;
}

.body-inner-quizzes {
  /* background-color: lightblue; */
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  color: white;
}

.body-inner-quizzes-title {
  display: flex;
  justify-content: center;
}

.quizzes-display {
  /* background-color: orange; */
  height: 150px;
  padding: 0px 40px;
}

.user-quiz{
  border: solid pink 3px;
  padding: 0px 60px;
}

#quiz-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: 165px;
  overflow: scroll;
  /* overflow-x: scroll; */
}

#quiz-form {
  display: flex;
  flex-direction: column;
  margin: -200px 0px 20px 0px;
}

#quiz-form div {
  display: flex;
  flex-direction: row;
  margin: flex;
}

.user-quiz {
  border: solid black 2px;
  display: flex;
  justify-content: center;
}

.quiz-questions {
  background-color: orange;
  height: 400px;
}

/* body */
.quiz-form {
  display: flex;
  flex-direction: column;
}

/* create quiz */
.quiz-form label {
  display: flex;
  justify-content: center;
}
