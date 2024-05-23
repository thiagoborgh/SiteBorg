// Menu responsivo (inspirado no site da Bevi)
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');

  // Animação das barras do menu (opcional)
  menuToggle.classList.toggle('active');
});

// Animação suave de rolagem (inspirado no site da Bevi)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Efeito de destaque nos serviços ao passar o mouse (hover)
// ... (mesmo código do exemplo anterior) ...

// Outras animações e interações (opcional)
// ... (adicione mais efeitos conforme sua criatividade)

const form = document.querySelector('#contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Impede o envio padrão do formulário

  const formData = new FormData(form);

  fetch('/enviar_mensagem', { // Substitua '/enviar_mensagem' pelo endpoint correto
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      alert('Mensagem enviada com sucesso!');
      form.reset(); // Limpa o formulário
    } else {
      alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
  })
  .catch(error => {
    console.error('Erro:', error);
    alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
  });
});
