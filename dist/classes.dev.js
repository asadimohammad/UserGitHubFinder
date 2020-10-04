"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UsersGitHub =
/*#__PURE__*/
function () {
  function UsersGitHub() {
    _classCallCheck(this, UsersGitHub);

    this.clientId = '144af195f26b3f4c27a1';
    this.clientSecret = '1b9e79f462604ff0fc2e08704cb3a5c3d7fbddb1';
    this.reposCount = 3;
    this.reposSort = 'created';
  }

  _createClass(UsersGitHub, [{
    key: "queryAPI",
    value: function queryAPI(user) {
      var url, urlRepos, usersResponse, reposResponse, users, repos;
      return regeneratorRuntime.async(function queryAPI$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              url = 'https://api.github.com/users/';
              url += "".concat(user) + "?client_id=".concat(this.clientId, "&client_secret=").concat(this.clientSecret);
              urlRepos = "https://api.github.com/users/".concat(user, "/repos?per_page=").concat(this.reposCount, "&sort=").concat(this.reposSort, "&client_id=").concat(this.client_id, "&client_secret=").concat(this.client_secret);
              _context.next = 5;
              return regeneratorRuntime.awrap(fetch(url));

            case 5:
              usersResponse = _context.sent;
              _context.next = 8;
              return regeneratorRuntime.awrap(fetch(urlRepos));

            case 8:
              reposResponse = _context.sent;
              _context.next = 11;
              return regeneratorRuntime.awrap(usersResponse.json());

            case 11:
              users = _context.sent;
              _context.next = 14;
              return regeneratorRuntime.awrap(reposResponse.json());

            case 14:
              repos = _context.sent;
              return _context.abrupt("return", {
                users: users,
                repos: repos
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }]);

  return UsersGitHub;
}();