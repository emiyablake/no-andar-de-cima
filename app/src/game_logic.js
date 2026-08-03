// game_logic.js — equivalente ao game_logic.lua (+ button.lua)
//
// No navegador, os botões do Lua viram <button>: o hover e o "pressionado"
// são feitos em CSS (:hover / :active) com as mesmas cores do button.lua.
// O som de hover (assets/hover-sound.mp3) toca ao passar o mouse, se o
// arquivo existir — enquanto os assets não forem enviados, ele falha em
// silêncio.

const hoverSound = new Audio("assets/music/hover-sound.mp3");
hoverSound.preload = "auto";

function playHoverSound() {
  // cloneNode permite sons sobrepostos sem cortar o anterior
  const s = hoverSound.cloneNode();
  s.volume = audioSettings.sfx; // volume ajustável no menu de pausa
  s.play().catch(() => { /* asset ainda não enviado — ignora */ });
}

// Cria um botão de opção (equivalente ao construtor Button do button.lua)
function createButton(text, onClick) {
  const btn = document.createElement("button");
  btn.className = "button";
  btn.textContent = text;
  btn.addEventListener("mouseenter", playHoverSound);
  btn.addEventListener("click", onClick);
  return btn;
}

const gameLogic = {
  currentSceneIndex: 1, // Começa na primeira cena (game_logic.lua)

  load() {
    console.log("Game logic carregado.");
  },

  loadScene(sceneIndex) {
    console.log("Carregando cena: " + sceneIndex);

    const currentScene = story[sceneIndex];

    // Cena inexistente (ex.: 14–17, ainda não escritas) ou opção sem "next"
    // (finais provisórios das cenas 11 e 12) → tela "escape", como no TODO
    // do game_logic.lua.
    if (!currentScene) {
      console.warn("Erro: Cena não encontrada para o índice " + sceneIndex);
      this.drawMissingScene(sceneIndex);
      return;
    }

    this.currentSceneIndex = sceneIndex;
    saveGame(sceneIndex); // autosave a cada cena (ver main.js)

    // Texto principal e subtexto (love.graphics.printf)
    document.getElementById("story-text").textContent = currentScene.text;
    document.getElementById("story-subtext").textContent =
      currentScene.subtext || lang.t("game.whatToDo"); // subtexto padrão

    // Recria os botões de opção (buttons = {} no Lua)
    const optionsEl = document.getElementById("options");
    optionsEl.innerHTML = "";

    currentScene.options.forEach((option) => {
      const btn = createButton(option.text, () => {
        console.log("Botão pressionado: " + option.text);
        this.loadScene(option.next); // undefined → tela "escape"
      });
      optionsEl.appendChild(btn);
    });

    showScreen("game");
  },

  // Tela "escape" para cenas não criadas (TODO do game_logic.lua)
  drawMissingScene(sceneIndex) {
    const msg = document.getElementById("missing-text");
    if (sceneIndex === undefined || sceneIndex === null) {
      msg.textContent = lang.t("missing.unwritten");
    } else {
      msg.textContent = lang.t("missing.notFound", { n: sceneIndex});
    }
    showScreen("missing");
  },
};
