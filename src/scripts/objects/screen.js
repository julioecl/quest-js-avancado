const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                            <img class="profile" src="${user.avatarUrl}" alt="foto do perfil do usuário"/>
                            <div class ="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado 😒'}</h1>                                                               
                                <p>${user.bio ?? 'Não possui bio cadastrada 😒'}</p> 
                                <p><img class="people" src="src/css/images/people-24.svg" alt="social media"> ${user.followers} Followers | ${user.following} Following<p>                               
                            </div>
                        </div>
                        `

        let repositoriesItens = ''        
        user.repositories.forEach(repo => 
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}
                                  <ul class="repositories-info">
                                    <li> 🍴 ${repo.forks_count} </li>
                                    <li> ⭐ ${repo.stargazers_count} </li>
                                    <li> 👀 ${repo.watchers_count} </li>
                                    <li> 👨‍💻 ${repo.language  ?? 'Sem linguagem'} </li>
                                  </ul>
                                  </a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2> Repositories </h2>
                                                <ul>${repositoriesItens}</ul>                                                
                                            </div>`
        } 
             
        if(user.events.length > 0) {
            let eventsItens = ''        
            user.events.forEach(function(event) {
                eventsItens += `<li><span class="event-name">${event.repo.name}</span> - ${event.payload.commits ? event.payload.commits[0].message : 'Sem commit '} </li>`
            })                    
            
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2> Events </h2>
                                                <ul>${eventsItens}</ul>
                                            </div>`
        }    

    },
    renderNotFound(){
        this.userProfile.innerHTML = "<h3> Usuário não encontrado </h3>"
    }
}

export {screen}