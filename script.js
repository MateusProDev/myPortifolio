/*fetch('http://api.github.com/users/MateusProDev')
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

    const img = document.createElement('img')
    img.src = avatarUrl
    img.alt = 'Avatar GitHub'
    
    avatarImg.appendChild(img)
    bio.textContent= bioGitHub
})*/

// logica do header responsivo 
const lines = document.querySelector('.lines');
const navLinks = document.querySelector('.nav-links');

lines.addEventListener('click', () => {
  lines.classList.toggle('active');
  navLinks.classList.toggle('active');
});