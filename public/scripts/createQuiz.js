let showForm = false;

$(document).ready(function() {

  $("#create-quiz-button").click(function() {
    if (!showForm) {
      showForm = true;
      $("#quiz-form").slideDown("fast");
    } else {
      showForm = false;
      $("#quiz-form").slideUp("fast");
    }
  });
});
