const imageRotation = () => {
  const images = ['https://pixabay.com/get/54e1dc424850a514f1dc8460da2932771639dae55a5972_640.png', 'https://pixabay.com/get/54e1d6444c54a814f1dc8460da2932771639dded515976_640.jpg', 'https://pixabay.com/get/52e2d7414d50a414f1dc8460da2932771639dded575672_640.jpg', 'https://pixabay.com/get/52e2d7414e52a514f1dc8460da2932771639dded555170_640.jpg', 'https://pixabay.com/get/55e6d1474e53a814f1dc8460da2932771639dded555374_640.png'];

  return images[Math.floor(Math.random() * images.length)]
}

const createQuizElement = quiz => {

  const quizElement = `
  <a href="http://localhost:8080/quizzes/${quiz.id}">
    <div class ="quizzes-display">
        <div class ="user-quiz" style="background-image: url('${imageRotation()}'); background-position: center; background-size: cover">
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
    if (quiz.public) {
      let $quizElement = createQuizElement(quiz);
      $('#quiz-container').prepend($quizElement);
    }
  }
};



$(document).ready(function() {
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
        $('#quiz-container').empty();
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

