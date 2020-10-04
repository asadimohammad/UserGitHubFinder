class HTML {
  constructor() {
    const result = document.querySelector('.result')
    this.result = result
  }
  resultUsers(user) {
    this.result.innerHTML = `
        <div class="row">
                <div class="col s12">
                    <div class="card col s5 m5 l3">
                        <div class="card card-image  ">
                            <img src="${user.avatar_url}" width="205px;" height="210px;" class="usergitimage" alt="userGitImage">
                            <a href="${user.html_url}" class=" btn waves-effect  wave-teal white-text pink veiwprofile">
                            ${user.name}</a>
                        </div>
                    </div>
                    <div class="col s7 m7 l9">
                        <div class="card card-panel">
                            <ul class="center white-text">
                                <li class="badge new teal repos">Repos: ${user.public_repos}</li>
                                <li class="badge new blue gists">Gists: ${user.public_gists}</li>
                                <li class="badge new orange folowers">Followers: ${user.followers}</li>
                                <li class="badge new purple folowing">Following: ${user.following}</li>
                            </ul>
                            <div class="col s12">
                                <ul class=" collection">
                                    <li class="collection-item company">Company: ${user.company}</li>
                                    <li class="collection-item blog">Website/Blog: ${user.blog}</li>
                                    <li class="collection-item location">Location: ${user.location}</li>
                                    <li class="collection-item membersince">Member Since: ${user.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="header">Latest Repos</h3>
            <div id="latestrepos"></div>
        `
  }
  resultRepos(repos) {
    let resultRepo = ''
    repos.forEach(repo => {
      console.log(repo.name);
      const latestRepos = document.querySelector('#latestrepos')
      resultRepo += `        
        <div class="collection">
          <div class="row collection-item">
              <div class="col m12">
                  <div class="col m7 namerepo">${repo.name}</div>
                  <ul class="col m3 white-text">
                      <li class="badge new teal forks">Forks: ${repo.forks_count}</li>
                      <li class="badge new blue watchers">Watchers: ${repo.watchers_count}</li>
                      <li class="badge new red stars">stars: ${repo.stargazers_count}</li>
                  </ul>
                  <div class="col m2 ">
                      <a href="${repo.html_url}" class="btn red white-text repoadd">Repo Page</a>
                  </div>
              </div>
          </div>
        </div>
      `
      latestRepos.innerHTML = resultRepo
    });
  }
}