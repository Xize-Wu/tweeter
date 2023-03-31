/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function(obj) {
    let $tweet = `<article class="tweet_article">
      <header class="user_profile">
        <div class="avatar" id="avatar"> <img src ="${obj.user.avatars}"></div>
        <div class="name" id="name">${obj.user.name}</div>
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

  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      let result = createTweetElement(tweet);
      $('.tweet-container').append(result);
    }
  };

  const loadTweets = function(){
    $.ajax({
      type: 'GET',
      url:'/tweets',
      data:{get_param: 'value'},
      // success: function(data){
      //   console.log(data)
      // }
    })
    .then(function(data){
      renderTweets(data)
    }
      )
  }
  
  loadTweets()
});