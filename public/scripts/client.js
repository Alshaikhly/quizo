const createQuizElement = quiz => {

  const quizElement = `
  <div class ="quizzes-display">
      <div class ="user-quiz">
        <p>title: ${quiz.title}</p>
        <p>subject: ${quiz.subject}</p>
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

// const submitQuiz = function(data) {
//   return $.ajax({
//     method: "POST",
//     url: "/quizzes",
//     data,
//   });
// }

let showForm = false;



$(document).ready(function() {
    console.log('check check');

    $("#create-quiz-button").click(function() {
      if (!showForm) {
        showForm = true;
        $("#quiz-form").slideDown("fast");
      } else {
        showForm = false;
        $("#quiz-form").slideUp("fast");
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
    // submitQuiz(data)
    // .then(function() {
      $.post('/quizzes',data)
      .then(function(data) {
        console.log('THIS IS MY DATA>>>>', data)
        loadquizzes();
      });
  });
});
