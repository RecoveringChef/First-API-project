//test
console.log ("testing");



var key = "GqA63i7NZ9ihxxAQTH9q7o6VvC5o4hZa"
// Example queryURL for Giphy API
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + key + "&limit=5"

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

var topics = ["food", "eating", "cooking"];

function renderButtons() {
  console.log("buttons")
$("#buttons-view").empty();

for(var i = 0; i < topics.length; i++) {
  var a = $("<button>");

  a.addClass("interests");

  a.attr("data-topic", topics[i]);

  a.text(topics[i]);

  $("#buttons-view").append(a);
}
};

renderButtons();

$(document).on("click", ".interests", function(){
console.log("click click") ;

var topicData = $(this).attr("data-topic");
console.log(topicData);

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topicData + "&api_key=" + key + "&limit=5"

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});
});

// make new buttons as new topics added  (take from class exercise #10).


//$("#add-gif").on("click", function(event) {
 // event.preventDefault();
 // var gif = $("<button>").val().trim();
 // gif.push(topicData);
 // renderButtons();
//});

function diplayGif(){
var gif = $(this).attr("data-topic");
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topicData + "&api_key=" + key + "&limit=5"
$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
          
  var 




}