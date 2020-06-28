const createQuizElement = quiz => {

  const quizElement = `
  <div class ="quizzes-display">
      <div class ="user-quiz">
        <p>${quiz.title}</p>
      </div>
  </div>
  `
    return quizElement;
}

const renderQuizzes = function(quizzes) {

  for (const quiz of quizzes) {
console.log(quiz.title)
    let $quizElement = createQuizElement(quiz);
    $('#quiz-container').prepend($quizElement);
  }
};


$(document).ready(function() {
    console.log('check check');

  const loadquizzes = () => {
    $.getJSON('/quizzes/')
      .then(function(data) {
        console.log(data.users);
        // $('#tweets-container').empty();

        renderQuizzes(data.users);
      });
  };


  loadquizzes();

});
