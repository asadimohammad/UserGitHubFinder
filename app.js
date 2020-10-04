//Objects of classes
const userGitHub = new UsersGitHub()
const html = new HTML()

//Variables
const getInput = document.querySelector('.get-user')
//EventListeners
EventListeners()
function EventListeners(){
    getInput.addEventListener('keyup',getUser)
}



//Functions
function getUser(data){
    let getUserName = data.target.value
    if(getUserName !== ""){
        userGitHub.queryAPI(getUserName)
        .then((users) => {
            html.resultUsers(users.users)
            html.resultRepos(users.repos)
        })
    }else{
        console.log('Not found');
    }
}