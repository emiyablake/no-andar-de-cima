// menu.js — equivalente ao menu.lua
// Tela inicial: fundo, prédio, título e os botões Iniciar / Carregar / Sair.

const menu = {
  state: "menu", // estado inicial (menu.lua)

  load() {
    console.log("Carregado");

    // As imagens escondem-se sozinhas se o arquivo não existir —
    // adicionar novos assets não exige mudança no código.
    document.querySelectorAll("#menu-bg, #menu-capa").forEach((img) => {
      img.addEventListener("error", () => img.classList.add("hidden"));
    });

    // startButton — "Iniciar jogo"
    document.getElementById("btn-start").addEventListener("click", () => {
      this.state = "game";
      music.playGame();
      gameLogic.loadScene(1);
    });

    // loadGame — "Carregar Jogo"
    // (o jogo salva automaticamente a cada cena, ver main.js).
    document.getElementById("btn-load").addEventListener("click", () => {
      const saved = loadGame();
      if (saved !== null) {
        this.state = "game";
        music.playGame();
        gameLogic.loadScene(saved);
      } else {
        console.log("Nenhum jogo salvo encontrado.");
        alert(lang.t("alert.noSave"));
      }
    });

    // exitButton — "Sair do jogo"
    // O navegador não permite fechar a aba por script (love.event.quit),
    // então mostramos uma tela de despedida.
    document.getElementById("btn-exit").addEventListener("click", () => {
      showScreen("quit");
    });

    // Sons de hover nos botões do menu (hover-sound.mp3, como no button.lua)
    document
      .querySelectorAll("#menu-screen .button")
      .forEach((btn) => btn.addEventListener("mouseenter", playHoverSound));
  },
};
