import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import PartnerPage from "./components/PartnerPage";
import { partnersHtml } from "./data/pages";
import { partnerPages } from "./data/partnerPages";
import { kz } from "./data/i18n";
import "./styles.css";

window.__MADI_KZ__ = kz;


const PRICE_POSITIONS = [
  {
    id: "gatefold-na-oblozhke",
    titleRu: "Гейтфолд на обложке",
    titleKz: "Мұқабадағы гейтфолд",
    price: "1,850,000 тг",
    image: "/assets/price-board/card1.png",
    detailRu: "Раскрывающаяся обложка с дополнительной створкой. Самый эффектный print-формат для запуска, громкой кампании или имиджевого вау-эффекта.",
    detailKz: "Қосымша ашылатын створкасы бар мұқаба. Іске қосу, ірі кампания немесе имидждік wow-әсер үшін ең әсерлі print-формат.",
    bulletsRu: [
      "расширенная площадь на обложке",
      "эффект раскрытия и вау-подача",
      "лучше всего для flagship-кампаний"
    ],
    bulletsKz: [
      "мұқабадағы кеңейтілген аумақ",
      "ашылу эффектісі және wow-подача",
      "flagship-кампаниялар үшін ең тиімді"
    ]
  },
  {
    id: "pervyj-razvorot",
    titleRu: "Первый разворот",
    titleKz: "Алғашқы разворот",
    price: "1,500,000 тг",
    image: "/assets/price-board/card2.png",
    detailRu: "Первый разворот сразу после обложки. Дает максимальный ранний контакт с читателем и много места для визуала, продукта и сообщения бренда.",
    detailKz: "Мұқабадан кейінгі алғашқы разворот. Оқырманмен ерте контакт береді және визуал, өнім мен бренд хабарламасына көп орын ашады.",
    bulletsRu: [
      "2 полные страницы рядом",
      "самая ранняя заметная позиция внутри номера",
      "подходит для ключевого партнера выпуска"
    ],
    bulletsKz: [
      "қатар тұрған 2 толық бет",
      "нөмір ішіндегі ең ерте көрінетін позиция",
      "шығарылымның негізгі серіктесіне ыңғайлы"
    ]
  },
  {
    id: "tretya-oblozhka",
    titleRu: "Третья обложка",
    titleKz: "Үшінші мұқаба",
    price: "1,400,000 тг",
    image: "/assets/price-board/card3.png",
    detailRu: "Внутренняя сторона задней обложки. Премиальная финальная позиция: читатель видит ее перед тем, как закрыть журнал.",
    detailKz: "Артқы мұқабаның ішкі жағы. Оқырман журналды жабар алдында көретін премиум финалдық позиция.",
    bulletsRu: [
      "внутренняя часть задней обложки",
      "премиальная финальная точка контакта",
      "хорошо работает для сильного завершающего месседжа"
    ],
    bulletsKz: [
      "артқы мұқабаның ішкі бөлігі",
      "контакттың премиум финалдық нүктесі",
      "күшті финалдық месседж үшін жақсы жұмыс істейді"
    ]
  },
  {
    id: "chetvertaya-oblozhka",
    titleRu: "Четвертая обложка",
    titleKz: "Төртінші мұқаба",
    price: "1,700,000 тг",
    image: "/assets/price-board/card4.png",
    detailRu: "Задняя внешняя обложка журнала. Это полноценная наружная поверхность, которая читается как самостоятельный бренд-постер.",
    detailKz: "Журналдың артқы сыртқы мұқабасы. Бұл жеке бренд-постер сияқты қабылданатын толық сыртқы бет.",
    bulletsRu: [
      "наружная задняя обложка",
      "видна как до, так и после чтения",
      "сильный standalone-формат"
    ],
    bulletsKz: [
      "сыртқы артқы мұқаба",
      "оқуға дейін де, кейін де көрінеді",
      "күшті standalone-формат"
    ]
  },
  {
    id: "insert",
    titleRu: "Инсерт",
    titleKz: "Қосымша парақ",
    price: "500,000 тг",
    image: "/assets/price-board/card5.png",
    detailRu: "Отдельный вложенный лист между страницами журнала: купон, invitation, меню, промо-карта, мини-постер или QR-носитель.",
    detailKz: "Журнал беттерінің арасына салынатын жеке парақ: купон, invitation, меню, промо-карта, мини-постер немесе QR-тасығыш.",
    bulletsRu: [
      "отдельный физический носитель внутри номера",
      "можно вынуть, сохранить или использовать",
      "идеально для промо, invite, QR или collectible"
    ],
    bulletsKz: [
      "нөмір ішіндегі жеке physical тасымалдағыш",
      "алып, сақтап немесе қолдануға болады",
      "promo, invite, QR немесе collectible үшін ыңғайлы"
    ]
  },
  {
    id: "inside-single-combo",
    titleRu: "Внутренняя полоса / Письмо редактора / Содержание",
    titleKz: "Ішкі бет / Редактор хаты / Мазмұн",
    price: "350,000 тг",
    image: "/assets/price-board/card6.png",
    detailRu: "Компактные одиночные позиции внутри номера: внутренняя полоса, страница рядом с письмом редактора или размещение возле содержания / выходных данных.",
    detailKz: "Нөмір ішіндегі ықшам бірлік позициялар: ішкі бет, редактор хаты жанындағы бет немесе мазмұн / шығу деректері маңындағы орналастыру.",
    bulletsRu: [
      "одностраничный формат",
      "подходит для аккуратного имиджевого присутствия",
      "варианты: внутренняя полоса, письмо редактора, содержание"
    ],
    bulletsKz: [
      "бір беттік формат",
      "ұқыпты имидждік қатысуға ыңғайлы",
      "нұсқалар: ішкі бет, редактор хаты, мазмұн"
    ]
  },
  {
    id: "second-third-spread",
    titleRu: "Третий разворот / Второй разворот",
    titleKz: "Үшінші разворот / Екінші разворот",
    price: "950,000 тг",
    image: "/assets/price-board/card7.png",
    detailRu: "Ранние развороты в начале выпуска. Отличный баланс заметности и стоимости для брендов, которым нужна сильная видимость без обложечной цены.",
    detailKz: "Шығарылым басындағы ерте развороттар. Мұқаба бағасынсыз-ақ жоғары көрінім қажет брендтер үшін жақсы баланс.",
    bulletsRu: [
      "2 страницы рядом",
      "ранняя часть читательского пути",
      "варианты: второй или третий разворот"
    ],
    bulletsKz: [
      "қатар тұрған 2 бет",
      "оқырман жолының ерте бөлігі",
      "нұсқалар: екінші немесе үшінші разворот"
    ]
  },
  {
    id: "inner-premium-spread",
    titleRu: "Внутренний разворот / Премиальный разворот",
    titleKz: "Ішкі разворот / Премиалды разворот",
    price: "600,000 тг",
    image: "/assets/price-board/card8.png",
    detailRu: "Развороты внутри блока номера: классический внутренний или более премиальный в первой трети журнала. Хорошо подходят для полноценной истории бренда.",
    detailKz: "Нөмір блогының ішіндегі развороттар: классикалық ішкі немесе журналдың алғашқы үштен біріндегі премиалды формат. Бренд тарихын толық ашуға ыңғайлы.",
    bulletsRu: [
      "2 полные страницы",
      "пространство для фото, текста и storytelling",
      "варианты: внутренний или премиальный разворот"
    ],
    bulletsKz: [
      "2 толық бет",
      "фото, мәтін және storytelling үшін орын",
      "нұсқалар: ішкі немесе премиалды разворот"
    ]
  },
  {
    id: "slozhnyj-razvorot-1",
    titleRu: "Сложный разворот 1",
    titleKz: "Күрделі разворот 1",
    price: "1,000,000 тг",
    image: "/assets/price-board/card9.png",
    detailRu: "Симметричный fold-out-разворот с раскрывающимися створками. Формат дает расширенную площадь для большой кампании, съёмки или визуальной истории.",
    detailKz: "Симметриялы fold-out-разворот, екі жаққа ашылатын створкалармен. Үлкен кампания, түсірілім немесе визуалды хикая үшін кең аумақ береді.",
    bulletsRu: [
      "многоступенчатое раскрытие",
      "расширенная площадь макета",
      "вариант раскрытия: сторона 1"
    ],
    bulletsKz: [
      "көп сатылы ашылу",
      "макетке арналған кеңейтілген аумақ",
      "ашылу нұсқасы: 1-жағы"
    ]
  },
  {
    id: "slozhnyj-razvorot-2",
    titleRu: "Сложный разворот 2",
    titleKz: "Күрделі разворот 2",
    price: "1,000,000 тг",
    image: "/assets/price-board/card10.png",
    detailRu: "Вторая фаза сложного симметричного fold-out-разворота. Позволяет показать продолжение большой визуальной композиции или вторую часть истории.",
    detailKz: "Күрделі симметриялы fold-out-развороттың екінші фазасы. Үлкен визуалды композицияның жалғасын немесе оқиғаның екінші бөлігін көрсетуге мүмкіндік береді.",
    bulletsRu: [
      "вторая конфигурация сложного разворота",
      "хорошо подходит для продолжения композиции",
      "вариант раскрытия: сторона 2"
    ],
    bulletsKz: [
      "күрделі развороттың екінші конфигурациясы",
      "композиция жалғасына өте ыңғайлы",
      "ашылу нұсқасы: 2-жағы"
    ]
  }
];


function attachHomeInteractions(root) {
  if (!root) return () => {};

  let lang = localStorage.getItem("madeniet-lang") || "ru";
  let selectedPriceId = "gatefold-na-oblozhke";
  let previewPriceId = selectedPriceId;
  const ruCache = new Map();
  const KZ = window.__MADI_KZ__ || {};
  const cleanups = [];

  const header = root.querySelector(".home-header");
  const burger = root.querySelector(".home-burger");
  const distributionButtons = Array.from(root.querySelectorAll("[data-distribution-btn]"));
  const distributionImage = root.querySelector("#distribution-image");
  const distributionTitle = root.querySelector("#distribution-title");
  const distributionText = root.querySelector("#distribution-text");

  const priceList = root.querySelector("[data-price-list]");
  const pricePreview = root.querySelector("[data-price-detail]");
  const priceSelectedImage = root.querySelector("#price-selected-image");
  const priceTitle = root.querySelector("#price-selected-title");
  const priceValue = root.querySelector("#price-selected-value");
  const priceDetail = root.querySelector("#price-selected-detail");
  const priceListItems = root.querySelector("#price-selected-list");
  const priceBadge = root.querySelector("#price-selected-badge");

  function getPrice(id) {
    return PRICE_POSITIONS.find((item) => item.id === id) || PRICE_POSITIONS.find((item) => item.id === "gatefold-na-oblozhke") || PRICE_POSITIONS[0];
  }

  function getLocalized(item) {
    return {
      title: lang === "kz" ? item.titleKz : item.titleRu,
      detail: lang === "kz" ? item.detailKz : item.detailRu,
      bullets: lang === "kz" ? item.bulletsKz : item.bulletsRu
    };
  }

  function renderPriceList() {
    if (!priceList) return;
    priceList.innerHTML = PRICE_POSITIONS.map((item) => {
      const localized = getLocalized(item);
      const active = item.id === selectedPriceId ? " is-active" : "";
      const preview = item.id === previewPriceId ? " is-preview" : "";
      return `
        <button class="price-photo-card${active}${preview}" type="button" data-price-id="${item.id}">
          <img src="${item.image}" alt="${localized.title}" loading="lazy" />
        </button>
      `;
    }).join("");
  }

  function updatePricePreview(id, mode = "selected") {
    const item = getPrice(id);
    if (!item) return;
    const localized = getLocalized(item);
    previewPriceId = item.id;

    if (pricePreview) pricePreview.dataset.priceId = item.id;
    if (priceSelectedImage) {
      priceSelectedImage.src = item.image;
      priceSelectedImage.alt = localized.title;
    }
    if (priceTitle) priceTitle.textContent = localized.title;
    if (priceValue) priceValue.textContent = item.price;
    if (priceDetail) priceDetail.textContent = localized.detail;
    if (priceBadge) priceBadge.textContent = mode === "hover" ? (lang === "kz" ? "қарап жатырсыз" : "предпросмотр") : (lang === "kz" ? "таңдалды" : "выбрано");
    if (priceListItems) {
      priceListItems.innerHTML = localized.bullets.map((bullet) => `<li>${bullet}</li>`).join("");
    }

    root.querySelectorAll("[data-price-id]").forEach((row) => {
      row.classList.toggle("is-active", row.dataset.priceId === selectedPriceId);
      row.classList.toggle("is-preview", row.dataset.priceId === previewPriceId);
    });
  }

  function initPriceInteractions() {
    renderPriceList();
    root.querySelectorAll("[data-price-id]").forEach((row) => {
      const onEnter = () => updatePricePreview(row.dataset.priceId, "hover");
      const onLeave = () => updatePricePreview(selectedPriceId, "selected");
      const onClick = () => {
        selectedPriceId = row.dataset.priceId;
        updatePricePreview(selectedPriceId, "selected");
      };
      row.addEventListener("mouseenter", onEnter);
      row.addEventListener("mouseleave", onLeave);
      row.addEventListener("focus", onEnter);
      row.addEventListener("blur", onLeave);
      row.addEventListener("click", onClick);
      cleanups.push(() => {
        row.removeEventListener("mouseenter", onEnter);
        row.removeEventListener("mouseleave", onLeave);
        row.removeEventListener("focus", onEnter);
        row.removeEventListener("blur", onLeave);
        row.removeEventListener("click", onClick);
      });
    });
    updatePricePreview(selectedPriceId, "selected");
  }

  function updateHeaderState() {
    if (!header) return;
    const compact = window.scrollY > 56;
    header.classList.toggle("is-compact", compact);
  }

  function setMenuOpen(open) {
    if (!header || !burger) return;
    header.classList.toggle("is-menu-open", open);
    burger.setAttribute("aria-expanded", String(open));
    burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }

  function toggleMenu() {
    if (!header) return;
    setMenuOpen(!header.classList.contains("is-menu-open"));
  }

  function updateDistribution(activeButton) {
    if (!activeButton || !distributionImage || !distributionTitle || !distributionText) return;
    distributionButtons.forEach((button) => button.classList.toggle("is-active", button === activeButton));
    distributionImage.src = activeButton.dataset.image;
    distributionTitle.textContent = lang === "kz" ? activeButton.dataset.kzTitle : activeButton.dataset.ruTitle;
    distributionText.textContent = lang === "kz" ? activeButton.dataset.kzText : activeButton.dataset.ruText;
  }

  function setLang(next) {
    lang = next;
    localStorage.setItem("madeniet-lang", lang);
    document.documentElement.lang = lang === "kz" ? "kk" : "ru";

    root.querySelectorAll("[data-lang-btn]").forEach((btn) => {
      const active = btn.getAttribute("data-lang-btn") === lang;
      btn.classList.toggle("is-active", active);
    });

    root.querySelectorAll("[data-i18n]").forEach((el, index) => {
      const key = el.getAttribute("data-i18n");
      if (!ruCache.has(index)) ruCache.set(index, el.innerHTML);
      if (lang === "kz" && KZ[key] != null) el.innerHTML = KZ[key];
      if (lang === "ru") el.innerHTML = ruCache.get(index);
    });

    updateDistribution(root.querySelector("[data-distribution-btn].is-active") || distributionButtons[0]);
    renderPriceList();
    initPriceInteractions();
  }

  root.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    const onClick = () => {
      setLang(btn.getAttribute("data-lang-btn"));
      setMenuOpen(false);
    };
    btn.addEventListener("click", onClick);
    cleanups.push(() => btn.removeEventListener("click", onClick));
  });

  if (burger) {
    const onBurgerClick = () => toggleMenu();
    burger.addEventListener("click", onBurgerClick);
    cleanups.push(() => burger.removeEventListener("click", onBurgerClick));
  }

  root.querySelectorAll('a[href^="#"]').forEach((a) => {
    const onClick = (e) => {
      const id = a.getAttribute("href");
      const target = root.querySelector(id);
      if (!target) return;
      e.preventDefault();
      setMenuOpen(false);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    a.addEventListener("click", onClick);
    cleanups.push(() => a.removeEventListener("click", onClick));
  });

  distributionButtons.forEach((button) => {
    const onClick = () => updateDistribution(button);
    button.addEventListener("click", onClick);
    cleanups.push(() => button.removeEventListener("click", onClick));
  });

  const onScroll = () => updateHeaderState();
  const onResize = () => updateHeaderState();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  cleanups.push(() => window.removeEventListener("scroll", onScroll));
  cleanups.push(() => window.removeEventListener("resize", onResize));

  setLang(lang);
  updateHeaderState();
  updateDistribution(root.querySelector("[data-distribution-btn].is-active") || distributionButtons[0]);
  initPriceInteractions();

  return () => {
    cleanups.forEach((cleanup) => cleanup());
  };
}

function HomePage({ html }) {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    const root = document.getElementById("page-root");
    const cleanup = attachHomeInteractions(root);
    return () => cleanup && cleanup();
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
