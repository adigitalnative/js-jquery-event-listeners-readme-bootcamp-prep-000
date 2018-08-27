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
    if (e.which === 71) {
      alert("It was a G!");
    }
  })
}

function submitIt() {
  $('form').on()
}

$(document).ready(function(){

// call functions here

});
