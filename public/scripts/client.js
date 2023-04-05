$(document).ready(function() {
  $("#tweet-form").submit(function(event) {
      event.preventDefault();
      const data = $(this).serialize();
      const text =$("#tweet-text").val()

      if (text.length === 0) {
        $(".no-error-msg").replaceWith($("<section class='error-msg'><b>Brevity is the soul of wit, but we need your tweet to have text in it.</b></section>"))
        return false;
      } else if (text.length > 140) {
        $(".no-error-msg").replaceWith($("<section class='error-msg'><b>Speak less, friend, and enter.</b></section>"))
        return false;
      } else {
        $.ajax({
          method: "POST",
          url:"/tweets",
          data: data,
          success: function(result){
            loadTweets();
            //clear the textbox
            $('#tweet-text').val('');
            $('.counter').text("140");
          },
          error: function (err){
            console.log("There was some error ",err);
          }
        })
      }
    });

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const loadTweets = function(){
    $('.tweet-container').empty()
    $.ajax({
      type: 'GET',
      url:'/tweets',
      // data:{get_param: 'value'},
    })
    .then(function(data){
      renderTweets(data)
    });
  }
  loadTweets();

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      let result = createTweetElement(tweet);
      $('.tweet-container').prepend(result);
    }
  };

  const createTweetElement = function(obj) {
    let $tweet = `<article class="tweet_article" id='tweet_article'>
      <header class="user_profile">
        <div class = "left_column">
          <div class="avatar" id="avatar"> <img src ="${obj.user.avatars}"></div>
          <div class="name" id="name">${obj.user.name}</div>
        </div>
          <div class="handle" id="handle">${obj.user.handle}</div>
      </header>
      <div class="tweet" id="text">${escape(obj.content.text)
      }</div>
      <div class="time" id="time">${timeago.format(obj.created_at)}</div>
      <footer class="iconcollection" id="iconcollection">
        <div class="icon" id="flag">
          <i class="fa-regular fa-flag"></i>
        </div>
        <div class="icon" id="retweet">
          <i class="fa-solid fa-retweet"></i>
        </div>
        <div class="icon" id="like">
          <i class="fa-regular fa-heart"></i>
        </div>
      </footer>
    </article>`;

    return $tweet;
  };
});