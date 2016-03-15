var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      if (response.cod === 200) {
        $('.showHumidity').text("The humidity in " + city + " is " + response.main.humidity + "%");
      } else {
        $('.showHumidity').text("invalid city");
      }
    }).fail(function(error) {
      $('.showHumidity').text(error.message);
    });

    $('#temperature').click(function() {
      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      $('.showTemperature').text("The current temperature in" + city + " is " + response.main.temp + "K");
      });
    });

  });





});
