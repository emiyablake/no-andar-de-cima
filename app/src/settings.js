// settings.js — tela de configurações (overlay)
//
// Centraliza volume (efeitos/música) e idioma em um painel único,
// aberto por dois caminhos: menu principal → "Configurações" e
// pausa → "Configurações". "Voltar" retorna para a tela de origem.
// Volumes e idioma ficam salvos no navegador (localStorage).

const VOLUME_KEY = "nadc_volume";

// Volume global de áudio: sfx = efeitos (hover etc.), music = trilha sonora
const audioSettings = { sfx: 1, music: 1 };

const settings = {
  isOpen: false,
  returnTo: "menu", // "menu" | "pause"

  load() {
    this.restoreVolume();

    // Abertura pelos dois caminhos
    document.getElementById("btn-settings").addEventListener("click", () => this.open("menu"));
    document.getElementById("btn-pause-settings").addEventListener("click", () => this.open("pause"));
    document.getElementById("btn-settings-back").addEventListener("click", () => this.close());

    // Sliders de volume
    const volSfx = document.getElementById("vol-sfx");
    const volMusic = document.getElementById("vol-music");
    volSfx.value = Math.round(audioSettings.sfx * 100);
    volMusic.value = Math.round(audioSettings.music * 100);

    volSfx.addEventListener("input", () => {
      audioSettings.sfx = volSfx.value / 100;
      this.saveVolume();
    });
    volMusic.addEventListener("input", () => {
      audioSettings.music = volMusic.value / 100;
      music.applyVolume(); // aplica nas duas trilhas (ver music.js)
      this.saveVolume();
    });

    // Seleção de idioma
    document.querySelectorAll(".lang-option").forEach((btn) => {
      btn.addEventListener("click", () => lang.set(btn.dataset.lang));
    });

    // Som de hover nos botões (como no button.lua)
    document
      .querySelectorAll("#settings-screen .button")
      .forEach((btn) => btn.addEventListener("mouseenter", playHoverSound));

    document
        .querySelectorAll("#settings-screen .dropdown")
        .forEach((dpd) => dpd.addEventListener("mouseenter", playHoverSound))

    // ESC fecha as configurações (e devolve para a origem)
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) this.close();
    });
  },

  open(origin) {
    this.returnTo = origin;
    if (origin === "pause") pause.close(); // o pause espera embaixo
    this.isOpen = true;
    document.getElementById("settings-screen").classList.remove("hidden");
  },

  close() {
    this.isOpen = false;
    document.getElementById("settings-screen").classList.add("hidden");
    if (this.returnTo === "pause") pause.open(); // devolve ao pause
  },

  saveVolume() {
    try {
      localStorage.setItem(VOLUME_KEY, JSON.stringify(audioSettings));
    } catch (e) {
      /* armazenamento indisponível — segue sem salvar */
    }
  },

  restoreVolume() {
    try {
      const v = JSON.parse(localStorage.getItem(VOLUME_KEY));
      if (v) {
        if (typeof v.sfx === "number") audioSettings.sfx = v.sfx;
        if (typeof v.music === "number") audioSettings.music = v.music;
      }
    } catch (e) {
      /* sem volume salvo — usa o padrão (100%) */
    }
  },
};