/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 const obj = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }

 $(document).ready(function() {
  var diff = Math.floor((Date.now() - obj['created_at']) / 86400000);

  $('#name1').append(obj.user.name)
  $('#handle1').append(obj.user.handle)
  $('#avatar1').append(`<img src = ${obj.user.avatars}>`)
  $('#text1').append(obj.content.text)
  $('#time1').append(`Posted ${diff} days ago`)
 })
`;
$('.song').append(markup)
 })`