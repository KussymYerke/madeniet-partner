import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import PartnerPage from "./components/PartnerPage";
import { partnersHtml } from "./data/pages";
import { partnerPages } from "./data/partnerPages";
import { kz } from "./data/i18n";
import "./styles.css";

window.__MADI_KZ__ = kz;

function polishPartnersPage(root) {
  root.querySelectorAll("[data-stat]").forEach((el) => {
    if (!el.dataset.homeCountReady) {
      const kind = (el.getAttribute("data-stat") || "0|%").split("|")[1];
      el.textContent = fmtFactory(localStorage.getItem("madeniet-lang") || "ru")(0, kind);
      el.dataset.homeCountReady = "true";
    }
  });

  const formatTitle = root.querySelector('[data-i18n="fmtTitle"]');
  const formatSection = formatTitle?.closest("section");
  if (formatSection && formatSection.dataset.polished !== "true") {
    const v1 = formatSection.querySelector('[data-i18n="fmtV1"]');
    const v2 = formatSection.querySelector('[data-i18n="fmtV2"]');
    const v3 = formatSection.querySelector('[data-i18n="fmtV3"]');
    const para = formatSection.querySelector('[data-i18n="fmtPara"]');
    if (v1) {
      v1.textContent = "1 000 экз.";
      v1.style.color = "#111";
    }
    if (v2) v2.textContent = "сентябрь 2026";
    if (v3) {
      v3.textContent = "Alem Comedy Fest, кофейни, концепт-сторы, партнёрские события";
      v3.style.color = "#111";
    }
    if (para) {
      para.innerHTML =
        "Печатный номер работает как объект: его берут в руки, листают, оставляют на столах и передают дальше. Поэтому партнёрство в первом выпуске — это не просто рекламный контакт, а присутствие внутри культурного артефакта.";
    }
    formatSection.insertAdjacentHTML(
      "beforeend",
      `
      <div class="format-extra-grid">
        <article>
          <span>01</span>
          <h3>Печатный носитель</h3>
          <p>Развороты, вкладыши, постеры и аккуратная интеграция в визуальный язык номера.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Дистрибуция</h3>
          <p>Журнал появляется не только онлайн: он попадает в руки аудитории на событиях и городских точках.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Digital support</h3>
          <p>Материалы номера усиливаются в соцсетях Madeniet, где уже есть органический охват.</p>
        </article>
      </div>
    `,
    );
    formatSection.dataset.polished = "true";
  }

  const looksTitle = root.querySelector('[data-i18n="looksTitle"]');
  const looksSection = looksTitle?.closest("section");
  if (looksSection && looksSection.dataset.polished !== "true") {
    const oldGrid = Array.from(looksSection.children).find(
      (el) =>
        el instanceof HTMLElement &&
        el.querySelectorAll('[style*="aspect-ratio:4/5"]').length >= 3,
    );
    const note = looksSection.querySelector('[data-i18n="looksNote"]');
    if (oldGrid) {
      oldGrid.outerHTML = `
        <div class="looks-showcase-grid">
          <article>
            <div class="looks-preview looks-preview--cover">
              <div class="looks-preview__top">Madeniet №1</div>
              <div class="looks-preview__title">cover</div>
              <div class="looks-preview__line"></div>
            </div>
            <h3>Обложка и первое касание</h3>
            <p>Партнёр может быть представлен в визуальной системе выпуска без ощущения баннерной рекламы.</p>
          </article>
          <article>
            <div class="looks-preview looks-preview--spread">
              <div></div><div></div>
            </div>
            <h3>Редакционный разворот</h3>
            <p>Фотосъёмка, интервью, маршруты или спецпроект — формат выглядит как часть журнала.</p>
          </article>
          <article>
            <div class="looks-preview looks-preview--insert">
              <div class="looks-preview__poster">poster / insert</div>
            </div>
            <h3>Вложение или постер</h3>
            <p>Физический элемент внутри номера: открытка, постер, промокод, стикеры или арт-вкладыш.</p>
          </article>
        </div>
      `;
    }
    if (note) {
      note.innerHTML =
        "Финальные макеты будут подготовлены после утверждения партнёров, фотосъёмок и общей визуальной концепции выпуска.";
      note.style.maxWidth = "760px";
      note.style.lineHeight = "1.5";
    }
    looksSection.dataset.polished = "true";
  }

  root.querySelectorAll('[data-i18n="dlBtn"]').forEach((link) => {
    link.textContent = "MEDIA KIT · PDF";
    link.setAttribute("href", "/files/Madeniet_Media_Kit.pdf");
    link.setAttribute("download", "Madeniet_Media_Kit.pdf");
  });
}

function countUp(el, lang) {
  if (el.dataset.counted === "true") return;
  el.dataset.counted = "true";
  const [rawVal, kind] = (el.getAttribute("data-stat") || "0|%").split("|");
  const target = parseFloat(rawVal);
  const duration = 1500;
  const start = performance.now();
  const fmt = fmtFactory(lang);
  function tick(now) {
    const progress = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = fmt(target * eased, kind);
    if (progress < 1) requestAnimationFrame(tick);
    else el.textContent = fmt(target, kind);
  }
  requestAnimationFrame(tick);
}

function fmtFactory(lang) {
  const thousands = lang === "kz" ? " мың" : " тыс.";
  return (v, kind) =>
    kind === "m"
      ? v.toFixed(2).replace(".", ",") + " млн"
      : kind === "%"
        ? Math.round(v) + "%"
        : Math.round(v) + thousands;
}

function attachHomeInteractions(root) {
  let lang = localStorage.getItem("madeniet-lang") || "ru";
  const ruCache = new Map();
  const KZ = window.__MADI_KZ__ || {};

  function setLang(next) {
    lang = next;
    localStorage.setItem("madeniet-lang", lang);
    root.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      btn.style.color = btn.getAttribute("data-lang-btn") === lang ? "#111" : "#888";
    });
    root.querySelectorAll("[data-i18n]").forEach((el, i) => {
      const key = el.getAttribute("data-i18n");
      if (!ruCache.has(i)) ruCache.set(i, el.innerHTML);
      if (lang === "kz" && KZ[key] != null) el.innerHTML = KZ[key];
      if (lang === "ru") el.innerHTML = ruCache.get(i);
    });
    root.querySelectorAll("[data-stat]").forEach((el) => {
      if (el.dataset.counted !== "true") {
        el.textContent = fmtFactory(lang)(0, (el.getAttribute("data-stat") || "0|%").split("|")[1]);
      } else {
        const [val, kind] = (el.getAttribute("data-stat") || "0|%").split("|");
        el.textContent = fmtFactory(lang)(parseFloat(val), kind);
      }
    });
    document.documentElement.lang = lang === "kz" ? "kk" : "ru";
  }

  polishPartnersPage(root);

  root.querySelectorAll("[data-lang-btn]").forEach((btn) =>
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang-btn"))),
  );
  setLang(lang);

  const modal = root.querySelector("[data-welcome]");
  if (modal) {
    document.body.style.overflow = "hidden";
    const close = () => {
      modal.style.opacity = "0";
      document.body.style.overflow = "";
      setTimeout(() => (modal.style.display = "none"), 320);
    };
    modal.addEventListener("click", (e) => {
      if (e.target === modal || e.target.closest?.("[data-welcome-close]")) close();
    });
  }

  root.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      const target = root.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    }),
  );

  const revealItems = root.querySelectorAll('section:not(.no-reveal), header, footer, [style*="aspect-ratio"], [data-stat]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          if (entry.target.hasAttribute("data-stat")) countUp(entry.target, lang);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
  );
  revealItems.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}

function HomePage({ html }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    const root = document.getElementById("page-root");
    attachHomeInteractions(root);
  }, [html]);

  return <main id="page-root" dangerouslySetInnerHTML={{ __html: html }} />;
}

function getPartnerFromPath(pathname) {
  const cleanPath = pathname.replace(/\/$/, "");
  const slug = cleanPath.split("/").filter(Boolean).at(-1);
  return partnerPages[slug];
}

function App() {
  const partner = getPartnerFromPath(window.location.pathname);
  if (partner) return <PartnerPage page={partner} />;
  return <HomePage html={partnersHtml} />;
}

createRoot(document.getElementById("root")).render(<App />);
