function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').append('.tasty');
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
