"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HTML =
/*#__PURE__*/
function () {
  function HTML() {
    _classCallCheck(this, HTML);

    var result = document.querySelector('.result');
    this.result = result;
  }

  _createClass(HTML, [{
    key: "resultUsers",
    value: function resultUsers(user) {
      this.result.innerHTML = "\n        <div class=\"row\">\n                <div class=\"col s12\">\n                    <div class=\"card col s5 m5 l3\">\n                        <div class=\"card card-image  \">\n                            <img src=\"".concat(user.avatar_url, "\" width=\"205px;\" height=\"210px;\" class=\"usergitimage\" alt=\"userGitImage\">\n                            <a href=\"").concat(user.html_url, "\" class=\" btn waves-effect  wave-teal white-text pink veiwprofile\">\n                            ").concat(user.name, "</a>\n                        </div>\n                    </div>\n                    <div class=\"col s7 m7 l9\">\n                        <div class=\"card card-panel\">\n                            <ul class=\"center white-text\">\n                                <li class=\"badge new teal repos\">Repos: ").concat(user.public_repos, "</li>\n                                <li class=\"badge new blue gists\">Gists: ").concat(user.public_gists, "</li>\n                                <li class=\"badge new orange folowers\">Followers: ").concat(user.followers, "</li>\n                                <li class=\"badge new purple folowing\">Following: ").concat(user.following, "</li>\n                            </ul>\n                            <div class=\"col s12\">\n                                <ul class=\" collection\">\n                                    <li class=\"collection-item company\">Company: ").concat(user.company, "</li>\n                                    <li class=\"collection-item blog\">Website/Blog: ").concat(user.blog, "</li>\n                                    <li class=\"collection-item location\">Location: ").concat(user.location, "</li>\n                                    <li class=\"collection-item membersince\">Member Since: ").concat(user.created_at, "</li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <h3 class=\"header\">Latest Repos</h3>\n            <div id=\"latestrepos\"></div>\n        ");
    }
  }, {
    key: "resultRepos",
    value: function resultRepos(repos) {
      var resultRepo = '';
      repos.forEach(function (repo) {
        console.log(repo.name);
        var latestRepos = document.querySelector('#latestrepos');
        resultRepo += "        \n        <div class=\"collection\">\n          <div class=\"row collection-item\">\n              <div class=\"col m12\">\n                  <div class=\"col m7 namerepo\">".concat(repo.name, "</div>\n                  <ul class=\"col m3 white-text\">\n                      <li class=\"badge new teal forks\">Forks: ").concat(repo.forks_count, "</li>\n                      <li class=\"badge new blue watchers\">Watchers: ").concat(repo.watchers_count, "</li>\n                      <li class=\"badge new red stars\">stars: ").concat(repo.stargazers_count, "</li>\n                  </ul>\n                  <div class=\"col m2 \">\n                      <a href=\"").concat(repo.html_url, "\" class=\"btn red white-text repoadd\">Repo Page</a>\n                  </div>\n              </div>\n          </div>\n        </div>\n      ");
        latestRepos.innerHTML = resultRepo;
      });
    }
  }]);

  return HTML;
}();