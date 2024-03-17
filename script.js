/*fetch('http://api.github.com/users/MateusProDev')
.then(response => {
    if (!response.ok) {
        throw new Error('Error ao buscar dados do perfil do github');
    }
    return response.json();
})*/
/*.then(data => {
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


// Função para adicionar animações quando um elemento entra no viewport
function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Parar de observar o elemento após a animação ser aplicada
        }
    });
}

// Criar um observador para animar os elementos quando entrarem no viewport
const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.5 });

// Selecionar todos os elementos que serão animados
const elementsToAnimate = document.querySelectorAll('.animate-slide-in');

// Registrar cada elemento no observador
elementsToAnimate.forEach(element => {
    observer.observe(element);
});

// Ativar as animações para os elementos que já estão visíveis na página
animateOnScroll(elementsToAnimate.map(element => ({ target: element, isIntersecting: isElementInViewport(element) })), observer);

// Função para verificar se um elemento está visível no viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
