fetch('http://api.github.com/users/MateusProDev')
.then(response => {
    if (!response.ok) {
        throw new Error('Error ao buscar dados do perfil do github');
    }
    return response.json();
})
.then(data => {
    console.log(data)

    const avatarUrl = data.avatar_url;
    const bioGitHub = data.bio;
    const repo = data.public_repos;

    const avatarImg = document.getElementById('avatarImg');
    const bio = document.getElementById('bio');
    const myProject = document.getElementById('myProject');

    const img = document.createElement('img')
    img.src = avatarUrl
    img.alt = 'Avatar GitHub'
    
    avatarImg.appendChild(img)
    bio.textContent= bioGitHub
    myProject.textContent= `Numero de repositorios públicos no GitHub: ${repo}`
})