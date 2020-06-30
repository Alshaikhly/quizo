$(document).ready(function() {
  let counter = 0;
  $("#q1a1").on('click', function(event) {
    if ($("#q1a1").val() === 'true') {
      counter += 1;
    }
    $(".t-f1").html($("#q1a1").val());
    $("#question1").slideUp();
  });
  $("#q1a2").on('click', function(event) {
    if ($("#q1a2").val() === 'true') {
      counter += 1;
    }
    $(".t-f2").html($("#q1a2").val());
    $("#question1").slideUp();
  });
  $("#q1a3").on('click', function(event) {
    if ($("#q1a3").val() === 'true') {
      counter += 1;
    }
    $(".t-f3").html($("#q1a3").val());
    $("#question1").slideUp();
  });
  $("#q1a4").on('click', function(event) {
    if ($("#q1a4").val() === 'true') {
      counter += 1;
    }
    $(".t-f4").html($("#q1a4").val());
    $("#question1").slideUp();
  });



  $("#q2a1").on('click', function(event) {
    if ($("#q2a1").val() === 'true') {
      counter += 1;
    }
    $(".t2-f1").html($("#q2a1").val());
    $("#question2").slideUp();
  });
  $("#q2a2").on('click', function(event) {
    if ($("#q2a2").val() === 'true') {
      counter += 1;
    }
    $(".t2-f2").html($("#q2a2").val());
    $("#question2").slideUp();
  });
  $("#q2a3").on('click', function(event) {
    if ($("#q2a3").val() === 'true') {
      counter += 1;
    }
    $(".t2-f3").html($("#q2a3").val());
    $("#question2").slideUp();
  });
  $("#q2a4").on('click', function(event) {
    if ($("#q2a4").val() === 'true') {
      counter += 1;
    }
    $(".t2-f4").html($("#q2a4").val());
    $("#question2").slideUp();
  });


  $("#q3a1").on('click', function(event) {
    if ($("#q3a1").val() === 'true') {
      counter += 1;
    }
    $(".t3-f1").html($("#q3a1").val());
    $("#question3").slideUp();
    $("#result").html(counter);
    console.log($(document));
  });
  $("#q3a2").on('click', function(event) {
    if ($("#q3a2").val() === 'true') {
      counter += 1;
    }
    $(".t3-f2").html($("#q3a2").val());
    $("#question3").slideUp();
    $("#result").html(counter);
    console.log($(document));
  });
  $("#q3a3").on('click', function(event) {
    if ($("#q3a3").val() === 'true') {
      counter += 1;
    }
    $(".t3-f3").html($("#q3a3").val());
    $("#question3").slideUp();
    $("#result").html(counter);
    console.log($(document));
  });
  $("#q3a4").on('click', function(event) {
    if ($("#q3a4").val() === 'true') {
      counter += 1;
    }
    $(".t3-f4").html($("#q3a4").val());
    $("#question3").slideUp();
    $("#result").html(counter);
    console.log($("#result"));
  });
  $("#buttonsave").on('click', function(event) {
    event.preventDefault();
    const data = $("#result").html();
    console.log(data);
    $.post('/quizzes/1/results', data)
      .then(function(data) {
        console.log('THIS IS MY DATA>>>>', data)
      });
  });
});


// const data = $(document);
// $.get('/quizzes/:id/results', data)
// .then(function(data) {
//   console.log('THIS IS MY DATA>>>>', data)
// });






























