// GitHub
document.getElementById('github').addEventListener('click', function () {
    window.open('https://github.com/PedroAlbaniNunes', '_blank');
});

// LinkedIn
document.getElementById('linkedin').addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/pedro-henrique-albani-nunes-33a729270/', '_blank');
});

// Copiar E-mail
document.getElementById('copiar-email').addEventListener('click', function () {
    const email = 'albanipedroprofissional@gmail.com'; // Substitua pelo seu e-mail real

    navigator.clipboard.writeText(email).then(function () {
        const notificacao = document.getElementById('notificacao');
        notificacao.textContent = '✅ E-mail copiado!';
        notificacao.style.backgroundColor = '#28a745';
        notificacao.classList.add('show');

        setTimeout(() => {
            notificacao.classList.remove('show');
        }, 2500);
    }).catch(function (err) {
        console.error('Erro ao copiar:', err);
        const notificacao = document.getElementById('notificacao');
        notificacao.textContent = '❌ Falha ao copiar!';
        notificacao.style.backgroundColor = '#dc3545';
        notificacao.classList.add('show');

        setTimeout(() => {
            notificacao.classList.remove('show');
        }, 3000);
    });
});

const video = document.getElementById('bgVideo');
video.playbackRate = 0.75; // Ajuste esse valor: 0.75 = metade da velocidade


// Lista de frases que você quer mostrar
const frases = [
  '"A razão sempre existiu, mas nem sempre de uma forma razoável." Karl Marx',
  '"Tente mover o mundo - o primeiro passo será mover a si mesmo." Platão',
  '"Penso, logo existo." René Descartes',
  '"Torna-te aquilo que és." Friedrich Nietzsche',
  '"Se a educação sozinha não transforma a sociedade, sem ela tampouco a sociedade muda." Paulo Freire'
];

let index = 0;

// Função que simula o efeito de digitação
function typeWriter() {
  if (index < fraseAleatoria.length) {
    typedTextElement.textContent += fraseAleatoria.charAt(index);
    index++;
    setTimeout(typeWriter, 60); // Velocidade da digitação (ms)
  }
}

// Inicia o efeito
window.onload = () => {
  typeWriter();
};


// Texto da Bio
const bioText = "Meu nome é Pedro Henrique Albani Nunes, sou estudante de\nSistemas de Informação no Ifes Campus Serra, tenho 21 anos \ne ainda não tenho experiências profissionais. Sou um homem \nestudioso e esforçado, estou sempre atrás de aprender novos \nconhecimentos e me implementar como futuro profissional.";

let indexTitulo = 0;
let indexBio = 0;

const typedTextElement = document.getElementById("typed-text");
const typedBioElement = document.getElementById("typed-bio");

// Função de digitação do título
function typeWriterTitulo() {
  if (indexTitulo < fraseAleatoria.length) {
    typedTextElement.textContent += fraseAleatoria.charAt(indexTitulo);
    indexTitulo++;
    setTimeout(typeWriterTitulo, 80);
  }
}

// Função de digitação da Bio
function typeWriterBio() {
  if (indexBio < bioText.length) {
    typedBioElement.textContent += bioText.charAt(indexBio);
    indexBio++;
    setTimeout(typeWriterBio, 30); // Digitação mais rápida
  }
}

// Escolhe frase aleatória ao carregar
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

// Iniciar efeitos após a página carregar
window.onload = () => {
  typeWriterTitulo();
  setTimeout(typeWriterBio, 2000); // Começa a digitar a bio depois do título
};