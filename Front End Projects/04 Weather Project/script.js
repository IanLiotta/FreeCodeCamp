var weather = new XMLHttpRequest();
var reqURL = '';
var dSTemp = 48.71;

function getLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
              reqURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/ac852327dd208f1010bbcb2759d6497d/" + pos.coords.latitude + ','+ pos.coords.longitude;
          console.log(reqURL);
          outputWeather();
         });
        }
    else {
        document.getElementById("weatherBox").innerHTML = "navigator.geolocation returned false";
    }
}


function outputWeather() {
  console.log("getting URL " + reqURL);
  $.get(reqURL, function(response){
    console.log(response.currently);
    document.getElementById("weatherBox").innerHTML = response.currently.summary + '<br>';
    document.getElementById('temperature').innerHTML = response.currently.temperature +'&degF';
    dSTemp = response.currently.temperature;
    $.getScript("http://localhost/skycons.js", function(){
        var skycons = new Skycons();
        skycons.add("iconCanvas", response.currently.icon);
        skycons.play();
    });
  });
}
   

getLoc();
function toggleFC() {
    console.log(document.getElementById('temperature').innerHTML.match('F'));
    if (document.getElementById('temperature').innerHTML.match('F') !== null ) {
        console.log('found F');
        document.getElementById('temperature').innerHTML = Math.round((((dSTemp - 32)*5)/9)*100)/100 + '&degC';
    }
    else {
        console.log("didn't find F");
        document.getElementById('temperature').innerHTML = dSTemp + '&degF';
    }
}
