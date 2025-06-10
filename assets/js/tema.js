// tema.js

function aplicarTema() {
  const tema = localStorage.getItem('tema') || 'claro';
  const btnTema = document.getElementById('btnTema');
  if (!btnTema) return;

  if (tema === 'escuro') {
    document.body.classList.add('dark-mode');
    btnTema.textContent = '🌙'; // Sol para voltar ao claro
  } else {
    document.body.classList.remove('dark-mode');
    btnTema.textContent = '☀️ '; // Lua para ir ao escuro
  }
}

function alternarTema() {
  const estaEscuro = document.body.classList.contains('dark-mode');
  if (estaEscuro) {
    localStorage.setItem('tema', 'claro');
  } else {
    localStorage.setItem('tema', 'escuro');
  }
  aplicarTema();
}

document.addEventListener('DOMContentLoaded', () => {
  const btnTema = document.getElementById('btnTema');
  if (!btnTema) return;

  aplicarTema();

  btnTema.addEventListener('click', alternarTema);
});


const toggleButton = document.getElementById("toggle-theme");
const body = document.body;

if (localStorage.getItem("tema") === "escuro") {
  body.classList.add("dark-mode");
  toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  const modo = body.classList.contains("dark-mode") ? "escuro" : "claro";
  localStorage.setItem("tema", modo);

  toggleButton.textContent = modo === "escuro" ? "🌙" : "☀️";
});
