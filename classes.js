class UsersGitHub {
    constructor(){

        this.clientId = '144af195f26b3f4c27a1';
        this.clientSecret = '1b9e79f462604ff0fc2e08704cb3a5c3d7fbddb1';
        this.reposCount = 3;
        this.reposSort='created'
    }
    
    async queryAPI(user){
        let url = 'https://api.github.com/users/'
        url += `${user}`+`?client_id=${this.clientId}&client_secret=${this.clientSecret}`
        
        let urlRepos = `https://api.github.com/users/${user}/repos?per_page=${this.reposCount}&sort=${this.reposSort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        
        const usersResponse = await fetch(url)
        const reposResponse = await fetch(urlRepos)
        const users = await usersResponse.json()
        const repos = await reposResponse.json()
        return {
            users,repos
        }
        
    }
}