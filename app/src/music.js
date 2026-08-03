// music.js — trilhas sonoras do jogo
// menu-music → tela inicial | game-music → durante a narrativa
// A trilha do menu começa no primeiro clique (regra de autoplay).

const music = {
  menuEl: null,
  gameEl: null,

  load() {
    this.menuEl = document.getElementById("menu-music");
    this.gameEl = document.getElementById("game-music");
    this.applyVolume();

    [this.menuEl, this.gameEl].forEach((el) => {
      el.addEventListener("error", () => {
        console.warn(
          "[NADC] Trilha não carregou: " + el.currentSrc +
          " — verifique se o arquivo existe nesse caminho, se o nome bate" +
          " exatamente (maiúsculas/minúsculas contam) e se o formato é MP3."
        );
      });
      this.setupSectionLoop(el);
    });

    const unlock = () => {
      this.playMenu();
      document.removeEventListener("pointerdown", unlock);
    };
    document.addEventListener("pointerdown", unlock);
  },

   // Loop de trecho específico: intro uma vez + repetição de start→end
  setupSectionLoop(el) {
    const start = parseFloat(el.dataset.loopStart) || 0;
    const end = parseFloat(el.dataset.loopEnd) || 0;

    if (start === 0 && end === 0) return; // sem trecho → loop nativo da faixa inteira

    el.loop = false; // quem controla a repetição agora é o watcher

    // Watcher: a cada frame, se passou do fim do trecho, volta ao início
    const watch = () => {
      if (!el.paused) {
        const limit = end > 0 && (!el.duration || end < el.duration) ? end : Infinity;
        if (el.currentTime >= limit) el.currentTime = start;
        requestAnimationFrame(watch);
      } else {
        el._watching = false;
      }
    };

    el.addEventListener("play", () => {
      if (!el._watching) {
        el._watching = true;
        requestAnimationFrame(watch);
      }
    });

    // Caso o fim do trecho seja o próprio fim da faixa (só start definido,
    // ou end >= duração): o evento "ended" faz o salto para o start.
    el.addEventListener("ended", () => {
      el.currentTime = start;
      el.play().catch(() => { /* gesto do usuário necessário */ });
    });
  },

  applyVolume() {
    if (this.menuEl) this.menuEl.volume = audioSettings.music;
    if (this.gameEl) this.gameEl.volume = audioSettings.music;
  },

  play(el, name) {
    el.play().then(
      () => console.log("[NADC] Trilha tocando (" + name + "): " + el.currentSrc),
      (err) => console.warn("[NADC] Falha ao tocar a trilha (" + name + "): " + err)
    );
  },

  stopOthers(except) {
    [this.menuEl, this.gameEl].forEach((el) => {
      if (el !== except) {
        el.pause();
        el.currentTime = 0;
      }
    });
  },

  playMenu() {
    this.stopOthers(this.menuEl);
    this.play(this.menuEl, "menu");
  },

  playGame() {
    this.stopOthers(this.gameEl);
    this.play(this.gameEl, "jogo");
  },
};