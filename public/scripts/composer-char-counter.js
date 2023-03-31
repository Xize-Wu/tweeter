$(document).ready(function() {

  $("#tweet-text").on("input", function() {
    const count = 140 - $(this).val().length;
    const counter = $(this).parent().find(".counter");
    counter.text(count);
    if (count < 0) {
      counter.css('color', 'red');
    } else (
      counter.css('color', 'black')
    );
  });


  $(".tweet_article").on("mouseover", function() {
    $(this).css({
      'box-shadow': '5px 10px rgba(0, 0, 0, 0.3)'
    });
  });

  $(".tweet_article").on("mouseleave", function() {
    $(this).css({
      'box-shadow': ''
    });
  });

  $(".icon").on("mouseover", function() {
    $(this).children().css({"color": "#fad000"});
  });

  $(".icon").on("mouseleave", function() {
    $(this).children().css({"color": ""});
  });

  //Form Submission using JQuery
  $(".form-inline").submit(function(event) {
    const data = $(this).serialize()
    $.post("/tweets", data)
    event.preventDefault();
  });
    
});

