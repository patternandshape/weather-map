exports.tempToCelsius = function(temp) {
  var celsius;
  celsius = Math.ceil(temp - 273.15);
  return celsius;
}

exports.tempToFahr = function(celsius) {
  var fahrenheit;
  fahrenheit = Math.ceil((celsius * 1.8) + 32);
  return fahrenheit;
}
