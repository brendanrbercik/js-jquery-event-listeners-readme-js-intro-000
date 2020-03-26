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
    if (key.which == 071) {
      alert('G key pressed!');
    }
  });
}

function submitIt() {

}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

submitIt();

});
