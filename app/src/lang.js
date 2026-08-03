// Uso no JS: lang.t("chave") ou lang.t("chave", { n: 14}) para {n}.
// Uso no HTML: <elemenbto data-i18n="chave"> - atualizado por lang.apply()

const LANG_KEY = "nadc_lang";
const LANG_DEFAULT = "pt-BR";


const lang = {
  current: LANG_DEFAULT,
  data: {},
  loaded: false, // true quando o i18n.json foi carregado com sucesso

  async load() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (saved) this.current = saved;
    } catch (e) {
      /* sem localStorage — usa o padrão */
    }

    try {
      const res = await fetch("i18n.json");
      if (!res.ok) throw new Error("HTTP " + res.status);
      this.data = await res.json();
      this.loaded = true;
      if (!this.data[this.current]) this.current = LANG_DEFAULT;
      this.apply();
    } catch (e) {
      console.warn(
        "[NADC] Não foi possível carregar o i18n.json (" + e.message + "). " +
        "A interface ficará em português. Para textos e troca de idioma, " +
        "rode o jogo via servidor local (Live Server, python -m http.server) " +
        "— via file:// o navegador bloqueia a leitura do JSON."
      );
    }
  },

  // Texto da chave no idioma atual; cai para o padrão se faltar.
  // Suporta variáveis: lang.t("missing.notFound", { n: 14 }) → "Cena 14..."
  t(key, vars) {
    const table = this.data[this.current] || {};
    const fallbackTable = this.data[LANG_DEFAULT] || {};
    let s = table[key] || fallbackTable[key] || key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        s = s.replace("{" + k + "}", vars[k]);
      });
    }
    return s;
  },

  set(code) {
    if (!this.data[code]) return;
    this.current = code;
    try {
      localStorage.setItem(LANG_KEY, code);
    } catch (e) {
      /* segue sem salvar */
    }
    this.apply();
  },

  // Reaplica os textos em todos os elementos com data-i18n.
  // Sem o JSON carregado, não toca em nada: o HTML já está em PT.
  apply() {
    if (!this.loaded) return;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = this.t(el.dataset.i18n);
    });
    // destaca o botão do idioma ativo na tela de configurações
    document.querySelectorAll(".lang-option").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === this.current);
    });
    document.documentElement.lang = this.current;
  },
};