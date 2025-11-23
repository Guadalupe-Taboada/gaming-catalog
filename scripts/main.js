// Datos de videojuegos más extensos con enlaces
const videojuegos = [
  {
    id: 1,
    nombre: "Cyberpunk 2077",
    categoria: "accion",
    descripcion: "Un RPG de acción en un futuro distópico",
    rating: 4,
    imagen: "🔫",
    destacado: true,
    enlace: "https://store.steampowered.com/agecheck/app/1091500/",
  },
  {
    id: 2,
    nombre: "The Legend of Zelda",
    categoria: "aventura",
    descripcion: "Aventura épica en el reino de Hyrule",
    rating: 5,
    imagen: "🛡️",
    destacado: true,
    enlace: "https://zelda.nintendo.com/",
  },
  {
    id: 3,
    nombre: "FIFA 24",
    categoria: "deportes",
    descripcion: "El mejor fútbol virtual",
    rating: 4,
    imagen: "⚽",
    destacado: true,
    enlace:
      "https://play.google.com/store/apps/details?id=com.ea.gp.fifamobile&hl=es_PY",
  },
  {
    id: 4,
    nombre: "Resident Evil Village",
    categoria: "terror",
    descripcion: "Terror survival en primera persona",
    rating: 5,
    imagen: "🧟",
    destacado: true,
    enlace: "https://store.steampowered.com/app/1196590/Resident_Evil_Village/",
  },
  {
    id: 5,
    nombre: "Age of Empires IV",
    categoria: "estrategia",
    descripcion: "Construye tu imperio histórico",
    rating: 4,
    imagen: "🏰",
    destacado: false,
    enlace: "https://www.ageofempires.com/games/age-of-empires-iv/",
  },
  {
    id: 6,
    nombre: "Forza Horizon 5",
    categoria: "carreras",
    descripcion: "Carreras en mundo abierto",
    rating: 5,
    imagen: "🏎️",
    destacado: false,
    enlace: "https://forza-horizon-5.softonic.com/",
  },
  {
    id: 7,
    nombre: "Call of Duty: Warzone",
    categoria: "accion",
    descripcion: "Battle Royale intenso",
    rating: 4,
    imagen: "🎯",
    destacado: false,
    enlace: "https://www.callofduty.com/es/warzone",
  },
  {
    id: 8,
    nombre: "Minecraft",
    categoria: "aventura",
    descripcion: "Construye tu mundo infinito",
    rating: 5,
    imagen: "⛏️",
    destacado: true,
    enlace: "https://www.minecraft.net/es-es",
  },
];

// Función para crear tarjeta de juego CON ENLACE
function crearGameCard(juego) {
  const gameCard = document.createElement("div");
  gameCard.className = "game-card";
  gameCard.innerHTML = `
    <a href="${juego.enlace}" target="_blank" class="game-link">
      <div class="game-image">${juego.imagen}</div>
      <div class="game-info">
        <h3 class="game-title">${juego.nombre}</h3>
        <p class="game-description">${juego.descripcion}</p>
        <div class="game-meta">
          <span class="game-category">${
            juego.categoria.charAt(0).toUpperCase() + juego.categoria.slice(1)
          }</span>
          <span class="game-rating">${"★".repeat(juego.rating)}${"☆".repeat(
    5 - juego.rating
  )}</span>
        </div>
      </div>
    </a>
  `;
  return gameCard;
}

function mostrarJuegosDestacados() {
  const container = document.getElementById("featured-games");
  const destacados = videojuegos.filter((juego) => juego.destacado);

  container.innerHTML = "";
  destacados.forEach((juego) => {
    const gameCard = crearGameCard(juego);
    container.appendChild(gameCard);
  });
}

function mostrarTodosLosJuegos(juegos = videojuegos) {
  const container = document.getElementById("all-games-container");
  container.innerHTML = "";

  juegos.forEach((juego) => {
    const gameCard = crearGameCard(juego);
    container.appendChild(gameCard);
  });
}

function filtrarJuegos(categoria) {
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
  });
  event.target.classList.add("active");

  if (categoria === "all") {
    mostrarTodosLosJuegos();
  } else {
    const juegosFiltrados = videojuegos.filter(
      (juego) => juego.categoria === categoria
    );
    mostrarTodosLosJuegos(juegosFiltrados);
  }
}

function buscarJuegos(termino) {
  const juegosFiltrados = videojuegos.filter(
    (juego) =>
      juego.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      juego.descripcion.toLowerCase().includes(termino.toLowerCase())
  );
  mostrarTodosLosJuegos(juegosFiltrados);
}

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  mostrarJuegosDestacados();
  mostrarTodosLosJuegos();

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      filtrarJuegos(this.dataset.filter);
    });
  });

  const searchInput = document.querySelector(".search-input");
  searchInput.addEventListener("input", function () {
    buscarJuegos(this.value);
  });

  document.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", function () {
      const categoria = this.dataset.category;
      filtrarJuegos(categoria);
      document.getElementById("juegos").scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
