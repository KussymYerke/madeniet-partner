import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import PartnerPage from "./components/PartnerPage";
import { partnersHtml } from "./data/pages";
import { partnerPages } from "./data/partnerPages";
import { kz } from "./data/i18n";
import "./styles.css";

window.__MADI_KZ__ = kz;

function attachHomeInteractions(root) {
  if (!root) return () => {};

  let lang = localStorage.getItem("madeniet-lang") || "ru";
  const ruCache = new Map();
  const KZ = window.__MADI_KZ__ || {};
  const cleanups = [];

  const header = root.querySelector(".home-header");
  const burger = root.querySelector(".home-burger");
  const homeNav = root.querySelector(".home-nav");
  const distributionButtons = Array.from(root.querySelectorAll("[data-distribution-btn]"));
  const distributionImage = root.querySelector("#distribution-image");
  const distributionTitle = root.querySelector("#distribution-title");
  const distributionText = root.querySelector("#distribution-text");

  const priceRows = Array.from(root.querySelectorAll("[data-price-row]"));
  const priceMagazine = root.querySelector("[data-price-magazine]");
  const priceSelectedTitle = root.querySelector("#price-selected-title");
  const priceSelectedValue = root.querySelector("#price-selected-value");
  const priceSelectedDetail = root.querySelector("#price-selected-detail");
  const priceSelectedList = root.querySelector("#price-selected-list");
  const pricePlacementLabel = root.querySelector("#price-placement-label");

  const PRICE_DETAILS = {
    inner: {
      ru: {
        title: "Внутренняя полоса",
        detail: "Одна рекламная страница внутри журнала. Подходит для аккуратного имиджевого макета, визуального объявления или короткого бренд-сообщения.",
        items: ["1 полоса внутри номера", "адаптация макета под стиль журнала", "подходит для QR, промокода или имиджевого сообщения"]
      },
      kz: {
        title: "Ішкі бет",
        detail: "Журнал ішіндегі бір жарнамалық бет. Имидждік макетке, визуалды хабарламаға немесе қысқа бренд-коммуникацияға ыңғайлы.",
        items: ["нөмір ішіндегі 1 бет", "макетті журнал стиліне бейімдеу", "QR, промокод немесе имидждік хабарламаға ыңғайлы"]
      }
    },
    contents: {
      ru: {
        title: "Содержание / выходные данные",
        detail: "Позиция рядом с навигационной частью журнала. Хорошо работает для короткого бренд-присутствия, которое читатель видит в начале номера.",
        items: ["размещение рядом с содержанием или выходными данными", "высокая вероятность первого контакта", "компактный формат без перегруза"]
      },
      kz: {
        title: "Мазмұн / шығу деректері",
        detail: "Журналдың навигациялық бөлігінің жанындағы позиция. Оқырман нөмірдің басында көретін қысқа бренд-қатысуға ыңғайлы.",
        items: ["мазмұн немесе шығу деректері жанында", "алғашқы контакт ықтималдығы жоғары", "ықшам формат"]
      }
    },
    editor: {
      ru: {
        title: "Письмо редактора",
        detail: "Размещение рядом с редакционным вступлением. Подходит бренду, которому важно выглядеть частью общего культурного разговора.",
        items: ["контекст рядом с editorial-вступлением", "спокойное имиджевое присутствие", "хорошо для миссии, манифеста или ценностей"]
      },
      kz: {
        title: "Редактор хаты",
        detail: "Редакциялық кіріспе жанындағы орналастыру. Брендтің мәдени әңгімеге табиғи түрде кіруіне ыңғайлы.",
        items: ["editorial кіріспе жанындағы контекст", "имидждік жұмсақ қатысу", "миссия немесе құндылықтар үшін жақсы"]
      }
    },
    insert: {
      ru: {
        title: "Инсерт",
        detail: "Отдельный физический лист, карточка, купон, мини-постер или промо-объект, вложенный внутрь журнала. Его можно вынуть, сохранить, подарить или использовать.",
        items: ["физический объект внутри журнала", "можно добавить QR, промокод или карту", "лучше всего для промо, приглашения, постера или collectible-механики"]
      },
      kz: {
        title: "Инсерт",
        detail: "Журнал ішіне салынатын жеке парақ, карточка, купон, мини-постер немесе промо-объект. Оны алып, сақтап, сыйлап немесе қолдануға болады.",
        items: ["журнал ішіндегі физикалық объект", "QR, промокод немесе карта қосуға болады", "промо, шақыру, постер немесе collectible-механикаға ыңғайлы"]
      }
    },
    spread: {
      ru: {
        title: "Внутренний разворот",
        detail: "Две соседние страницы, которые дают больше воздуха для фотографии, текста, истории бренда и визуальной композиции.",
        items: ["2 страницы рядом", "подходит для фотосъёмки или спецматериала", "сильнее обычной полосы по визуальному эффекту"]
      },
      kz: {
        title: "Ішкі жайылма",
        detail: "Екі қатар бет: фотоға, мәтінге, бренд тарихына және визуалды композицияға көбірек ауа береді.",
        items: ["қатар тұрған 2 бет", "фотосессия немесе спецматериалға ыңғайлы", "бір бетке қарағанда визуалды әсері күшті"]
      }
    },
    "premium-spread": {
      ru: {
        title: "Премиальный разворот",
        detail: "Акцентный разворот с лучшей позицией внутри номера. Хорош для брендов, которым нужна крупная и дорогая подача.",
        items: ["2 страницы в заметной части номера", "приоритетная визуальная подача", "подходит для fashion, auto, lifestyle, tech и банков"]
      },
      kz: {
        title: "Премиум жайылма",
        detail: "Нөмір ішіндегі ең акцентті жайылмалардың бірі. Брендті ірі және қымбат көрсеткісі келетіндерге лайық.",
        items: ["нөмірдің көрінетін бөлігіндегі 2 бет", "басым визуалды подача", "fashion, auto, lifestyle, tech және банктерге ыңғайлы"]
      }
    },
    "third-spread": {
      ru: {
        title: "Третий разворот",
        detail: "Один из ранних разворотов после открытия номера. Дает хорошую видимость без стоимости первых позиций.",
        items: ["2 страницы", "ранняя часть журнала", "баланс стоимости и заметности"]
      },
      kz: {
        title: "Үшінші жайылма",
        detail: "Нөмірдің ашылуынан кейінгі ерте жайылмалардың бірі. Алғашқы позиция бағасынсыз жақсы көрінім береді.",
        items: ["2 бет", "журналдың ерте бөлігі", "баға мен көрінім балансы"]
      }
    },
    "second-spread": {
      ru: {
        title: "Второй разворот",
        detail: "Очень заметный ранний разворот. Подходит для бренда, который хочет быть рядом с началом читательского пути.",
        items: ["2 страницы в начале номера", "высокая заметность", "подходит для имиджевого запуска"]
      },
      kz: {
        title: "Екінші жайылма",
        detail: "Өте көрінетін ерте жайылма. Оқырман жолының басында болғысы келетін брендке ыңғайлы.",
        items: ["нөмір басындағы 2 бет", "жоғары көрінім", "имидждік запускқа ыңғайлы"]
      }
    },
    "first-spread": {
      ru: {
        title: "Первый разворот",
        detail: "Одна из самых сильных позиций после открытия журнала. Работает как большой вход бренда в номер.",
        items: ["первый крупный разворот", "максимальный ранний контакт", "подходит для ключевого партнёра"]
      },
      kz: {
        title: "Бірінші жайылма",
        detail: "Журнал ашылғаннан кейінгі ең күшті позициялардың бірі. Брендтің нөмірге үлкен кіруі сияқты жұмыс істейді.",
        items: ["алғашқы ірі жайылма", "ең ерте күшті контакт", "негізгі серіктеске ыңғайлы"]
      }
    },
    cover3: {
      ru: {
        title: "Третья обложка",
        detail: "Внутренняя сторона задней обложки. Премиальная позиция, которую видят при закрытии журнала.",
        items: ["внутренняя сторона обложки", "премиальный статус", "хорошо для имиджевой рекламы"]
      },
      kz: {
        title: "Үшінші мұқаба",
        detail: "Артқы мұқабаның ішкі жағы. Журнал жабылғанда көрінетін премиум позиция.",
        items: ["мұқабаның ішкі жағы", "премиум статус", "имидждік жарнамаға ыңғайлы"]
      }
    },
    cover4: {
      ru: {
        title: "Четвёртая обложка",
        detail: "Задняя обложка журнала. Самая внешняя и заметная поверхность после первой обложки.",
        items: ["наружная задняя обложка", "видна до и после чтения", "сильный standalone-формат"]
      },
      kz: {
        title: "Төртінші мұқаба",
        detail: "Журналдың артқы мұқабасы. Бірінші мұқабадан кейінгі ең сыртқы және көрінетін бет.",
        items: ["сыртқы артқы мұқаба", "оқуға дейін де, кейін де көрінеді", "күшті standalone-формат"]
      }
    },
    gatefold: {
      ru: {
        title: "Гейтфолд на обложке",
        detail: "Раскрывающийся блок на обложке. Дает вау-эффект, больше площади и ощущение специального выпуска.",
        items: ["дополнительная раскрывающаяся поверхность", "максимальная площадь", "лучше всего для громкой кампании или запуска"]
      },
      kz: {
        title: "Мұқабадағы гейтфолд",
        detail: "Мұқабада ашылатын қосымша блок. Вау-әсер, көбірек аумақ және арнайы шығарылым сезімін береді.",
        items: ["ашылатын қосымша бет", "ең үлкен аумақ", "ірі кампания немесе запускқа жақсы"]
      }
    },
    cover1: {
      ru: {
        title: "Первая обложка",
        detail: "Главная внешняя поверхность журнала. Максимально премиальная позиция, которая формирует первое впечатление.",
        items: ["главная обложка", "самый высокий статус", "максимальный первый контакт"]
      },
      kz: {
        title: "Бірінші мұқаба",
        detail: "Журналдың негізгі сыртқы беті. Алғашқы әсерді қалыптастыратын ең премиум позиция.",
        items: ["негізгі мұқаба", "ең жоғары статус", "максималды алғашқы контакт"]
      }
    },
    special: {
      ru: {
        title: "Спецпроект",
        detail: "Кастомный формат под задачу бренда: редакционный материал, фотосъёмка, офлайн-механика, QR, промокод или серия касаний.",
        items: ["идея и структура под бренд", "может включать печать + digital", "стоимость считается после концепта"]
      },
      kz: {
        title: "Спецжоба",
        detail: "Бренд міндетіне арналған кастом формат: редакциялық материал, фотосессия, офлайн-механика, QR, промокод немесе бірнеше жанасу.",
        items: ["идея мен құрылым брендке сай", "print + digital қамтуы мүмкін", "баға концептіден кейін есептеледі"]
      }
    }
  };

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

  function updatePrice(activeRow) {
    if (!activeRow || !priceMagazine || !priceSelectedTitle || !priceSelectedValue) return;
    const placement = activeRow.dataset.placement || "inner";
    const details = PRICE_DETAILS[placement] || PRICE_DETAILS.inner;
    const localized = details[lang] || details.ru;

    priceRows.forEach((row) => row.classList.toggle("is-active", row === activeRow));
    priceMagazine.setAttribute("data-placement", placement);
    priceSelectedTitle.textContent = lang === "kz" ? activeRow.dataset.kzTitle : activeRow.dataset.ruTitle;
    priceSelectedValue.textContent = activeRow.dataset.price || "";

    if (priceSelectedDetail) priceSelectedDetail.textContent = localized.detail;
    if (pricePlacementLabel) pricePlacementLabel.textContent = localized.title;
    if (priceSelectedList) {
      priceSelectedList.innerHTML = localized.items.map((item) => `<li>${item}</li>`).join("");
    }
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
    updatePrice(root.querySelector("[data-price-row].is-active") || priceRows[0]);
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

  priceRows.forEach((row) => {
    const onClick = () => updatePrice(row);
    row.addEventListener("click", onClick);
    cleanups.push(() => row.removeEventListener("click", onClick));
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
  updatePrice(root.querySelector("[data-price-row].is-active") || priceRows[0]);

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
