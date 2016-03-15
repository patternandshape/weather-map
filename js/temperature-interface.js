var apiKey = require('./../.env').apiKey;
var temperature = require('../js/temperature.js').tempToCelsius;

$(document).ready(function() {
  var celsius;
  var temp;
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
        temp = response.main.temp;
      $('.showTemperature').text("The current temperature in " + city + " is " + temp + "K");
      });

      $('#celsius').click(function() {
         celsius = temperature(temp);  //global??????
        // $('.showTemperature').text("The current temperature in " + city + " is " + temp + "K");
          $('.showCelsius').text("The current temperature in celsius is: " + celsius + "C");
        });
    });

  });





});
