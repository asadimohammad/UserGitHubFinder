"use strict";

$(document).ready(function () {
  $('#search').click(function () {
    var username = $('#searchTerm').val(); //order of url - Get/users/ ---username-----/ client id to increase the rate limit for the day - should be 5000 per hour
    // console.log(username);

    var url = "https://api.github.com/users/" + username + "?client_id=https://codepen.io/chawin/pen/yXWPQB?editors=1011"; //+"/events/public";
    //  var urlpub = "https://api.github.com/users/" + username +"/events/public?client_id=https://codepen.io/chawin/pen/yXWPQB?editors=1011";

    $.getJSON(url, function (data) {
      var link = data["html_url"];
      var name = data["name"];
      var repos = data["public_repos"];
      var followers = data["followers"];
      var following = data["following"];
      var avatar = data["avatar_url"];
      var bio = data["bio"];

      if (name === null) {
        name = "Seems like the user has no name...";
      }

      if (bio === null) {
        bio = "No bio. Maybe he's the quiet type?";
      }

      $("#dataOut").html('');
      $('#dataOut').append("<div id='out'><div class='userlink' id='avatar'><img src=" + avatar + "></div> <div class='userlink' id='link'><a id='gopage' href=" + link + " target='blank'>" + name + "</a></div><div id='hisbio'><p>" + bio + "</p></div><div id='basicinfo'><p class='info'>Number of repositories: " + repos + "</p><p class='info'> Number of followers: " + followers + "</p><p class='info'> Number following: " + following + "</p></div></div> <div id='decoration'></div>");
    });
    $("#searchTerm").val(''); //$.getJSON(urlpub, function(data1) {
    //   console.log(data1);
    // });
  });
  $("#searchTerm").keypress(function (e) {
    // search on enter, must be out of ajax scope. target form
    if (e.which == 13) {
      $("#search").click(); // target the button
    }
  });
});