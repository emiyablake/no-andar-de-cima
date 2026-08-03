// pause.js — menu de pausa in-game
//
// Abre pelo botão "❚❚ Pausa" ou pela tecla ESC. Permite continuar,
// reiniciar a história, voltar ao menu principal e ajustar volumes.
// Os volumes ficam salvos no navegador (localStorage).

const pause = {
  isOpen: false,

  load() {
    // Botões do menu de pausa
    document.getElementById("btn-pause").addEventListener("click", () => this.open());
    document.getElementById("btn-resume").addEventListener("click", () => this.close());

    document.getElementById("btn-restart").addEventListener("click", () => {
      this.close();
      gameLogic.loadScene(1); // recomeça na primeira cena
    });

    document.getElementById("btn-pause-menu").addEventListener("click", () => {
      this.close();
      menu.state = "menu";
      showScreen("menu");
      music.playMenu();
    });

    // Som de hover nos botões do pausa (como no button.lua)
    document
      .querySelectorAll("#pause-screen .button, #btn-pause")
      .forEach((btn) => btn.addEventListener("mouseenter", playHoverSound));

    // ESC abre/fecha o pausa (apenas durante o jogo)
    window.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      if (this.isOpen) {
        this.close();
      } else if (
        menu.state === "game" &&
        !document.getElementById("game-screen").classList.contains("hidden")
      ) {
        this.open();
      }
    });
  },

  open() {
    this.isOpen = true;
    document.getElementById("pause-screen").classList.remove("hidden");
  },

  close() {
    this.isOpen = false;
    document.getElementById("pause-screen").classList.add("hidden");
  },
};
