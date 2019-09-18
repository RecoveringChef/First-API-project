var topics = ["food", "eating", "cooking", "bikes"];

function renderButtons() {
  console.log("buttons")
  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");
    a.text(topics[i]);
    a.addClass("interests");
    a.attr("id", "topic-btn")
    a.attr("data-topic", topics[i]);
    $("#buttons-view").append(a);
  }
};



var key = "GqA63i7NZ9ihxxAQTH9q7o6VvC5o4hZa"
// Example queryURL for Giphy API


function displaygif() {
  //var gif = $(this).attr("data-type");
  var topicData = $(this).attr("data-topic");
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topicData + "&api_key=" + key + "&limit=5"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log("line 79 call " + response);
   var response = response.data;
   
    for (var i = 0; i < response.length; i++) {
      var gifUrl = response[i].images.fixed_height.url;
      var gifStill = response[i].images.original_still.url;
      var gifAnimate = response[i].images.fixed_height.url;
      console.log(topics);

      let p = $("<p>")
      p.addClass("pTag")
      let img = $("<img>")
      let a = $("<p>").text("Rating: " + response[i].rating)
      img.addClass("gif-img")
      img.attr("src", gifUrl)
      img.attr("data-animate", gifAnimate)
      img.attr("data-still", gifStill)
      p.append(img)
      p.append(a)
      $("#gif-view").prepend(p)
    };

  });

};

renderButtons();


$(document).on("click", "#topic-btn", displaygif);



  
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


//to still/animate

$(document).on("click", ".gif-img", function(){
                 var state = $(this).attr("data-state")


  if (state === "animate") {
    $(this).attr("src", $(this).attr("data-animate"))
    $(this).attr("data-state", "animate")

  }
  else {
  
    $(this).attr("src", $(this).attr("data-still"))
    $(this).attr("data-state", "still")
  }
})

