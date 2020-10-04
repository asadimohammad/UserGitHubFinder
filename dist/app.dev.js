"use strict";

//Objects of classes
var userGitHub = new UsersGitHub();
var html = new HTML(); //Variables

var getInput = document.querySelector('.get-user'); //EventListeners

EventListeners();

function EventListeners() {
  getInput.addEventListener('keyup', getUser);
} //Functions


function getUser(data) {
  var getUserName = data.target.value;

  if (getUserName !== "") {
    userGitHub.queryAPI(getUserName).then(function (users) {
      html.resultUsers(users.users);
      html.resultRepos(users.repos);
    });
  } else {
    console.log('Not found');
  }
}