//Form Submission using JQuery
// const errorMsg = function(){
//   $(".form-inline").submit(function(event) {
//     const data = $(this).serialize();
//     const text =$("#tweet-text").val()

//     if (text.length === 0) {
//       $(".no-error-msg").replaceWith($("<section class='error-msg'><b>Brevity is the soul of wit, but we need your tweet to have text in it.</b></section>"))
//       return false;
//     } else if (text.length > 140) {
//       $(".no-error-msg").replaceWith($("<section class='error-msg'><b>Speak less, friend, and enter.</b></section>"))
//       return false;
//     } else {
//       // $.post("/tweets", data);
//       $.ajax({
//         method: "POST",
//         url:"/tweets",
//         data: data,
//         success: function(result){
//           renderTweets(result);
//         },
//         error: function (err){
//           console.log("There was some error ",err);
//         }
        
//       })
//       event.preventDefault();
//       //location.reload()
//     }
//   });
// }

//count input length
const inputLength = function () {
  $("#tweet-text").on("input", function() {
    const count = 140 - $(this).val().length;
    const $counter = $(this).parent().find(".counter");
    $counter.text(count);
    if (count < 0) {
      $counter.addClass('form--red');
    } else (
      $counter.removeClass('form--red')
    );
  });
}

$(document).on("mouseover", ".tweet_article", function(){
  $(this).css({
    'box-shadow': '5px 10px rgba(0, 0, 0, 0.3)'
  });
})

$(document).on("mouseleave", ".tweet_article", function(){
  $(this).css({
    'box-shadow': ''
  });
})

$(document).on("mouseover", ".icon", function(){
  $(this).children().css({ "color": "#fad000" });
})

$(document).on("mouseleave", ".icon", function(){
  $(this).children().css({ "color": "" });
})

$(document).ready(function() {
  //errorMsg();
  inputLength();
});

// $(document).on("hover", ".icon", function(){
//   $(this).children().css({ "color": "#fad000" }),
//   $(this).children().css({ "color": "" })
// })