// Função para esperar determinado tempo
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  // Função para mostrar o prompt após 5 segundos
  async function showPromptAfterDelay() {
    await wait(1000); // Aguarda 10 segundos
  
    const user1 = prompt("Olá, me chamo Mateus, qual é o seu nome? ");
  
    // Verifica se o usuário inseriu um nome
    if (user1) {
      // Suponho que a função sayTime esteja definida em outro arquivo (userTime.js)
      // Substitua o seguinte bloco pela sua implementação atual da função sayTime
      function sayTime(userName) {
        const notificationDisplayed = localStorage.getItem('notificationDisplayed');
  
        if (!notificationDisplayed) {
          const not = document.querySelector('.notification-container');
          not.style.display = "block";
  
          const time = document.querySelector('.time');
          time.textContent = "Welcome, " + userName + ", I hope to surprise you with my portfolio";
          time.style.display = "block";
  
          const closeButton = document.getElementById('btnTimeNone');
          closeButton.style.display = "block";
  
          closeButton.addEventListener('click', () => {
            time.style.display = "none";
            closeButton.style.display = "none";
            localStorage.setItem('notificationDisplayed', 'true');
          });
        }
      }
  
      sayTime(user1);
    }
  }
  
  // Chama a função para mostrar o prompt
  showPromptAfterDelay();
  
  // Lógica do header responsivo
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
  const elementsToAnimate = Array.from(document.querySelectorAll('.animate-slide-in')); // Converte NodeList para Array
  
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