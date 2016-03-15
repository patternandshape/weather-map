var apiKey = require('./../.env').apiKey;
var temperature = require('../js/temperature.js').tempToCelsius;
var fahrenheitResult = require('../js/temperature.js').tempToFahr;


$(document).ready(function() {
  var celsius;
  var temp;
  var city;
  $('#weatherLocation').click(function() {
      city = $('#location').val();
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
  });


      $('#celsius').click(function() {
        $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
          temp = response.main.temp;
          celsius = temperature(temp);
        $('.showTemperature').text("The current temperature in " + city + " is " + celsius + "C");
      });
    });

     $('#fahrenheit').click(function() {
     var fahrenheit = fahrenheitResult(celsius);
     $('.Fahrenheit').text("The current temperature in Fahrenheit is: " + fahrenheit + "F").show();

   });





  event.preventDefault();
});
