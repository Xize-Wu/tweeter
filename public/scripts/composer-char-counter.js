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
    $(this).children().css({ "color": "#fad000" });
  });

  $(".icon").on("mouseleave", function() {
    $(this).children().css({ "color": "" });
  });

  //Form Submission using JQuery
  $(".form-inline").submit(function(event) {
    const data = $(this).serialize();
    const length = $(this).serialize().length;
    if (length === 0) {
      alert("Brevity is the soul of wit, but we need your tweet to have text in it.");
      return false;
    } else if (length > 140) {
      alert("Speak less then 140 words, friend, and submit.");
      return false;
    } else {
      $.post("/tweets", data);
      event.preventDefault();
      location.reload()
    }
  });

});

