const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    followers: '',
    following: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.followers = gitHubUser.followers
        this.userName = gitHubUser.login 
        this.following = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories        
    },

    setEvents(events){
        this.events = events       
    }
}


export {user}