$(document).ready(function(){

var APIKey = "79c71df69bb7fc6be54b19cd0d415467";
var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid=" + APIKey;

$("#search-button").on("click", function(){
$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    
    $("#search-button").html("<h1>" + response.name + "Weather Details</h1>");
}
)})
}
