function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $(window).on("load", function() {
    $('img').prepend('class = "tasty"');
  });

}

function pressIt() {

}

function submitIt() {

}

$(document).ready(function(){

getIt();

frameIt();

pressIt();

submitIt();

});
