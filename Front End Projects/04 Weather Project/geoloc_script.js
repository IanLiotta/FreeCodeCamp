var output = document.getElementById("weatherBox");
var lat = '';
var lon = '';
var weather = new XMLHttpRequest();


function getLoc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPos); 
    }
    else {
        output.innerHTML = "navigator.geolocation returned false";
    }
}

function showPos(pos) {
    lat = pos.coords.latitude;
    lon = pos.coords.longitude;
    weather.open("GET", "https://api.darksky.net/forecast/ac852327dd208f1010bbcb2759d6497d/" + lat + "," + lon, true);
    weather.send();
    weather.addEventListener("readystatechange", processRequest, false);
}

function processRequest(e){
    if (weather.readyState == 4 && weather.status == 200) {
        //var response = JSON.parse(weather.responseText);
        output.innerHTML = weather.responseText;
    }
}

getLoc();