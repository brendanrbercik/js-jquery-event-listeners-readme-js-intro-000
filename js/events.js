function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $(window).on("load", function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $(document).on("keydown", function(key) {
    if (key.which == 71) {
      alert('G key pressed!');
    }
  });
}

function submitIt() {
  $('form').on("submit", function() {
    if ($('input:first').val() === "correct") {
      alert('Your form will be submitted now.');
    }
    alert('You entered the wrong value.');
  });
}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

submitIt();

});
