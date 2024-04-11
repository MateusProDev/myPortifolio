// Função para esperar determinado tempo
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Verifica se o input já foi mostrado anteriormente
let inputMostrado = localStorage.getItem('inputMostrado') === 'true';

// Função para mostrar o input após 5 segundos
async function showInputAfterDelay() {
  await wait(8000); // Aguarda 5 segundos

  // Verifica se o input já foi mostrado
  if (!inputMostrado) {
    const mainContainer = document.querySelector('.main-container');
    mainContainer.style.display = 'block'; // Mostra o formulário após o tempo de espera

    // Adiciona o evento de clique ao botão de fechar a mensagem
    const btnFecharMsg = document.getElementById('btnFecharMsg');
    btnFecharMsg.addEventListener('click', function() {
      // Oculta a mensagem
      let mensagem = document.getElementById('welcome-message');
      mensagem.style.display = "none";

      // Define a variável para indicar que o input foi mostrado
      inputMostrado = true;
      // Armazena o estado do inputMostrado no localStorage
      localStorage.setItem('inputMostrado', 'true');
    });
  }
}

// Chama a função para mostrar o input após 5 segundos
showInputAfterDelay();


// Evento de submissão do formulário
document.getElementById('user-name-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const userNameInput = document.getElementById('user-name-input');
  const userName = userNameInput.value.trim(); // Obtém o valor do input removendo espaços em branco extras

  if (userName) {
    // Exibe a mensagem de boas-vindas com o nome do usuário
    const welcomeMessage = document.getElementById('welcome-message');
    welcomeMessage.querySelector('p').textContent = `Welcome, ${userName}! I hope to surprise you with my skills.`;
    welcomeMessage.classList.remove('hidden');

    // Oculta o formulário
    const formContainer = document.querySelector('.form-container');
    formContainer.style.display = 'none';

    // Limpa o campo de entrada
    userNameInput.value = '';
  } else {
    alert('Por favor, insira seu nome.');
  }
});



  
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


