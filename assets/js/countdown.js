function getjdayFromNow() {
  return new Date(2022, 2, 17, 0);
}

$(document).ready(function() {

  $('#clock-c').countdown(getjdayFromNow(), function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="h1 font-weight-bold">%D</span> Days%!d'
      + '<span class="h1 font-weight-bold">%H</span> Hr'
      + '<span class="h1 font-weight-bold">%M</span> Min'
      + '<span class="h1 font-weight-bold">%S</span> Sec'));
  });

  $('#days').countdown(getjdayFromNow(), function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="h1 font-weight-bold">%D</span> Days'));
  });

  $('#hours').countdown(getjdayFromNow(), function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="h1 font-weight-bold">%H</span> Hours'));
  });

  $('#minutes').countdown(getjdayFromNow(), function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="h1 font-weight-bold">%M</span> Minutes'));
  });

  $('#seconds').countdown(getjdayFromNow(), function(event) {
    var $this = $(this).html(event.strftime(''
      + '<span class="h1 font-weight-bold">%S</span> Seconds'));
  });
});