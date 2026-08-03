// Máquina de estados: alterna entre as telas (menu / jogo / escape / saída),

const SAVE_KEY = "nadc_save"; // save local do navegador (localStorage)

function showScreen(name) {
  ["menu", "game", "missing", "quit"].forEach((s) => {
    document.getElementById(s + "-screen").classList.toggle("hidden", s !== name);
  });
}

function saveGame(sceneIndex) {
  try {
    localStorage.setItem(SAVE_KEY, String(sceneIndex));
  } catch (e) {
    /* armazenamento indisponível — segue sem salvar */
  }
}

function loadGame() {
  try {
    const v = localStorage.getItem(SAVE_KEY);
    return v === null ? null : Number(v);
  } catch (e) {
    return null;
  }
}

// love.load()
window.addEventListener("DOMContentLoaded", () => {
  lang.load();
  menu.load();
  gameLogic.load();
  pause.load(); 
  settings.load(); 
  music.load();

  // Botão "Voltar ao menu" das telas de escape e de saída
  document.querySelectorAll(".btn-menu").forEach((btn) => {
    btn.addEventListener("click", () => {
      menu.state = "menu";
      showScreen("menu");
      music.playMenu();
    });
    btn.addEventListener("mouseenter", playHoverSound);
  });

  showScreen("menu"); // estado inicial
});
