
const createQuizElement = quiz => {
  const quizElement = `
  <a href="http://localhost:8080/quizzes/${quiz.id}">
    <div class ="quizzes-display">
        <div class ="user-quiz">
          <p>title: ${quiz.title}</p>
          <p>subject: ${quiz.subject}</p>
        </div>
    </div>
  </a>
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
  $("#quiz-form").hide();
  $("#create-quiz-button").on('click', function(event) {
    if ($('#quiz-form').is(':hidden')) {
      $("#quiz-form").slideDown();
    } else {
      $("#quiz-form").slideUp();
    }
  });

  const loadquizzes = () => {
    $.getJSON('/quizzes/')
      .then(function(data) {
        console.log(data.users);
        // $('#tweets-container').empty();

        renderQuizzes(data.users);
      });
  };
  loadquizzes();

  $("#quiz-form").on('submit', function(event) {

    event.preventDefault();

    const data = $(this).serialize();
    $.post('/quizzes',data)
      .then(function(data) {
        console.log('THIS IS MY DATA>>>>', data);
        loadquizzes();
      });
  });
});
