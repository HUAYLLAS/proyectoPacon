/*=================== Funcion modo oscuro/claro ===================*/
function toggleMode() {
  const body = document.body;
  const isDarkMode = body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode', !isDarkMode);

  // Cambiar estilos adicionales para la barra de navegación y elementos relacionados
  document.querySelector('.navbar')?.classList.toggle('dark-mode', isDarkMode);
  document.querySelector('.navbar-toggler')?.classList.toggle('dark-mode', isDarkMode);
  document.querySelectorAll('.dropdown-menu').forEach(el =>
    el.classList.toggle('dark-mode', isDarkMode)
  );

  // Cambiar iconos del botón de tema
  const themeToggleBtn = document.getElementById('themeToggle');
  themeToggleBtn.querySelector('.sun-and-moon .sun').style.display = isDarkMode ? 'none' : 'block';
  themeToggleBtn.querySelector('.sun-and-moon .moon-shape').style.display = isDarkMode ? 'block' : 'none';
  themeToggleBtn.querySelector('.sun-and-moon polygon').style.display = isDarkMode ? 'block' : 'none';

  // Guardar en localStorage
  const theme = isDarkMode ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}

window.onload = function () {
  // Recuperar el tema guardado y aplicarlo
  const savedTheme = localStorage.getItem('theme') || 'light';
  const body = document.body;
  const isDarkMode = savedTheme === 'dark';

  body.classList.add(savedTheme + '-mode');

  // Aplicar estilos adicionales para el menú y los iconos al cargar
  document.querySelector('.navbar')?.classList.toggle('dark-mode', isDarkMode);
  document.querySelector('.navbar-toggler')?.classList.toggle('dark-mode', isDarkMode);
  document.querySelectorAll('.dropdown-menu').forEach(el =>
    el.classList.toggle('dark-mode', isDarkMode)
  );

  const themeToggleBtn = document.getElementById('themeToggle');
  themeToggleBtn.querySelector('.sun-and-moon .sun').style.display = isDarkMode ? 'none' : 'block';
  themeToggleBtn.querySelector('.sun-and-moon .moon-shape').style.display = isDarkMode ? 'block' : 'none';
  themeToggleBtn.querySelector('.sun-and-moon polygon').style.display = isDarkMode ? 'block' : 'none';
};

/*=================== Funcion de texto dinámico ===================*/

const texts = ["PACON Facturación Electrónica", "PACON Gestión", "PACON Contabilidad", "PACON Planilla"];
let currentIndex = 0;
let currentText = "";
let charIndex = 0;
const typingSpeed = 100;
const pauseBetweenTexts = 1500;

function typeEffect() {
  const textElement = document.getElementById("dynamicText");
  const cursorElement = document.getElementById("cursor");

  // Mostrar el cursor al empezar a escribir
  cursorElement.style.visibility = 'visible';

  if (charIndex < texts[currentIndex].length) {
    currentText += texts[currentIndex][charIndex];
    textElement.textContent = currentText;
    charIndex++;

    setTimeout(typeEffect, typingSpeed);
  } else {
    // Pausar, luego borrar texto y pasar al siguiente
    setTimeout(() => {
      cursorElement.style.visibility = 'hidden'; // Ocultar cursor cuando se borra el texto
      currentText = "";
      charIndex = 0;
      currentIndex = (currentIndex + 1) % texts.length;
      textElement.textContent = currentText;
      typeEffect();
    }, pauseBetweenTexts);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

/*=================== Cuando se haga scroll se sombrea el menú ===================*/

window.addEventListener("scroll", function() {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    if (document.body.classList.contains("dark-mode")) {
      navbar.classList.add("navbar-shadow-dark");
      navbar.classList.remove("navbar-shadow-light");
    } else {
      navbar.classList.add("navbar-shadow-light");
      navbar.classList.remove("navbar-shadow-dark");
    }
  } else {
    navbar.classList.remove("navbar-shadow-dark", "navbar-shadow-light");
  }
});

/*=============================*/
// Actualizar la sombra al alternar entre modos
// document.getElementById("themeToggle").addEventListener("click", function() {
//   const navbar = document.querySelector(".navbar");
//   if (window.scrollY > 50) {
//     if (document.body.classList.contains("dark-mode")) {
//       navbar.classList.add("navbar-shadow-dark");
//       navbar.classList.remove("navbar-shadow-light");
//     } else {
//       navbar.classList.add("navbar-shadow-light");
//       navbar.classList.remove("navbar-shadow-dark");
//     }
//   }
// });