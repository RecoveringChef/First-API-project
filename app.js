//test
console.log("testing");


var key = "GqA63i7NZ9ihxxAQTH9q7o6VvC5o4hZa"
// Example queryURL for Giphy API
var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + key + "&limit=5"

//$.ajax({
 // url: queryURL,
 // method: "GET"
//}).then(function (response) {
 // console.log(response);
//});

var topics = ["food", "eating", "cooking"];

function renderButtons() {
  console.log("buttons")
  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");

    a.addClass("interests");

    a.attr("data-topic", topics[i]);

    a.text(topics[i]);

    $("#buttons-view").append(a);
  }
};

renderButtons();

$(document).on("click", ".interests", function () {
  console.log("click click");

  var topicData = $(this).attr("data-topic");
  console.log(topicData);

 // var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topicData + "&api_key=" + key + "&limit=5"

  //$.ajax({
  // url: queryURL,
  //  method: "GET"
  //}).then(function (response) {
  // console.log("this is line 45" + response);
   displaygif();
  //});
//

});

// make new buttons as new topics added  (take from class exercise #10).


$("#add-gif").on("click", function (event) {
  event.preventDefault();
  // This line of code will grab the input from the textbox
  var gif = $("#gif-input").val().trim();

  // The gif from the textbox is then added to our array
  topics.push(gif);

  // Calling renderButtons which handles the processing of our gif array
  renderButtons();

  $("#gif-input").val("")

});




function displaygif() {
 //var gif = $(this).attr("data-type");
 var topicData = $(this).attr("data-topic");
 var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topicData + "&api_key=" + key + "&limit=5"
  $.ajax({
    url: queryURL,
    method: "GET"
 }).then(function (response) {
    console.log("line 79 call " + response);
    for (var i = 0; i < topics.length; i++) {
console.log(topics)
      var temp = response.data[i]
      var gifUrl = temp.images.fixed_height.url
      let p = $("<p>")
      let img = $("<img>").attr("id", "gif-img")
      let a = $("<p>").text("Rating: " + temp.rating)
      p.addClass("jumbotron")
      img.attr("state", "animate")
      img.attr("src", gifUrl)
      img.attr("animate-url", temp.images.fixed_height.url)
      img.attr("still-url", temp.images.original_still.url)
      p.append(img)
      p.append(a)
      $("#gif-view").prepend(p)
    };

  });
 
};


//to still/animate

$("#gifs-view").on("click", "#gif-img", function () {
  if ($(this).attr("state") === "animate") {
    $(this).attr("src", $(this).attr("still-url"))
    $(this).attr("state", "still")

  }
  else {
    var animate = $(this).attr("animate-url")
    $(this).attr("src", $(this).attr("animate-url"))
    $(this).attr("state", "animate")
  }

})
