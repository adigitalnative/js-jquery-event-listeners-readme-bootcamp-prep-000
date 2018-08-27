function getIt() {
  $(p).on('click', function() {
    alert("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass("tasty")
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e) {
    key = code
  })
}

$(document).ready(function(){

// call functions here

});
