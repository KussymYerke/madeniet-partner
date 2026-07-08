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
    "id": "vnutrennyaya-polosa",
    "titleRu": "Внутренняя полоса",
    "titleKz": "Ішкі бет",
    "titleEn": "Inner page",
    "price": "300 000 ₸",
    "zone": "inner-page",
    "state": "open",
    "detailRu": "Одна рекламная страница внутри журнала. Подходит для аккуратного имиджевого макета, визуального объявления или короткого бренд-сообщения.",
    "detailKz": "Журнал ішіндегі бір жарнамалық бет. Имидждік макетке, визуалды хабарламаға немесе қысқа бренд-коммуникацияға ыңғайлы.",
    "bulletsRu": [
      "1 полоса внутри номера",
      "можно добавить QR или промокод",
      "точечное и понятное размещение"
    ],
    "bulletsKz": [
      "нөмір ішіндегі 1 бет",
      "QR немесе промокод қосуға болады",
      "нысаналы және түсінікті орналастыру"
    ]
  },
  {
    "id": "soderzhanie-vyhodnye",
    "titleRu": "Содержание / Выходные данные",
    "titleKz": "Мазмұн / шығу деректері",
    "titleEn": "Contents / Credits",
    "price": "350 000 ₸",
    "zone": "contents",
    "state": "open",
    "detailRu": "Полоса рядом со страницей содержания или выходными данными. Это компактный формат в навигационной части журнала.",
    "detailKz": "Мазмұн немесе шығу деректері бетінің жанындағы орын. Журналдың навигациялық бөлігіндегі ықшам формат.",
    "bulletsRu": [
      "рядом с содержанием",
      "видно в начале читательского пути",
      "компактное бренд-присутствие"
    ],
    "bulletsKz": [
      "мазмұн жанында",
      "оқырман жолының басында көрінеді",
      "ықшам бренд-қатысу"
    ]
  },
  {
    "id": "pismo-redaktora",
    "titleRu": "Письмо редактора",
    "titleKz": "Редактор хаты",
    "titleEn": "Editor's letter",
    "price": "450 000 ₸",
    "zone": "editor-letter",
    "state": "open",
    "detailRu": "Полоса рядом с колонкой редактора. Хороша для бренда, которому важно звучать рядом с миссией и тоном выпуска.",
    "detailKz": "Редактор бағанының жанындағы бет. Брендтің миссия және шығарылым тонымен қатар көрінуіне ыңғайлы.",
    "bulletsRu": [
      "позиция рядом с editorial-вступлением",
      "подходит для ценностей и манифеста",
      "мягкое культурное присутствие"
    ],
    "bulletsKz": [
      "editorial кіріспе жанындағы позиция",
      "құндылықтар мен манифестке ыңғайлы",
      "жұмсақ мәдени қатысу"
    ]
  },
  {
    "id": "insert",
    "titleRu": "Инсерт",
    "titleKz": "Инсерт",
    "titleEn": "Insert",
    "price": "500 000 ₸",
    "zone": "insert",
    "state": "insert",
    "detailRu": "Вложенный или вклеенный лист: карточка, купон, мини-постер, промокод или другой физический элемент между страницами.",
    "detailKz": "Беттер арасына салынатын немесе жапсырылатын парақ: карточка, купон, мини-постер, промокод немесе басқа physical-элемент.",
    "bulletsRu": [
      "отдельный элемент между страницами",
      "можно вынуть, сохранить или использовать",
      "лучше всего для QR, промо, приглашения или collectible"
    ],
    "bulletsKz": [
      "беттер арасындағы жеке элемент",
      "алып, сақтап немесе қолдануға болады",
      "QR, промо, шақыру немесе collectible үшін жақсы"
    ]
  },
  {
    "id": "vnutrennij-razvorot",
    "titleRu": "Внутренний разворот",
    "titleKz": "Ішкі жайылма",
    "titleEn": "Inner spread",
    "price": "600 000 ₸",
    "zone": "inner-spread",
    "state": "open",
    "detailRu": "Разворот в середине блока. Подходит для полноценной истории бренда, фотосъёмки или редакционного материала.",
    "detailKz": "Блоктың ортасындағы жайылма. Толық бренд хикаясына, фотосессияға немесе редакциялық материалға ыңғайлы.",
    "bulletsRu": [
      "2 соседние страницы",
      "середина журнального блока",
      "хорошо для спецматериала"
    ],
    "bulletsKz": [
      "қатар тұрған 2 бет",
      "журнал блогының ортасы",
      "спецматериалға жақсы"
    ]
  },
  {
    "id": "premialnyj-razvorot",
    "titleRu": "Премиальный разворот",
    "titleKz": "Премиум жайылма",
    "titleEn": "Premium spread",
    "price": "800 000 ₸",
    "zone": "premium-spread",
    "state": "open",
    "detailRu": "Разворот в первой трети журнала. Дает крупную площадь, сильный визуальный эффект и премиальное ощущение без обложечной цены.",
    "detailKz": "Журналдың алғашқы үштен біріндегі жайылма. Үлкен аумақ, күшті визуалды әсер және премиум сезім береді.",
    "bulletsRu": [
      "2 страницы в первой трети номера",
      "много места для фото и текста",
      "подходит для fashion, auto, bank, tech"
    ],
    "bulletsKz": [
      "нөмірдің алғашқы үштен біріндегі 2 бет",
      "фото мен мәтінге көп орын",
      "fashion, auto, bank, tech үшін ыңғайлы"
    ]
  },
  {
    "id": "tretij-razvorot",
    "titleRu": "Третий разворот",
    "titleKz": "Үшінші жайылма",
    "titleEn": "Third spread",
    "price": "950 000 ₸",
    "zone": "third-spread",
    "state": "open",
    "detailRu": "Третий разворот после открытия номера. Сохраняет раннюю видимость, но стоит мягче первых позиций.",
    "detailKz": "Нөмір ашылғаннан кейінгі үшінші жайылма. Ерте көрінімді сақтайды, бірақ алғашқы позициялардан жұмсағырақ.",
    "bulletsRu": [
      "2 страницы",
      "ранняя часть журнала",
      "подходит для визуального материала"
    ],
    "bulletsKz": [
      "2 бет",
      "журналдың ерте бөлігі",
      "визуалды материалға ыңғайлы"
    ]
  },
  {
    "id": "vtoroj-razvorot",
    "titleRu": "Второй разворот",
    "titleKz": "Екінші жайылма",
    "titleEn": "Second spread",
    "price": "1 100 000 ₸",
    "zone": "second-spread",
    "state": "open",
    "detailRu": "Второй разворот в начале журнала. Хороший баланс заметности и стоимости для имиджевого размещения.",
    "detailKz": "Журналдың басындағы екінші жайылма. Имидждік орналастыру үшін көрінім мен бағаның жақсы балансы.",
    "bulletsRu": [
      "2 страницы в начале номера",
      "высокая заметность",
      "баланс стоимости и статуса"
    ],
    "bulletsKz": [
      "нөмір басындағы 2 бет",
      "жоғары көрінім",
      "баға мен статус балансы"
    ]
  },
  {
    "id": "tretya-oblozhka",
    "titleRu": "Третья обложка",
    "titleKz": "Үшінші мұқаба",
    "titleEn": "Inside back cover",
    "price": "1 400 000 ₸",
    "zone": "cover-inside-back",
    "state": "open",
    "detailRu": "Внутренняя сторона задней обложки. Премиальная позиция в финальной части журнала, которую видят перед закрытием номера.",
    "detailKz": "Артқы мұқабаның ішкі жағы. Журналды жабар алдында көрінетін финал бөліктегі премиум позиция.",
    "bulletsRu": [
      "внутренняя сторона задней обложки",
      "премиальный статус",
      "подходит для сильного финального контакта"
    ],
    "bulletsKz": [
      "артқы мұқабаның ішкі жағы",
      "премиум статус",
      "күшті финалдық контактқа ыңғайлы"
    ]
  },
  {
    "id": "pervyj-razvorot",
    "titleRu": "Первый разворот",
    "titleKz": "Бірінші жайылма",
    "titleEn": "First spread",
    "price": "1 500 000 ₸",
    "zone": "first-spread",
    "state": "open",
    "detailRu": "Первый крупный разворот после обложки. Работает как большой вход бренда в номер и даёт максимальный ранний контакт.",
    "detailKz": "Мұқабадан кейінгі алғашқы ірі жайылма. Брендтің нөмірге үлкен кіруі сияқты жұмыс істейді.",
    "bulletsRu": [
      "2 соседние страницы",
      "самый ранний разворот",
      "подходит для ключевого партнёра"
    ],
    "bulletsKz": [
      "қатар тұрған 2 бет",
      "ең ерте жайылма",
      "негізгі серіктеске ыңғайлы"
    ]
  },
  {
    "id": "chetvertaya-oblozhka",
    "titleRu": "Четвертая обложка",
    "titleKz": "Төртінші мұқаба",
    "titleEn": "Back cover",
    "price": "1 700 000 ₸",
    "zone": "cover-back",
    "state": "closed",
    "detailRu": "Задняя обложка журнала. Внешняя поверхность, которая видна до и после чтения, хорошо работает как самостоятельный бренд-постер.",
    "detailKz": "Журналдың артқы мұқабасы. Оқуға дейін де, кейін де көрінетін сыртқы бет, жеке бренд-постер ретінде жақсы жұмыс істейді.",
    "bulletsRu": [
      "наружная задняя обложка",
      "видна в стопках и на столах",
      "сильный standalone-формат"
    ],
    "bulletsKz": [
      "сыртқы артқы мұқаба",
      "үстелдерде және стопкада көрінеді",
      "күшті standalone-формат"
    ]
  },
  {
    "id": "gatefold-na-oblozhke",
    "titleRu": "Гейтфолд на обложке",
    "titleKz": "Мұқабадағы гейтфолд",
    "titleEn": "Cover gatefold",
    "price": "1 850 000 ₸",
    "zone": "gatefold",
    "state": "gatefold",
    "detailRu": "Раскладывающаяся створка обложки. Даёт вау-эффект, больше площади и ощущение специального выпуска.",
    "detailKz": "Мұқабада ашылатын қосымша створка. Вау-әсер, үлкен аумақ және арнайы шығарылым сезімін береді.",
    "bulletsRu": [
      "раскрывающаяся дополнительная поверхность",
      "самая эффектная механика",
      "подходит для запуска или большой кампании"
    ],
    "bulletsKz": [
      "ашылатын қосымша бет",
      "ең әсерлі механика",
      "запуск немесе үлкен кампанияға ыңғайлы"
    ]
  },
  {
    "id": "pervaya-oblozhka",
    "titleRu": "Первая обложка",
    "titleKz": "Бірінші мұқаба",
    "titleEn": "Front cover",
    "price": "2 000 000 ₸",
    "zone": "cover-front",
    "state": "closed",
    "detailRu": "Лицевая обложка журнала. Самая заметная и премиальная позиция: именно она формирует первое впечатление о выпуске.",
    "detailKz": "Журналдың алдыңғы мұқабасы. Ең көрінетін және премиум позиция: шығарылым туралы алғашқы әсерді қалыптастырады.",
    "bulletsRu": [
      "главная внешняя поверхность журнала",
      "максимальный первый контакт",
      "подходит для крупного имиджевого запуска"
    ],
    "bulletsKz": [
      "журналдың негізгі сыртқы беті",
      "ең жоғары алғашқы контакт",
      "ірі имидждік запускқа ыңғайлы"
    ]
  },
  {
    "id": "specproekt",
    "titleRu": "Спецпроект",
    "titleKz": "Спецжоба",
    "titleEn": "Special project",
    "price": "по запросу",
    "zone": "special",
    "state": "open",
    "detailRu": "Кастомный формат под задачу бренда: редакционный материал, съёмка, серия касаний, QR, промокод или нестандартная печатная механика.",
    "detailKz": "Бренд міндетіне арналған кастом формат: редакциялық материал, түсірілім, бірнеше жанасу, QR, промокод немесе стандарттан тыс print-механика.",
    "bulletsRu": [
      "идея и структура под бренд",
      "может включать print + digital",
      "стоимость считается после концепта"
    ],
    "bulletsKz": [
      "идея мен құрылым брендке сай",
      "print + digital қамтуы мүмкін",
      "баға концептіден кейін есептеледі"
    ]
  }
];

function attachHomeInteractions(root) {
  if (!root) return () => {};

  let lang = localStorage.getItem("madeniet-lang") || "ru";
  let selectedPriceId = "vnutrennyaya-polosa";
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
  const pricePreview = root.querySelector("[data-magazine-preview]");
  const priceTitle = root.querySelector("#price-selected-title");
  const priceValue = root.querySelector("#price-selected-value");
  const priceDetail = root.querySelector("#price-selected-detail");
  const priceListItems = root.querySelector("#price-selected-list");
  const priceBadge = root.querySelector("#price-selected-badge");

  function getPrice(id) {
    return PRICE_POSITIONS.find((item) => item.id === id) || PRICE_POSITIONS.find((item) => item.id === "vnutrennyaya-polosa") || PRICE_POSITIONS[0];
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
        <button class="price-row-v2${active}${preview}" type="button" data-price-id="${item.id}" data-zone="${item.zone}">
          <span class="price-row-v2__title">${localized.title}</span>
          <span class="price-row-v2__zone">${item.titleEn}</span>
          <b>${item.price}</b>
        </button>
      `;
    }).join("");
  }

  function updatePricePreview(id, mode = "selected") {
    const item = getPrice(id);
    if (!item || !pricePreview) return;
    const localized = getLocalized(item);
    previewPriceId = item.id;

    pricePreview.dataset.state = item.state;
    pricePreview.dataset.zone = item.zone;
    pricePreview.dataset.priceId = item.id;
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
