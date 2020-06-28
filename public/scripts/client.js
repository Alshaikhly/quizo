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


/*console.log('yooooooo');

  const createQuizElement = function(quiz) {

    const quizElement = `
    <div><p>${quiz.title}</p></div>
    `
    return quizElement;
  }
  const loadQuiz = function() {
    $('#quiz-container').empty();
    $.ajax('/quizzes/', { method: 'GET' })
      .then(function(loadedQuizzes) {
        const parsedQuizzes = JSON.parse(loadedQuizzes)
        console.log(loadedQuizzes);
        renderQuizzes(parsedQuizzes.users);
      });
  };

  const renderQuizzes = function(quizzes) {

    for (const quiz of quizzes) {
      let $quizElement = createQuizElement(quiz);
      $('#quiz-container').prepend($quizElement);
    }
  };
  loadQuiz();
-----------------------------------------------------------------
// $('.form-container').on('submit', function(event) {
//   event.preventDefault();
//   const tweetData = $(this).serialize();
//   const decodedTweet = decodeURIComponent(tweetData).substring(5);
//   $('.error-empty').slideUp();
//   $('.error-toolong').slideUp();
//   if (!decodedTweet) {
//     $('.error-empty').slideDown();
//   } else if (decodedTweet.length > 140) {
//     $('.error-toolong').slideDown();
//   } else {
//     $.post('/tweets/',
//       tweetData,
//       function() {
//         loadTweets();
//       });
//     $("#tweet-text").val("");
//     $(".counter").val(140);
//   }
// });


// const loadTweets = function() {
//   $('#tweets-container').empty();
//   $.ajax('/tweets/', { method: 'GET' })
//     .then(function(loadedTweets) {
//       renderTweets(loadedTweets);
//     });
// };

// const renderTweets = function(tweets) {

//   for (const tweet of tweets) {
//     let $tweetElement = createTweetElement(tweet);
//     $('#tweets-container').prepend($tweetElement);
//   }
// };

// const createTweetElement = function(tweet) {
//   const numDaysAgo = Math.round((Date.now() - tweet["created_at"]) / 86400000);
//   let daysAgoString;
//   if (numDaysAgo === 0) {
//     daysAgoString = "Today";
//   } else if (numDaysAgo === 1) {
//     daysAgoString = '1 day ago';
//   } else {
//     daysAgoString = `${numDaysAgo} days ago`;
//   }
//   const tweetElement = `
//     <article class="one-tweet">
//       <div class="avatar-name-handle">
//         <div class="avatar-name">
//           <img src=${tweet["user"]["avatars"]}>
//           <p>${tweet["user"]["name"]}</p>
//         </div>
//         <p>${tweet["user"]["handle"]}</p>
//       </div>
//       <p class="tweet-content">${escape(tweet["content"]["text"])}</p>
//       <div class="days-ago-edit">
//         <p>${daysAgoString}</p>
//         <span class=“reaction”>
//           <i class="fa fa-flag" aria-hidden="true"></i>
//           <i class="fa fa-retweet" aria-hidden="true"></i>
//           <i class="fa fa-heart" aria-hidden="true"></i>
//         </span>
//       </div>
//     </article>
//   `;
//   return tweetElement;
// };
*/
