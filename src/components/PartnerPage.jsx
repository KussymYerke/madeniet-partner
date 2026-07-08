import React, { useEffect, useMemo, useRef, useState } from "react";

function formatStat(value, kind, lang) {
  if (kind === "m") return `${value.toFixed(2).replace(".", ",")} млн`;
  if (kind === "%") return `${Math.round(value)}%`;
  const suffix = lang === "kz" ? " мың" : " тыс.";
  return `${Math.round(value)}${suffix}`;
}

function numberLabel(index) {
  return String(index + 1).padStart(2, "0");
}

function MadeNietMark() {
  return (
    <span className="pp-made" aria-label="Madeniet">
      <span>made</span>
      <span>niet</span>
    </span>
  );
}

function SectionHead({ kicker, title, lead, light = false }) {
  return (
    <div className={`pp-section-head${light ? " pp-section-head--light" : ""}`}>
      {kicker && <p className="pp-kicker">{kicker}</p>}
      <h2>{title}</h2>
      {lead && <p>{lead}</p>}
    </div>
  );
}


const PARTNER_PRICE_POSITIONS = [
  {
    id: "gatefold-na-oblozhke",
    titleRu: "Гейтфолд на обложке",
    titleKz: "Мұқабадағы гейтфолд",
    price: "1,850,000 тг",
    image: "/assets/price-board/card1.png",
    detailRu: "Раскрывающаяся обложка с дополнительной створкой. Самый эффектный print-формат для запуска, громкой кампании или имиджевого вау-эффекта.",
    detailKz: "Қосымша ашылатын створкасы бар мұқаба. Іске қосу, ірі кампания немесе имидждік wow-әсер үшін ең әсерлі print-формат.",
    bulletsRu: ["расширенная площадь на обложке", "эффект раскрытия и вау-подача", "лучше всего для flagship-кампаний"],
    bulletsKz: ["мұқабадағы кеңейтілген аумақ", "ашылу эффектісі және wow-подача", "flagship-кампаниялар үшін ең тиімді"]
  },
  {
    id: "pervyj-razvorot",
    titleRu: "Первый разворот",
    titleKz: "Алғашқы разворот",
    price: "1,500,000 тг",
    image: "/assets/price-board/card2.png",
    detailRu: "Первый разворот сразу после обложки. Дает максимальный ранний контакт с читателем и много места для визуала, продукта и сообщения бренда.",
    detailKz: "Мұқабадан кейінгі алғашқы разворот. Оқырманмен ерте контакт береді және визуал, өнім мен бренд хабарламасына көп орын ашады.",
    bulletsRu: ["2 полные страницы рядом", "самая ранняя заметная позиция внутри номера", "подходит для ключевого партнера выпуска"],
    bulletsKz: ["қатар тұрған 2 толық бет", "нөмір ішіндегі ең ерте көрінетін позиция", "шығарылымның негізгі серіктесіне ыңғайлы"]
  },
  {
    id: "tretya-oblozhka",
    titleRu: "Третья обложка",
    titleKz: "Үшінші мұқаба",
    price: "1,400,000 тг",
    image: "/assets/price-board/card3.png",
    detailRu: "Внутренняя сторона задней обложки. Премиальная финальная позиция: читатель видит ее перед тем, как закрыть журнал.",
    detailKz: "Артқы мұқабаның ішкі жағы. Оқырман журналды жабар алдында көретін премиум финалдық позиция.",
    bulletsRu: ["внутренняя часть задней обложки", "премиальная финальная точка контакта", "справа в превью нет лишней пустой страницы"],
    bulletsKz: ["артқы мұқабаның ішкі бөлігі", "контакттың премиум финалдық нүктесі", "preview ішінде оң жақта бос бет жоқ"]
  },
  {
    id: "chetvertaya-oblozhka",
    titleRu: "Четвертая обложка",
    titleKz: "Төртінші мұқаба",
    price: "1,700,000 тг",
    image: "/assets/price-board/card4.png",
    detailRu: "Задняя внешняя обложка журнала. Это полноценная наружная поверхность, которая читается как самостоятельный бренд-постер.",
    detailKz: "Журналдың артқы сыртқы мұқабасы. Бұл жеке бренд-постер сияқты қабылданатын толық сыртқы бет.",
    bulletsRu: ["наружная задняя обложка", "видна как до, так и после чтения", "сильный standalone-формат"],
    bulletsKz: ["сыртқы артқы мұқаба", "оқуға дейін де, кейін де көрінеді", "күшті standalone-формат"]
  },
  {
    id: "insert",
    titleRu: "Инсерт",
    titleKz: "Қосымша парақ",
    price: "500,000 тг",
    image: "/assets/price-board/card5.png",
    detailRu: "Отдельный вложенный лист между страницами журнала: купон, invitation, меню, промо-карта, мини-постер или QR-носитель.",
    detailKz: "Журнал беттерінің арасына салынатын жеке парақ: купон, invitation, меню, промо-карта, мини-постер немесе QR-тасығыш.",
    bulletsRu: ["отдельный физический носитель внутри номера", "можно вынуть, сохранить или использовать", "идеально для промо, invite, QR или collectible"],
    bulletsKz: ["нөмір ішіндегі жеке physical тасымалдағыш", "алып, сақтап немесе қолдануға болады", "promo, invite, QR немесе collectible үшін ыңғайлы"]
  },
  {
    id: "inside-single-combo",
    titleRu: "Внутренняя полоса / Письмо редактора / Содержание",
    titleKz: "Ішкі бет / Редактор хаты / Мазмұн",
    price: "350,000 тг",
    image: "/assets/price-board/card6.png",
    detailRu: "Компактные одиночные позиции внутри номера: внутренняя полоса, страница рядом с письмом редактора или размещение возле содержания / выходных данных.",
    detailKz: "Нөмір ішіндегі ықшам бірлік позициялар: ішкі бет, редактор хаты жанындағы бет немесе мазмұн / шығу деректері маңындағы орналастыру.",
    bulletsRu: ["одностраничный формат", "подходит для аккуратного имиджевого присутствия", "варианты: внутренняя полоса, письмо редактора, содержание"],
    bulletsKz: ["бір беттік формат", "ұқыпты имидждік қатысуға ыңғайлы", "нұсқалар: ішкі бет, редактор хаты, мазмұн"]
  },
  {
    id: "second-third-spread",
    titleRu: "Третий разворот / Второй разворот",
    titleKz: "Үшінші разворот / Екінші разворот",
    price: "950,000 тг",
    image: "/assets/price-board/card7.png",
    detailRu: "Ранние развороты в начале выпуска. Отличный баланс заметности и стоимости для брендов, которым нужна сильная видимость без обложечной цены.",
    detailKz: "Шығарылым басындағы ерте развороттар. Мұқаба бағасынсыз-ақ жоғары көрінім қажет брендтер үшін жақсы баланс.",
    bulletsRu: ["2 страницы рядом", "ранняя часть читательского пути", "варианты: второй или третий разворот"],
    bulletsKz: ["қатар тұрған 2 бет", "оқырман жолының ерте бөлігі", "нұсқалар: екінші немесе үшінші разворот"]
  },
  {
    id: "inner-premium-spread",
    titleRu: "Внутренний разворот / Премиальный разворот",
    titleKz: "Ішкі разворот / Премиалды разворот",
    price: "600,000 тг",
    image: "/assets/price-board/card8.png",
    detailRu: "Развороты внутри блока номера: классический внутренний или более премиальный в первой трети журнала. Хорошо подходят для полноценной истории бренда.",
    detailKz: "Нөмір блогының ішіндегі развороттар: классикалық ішкі немесе журналдың алғашқы үштен біріндегі премиалды формат. Бренд тарихын толық ашуға ыңғайлы.",
    bulletsRu: ["2 полные страницы", "пространство для фото, текста и storytelling", "варианты: внутренний или премиальный разворот"],
    bulletsKz: ["2 толық бет", "фото, мәтін және storytelling үшін орын", "нұсқалар: ішкі немесе премиалды разворот"]
  },
  {
    id: "slozhnyj-razvorot-1",
    titleRu: "Сложный разворот 1",
    titleKz: "Күрделі разворот 1",
    price: "1,000,000 тг",
    image: "/assets/price-board/card9.png",
    detailRu: "Симметричный fold-out-разворот с раскрывающимися створками. Формат дает расширенную площадь для большой кампании, съёмки или визуальной истории.",
    detailKz: "Симметриялы fold-out-разворот, екі жаққа ашылатын створкалармен. Үлкен кампания, түсірілім немесе визуалды хикая үшін кең аумақ береді.",
    bulletsRu: ["многоступенчатое раскрытие", "расширенная площадь макета", "вариант раскрытия: сторона 1"],
    bulletsKz: ["көп сатылы ашылу", "макетке арналған кеңейтілген аумақ", "ашылу нұсқасы: 1-жағы"]
  },
  {
    id: "slozhnyj-razvorot-2",
    titleRu: "Сложный разворот 2",
    titleKz: "Күрделі разворот 2",
    price: "1,000,000 тг",
    image: "/assets/price-board/card10.png",
    detailRu: "Вторая фаза сложного симметричного fold-out-разворота. Позволяет показать продолжение большой визуальной композиции или вторую часть истории.",
    detailKz: "Күрделі симметриялы fold-out-развороттың екінші фазасы. Үлкен визуалды композицияның жалғасын немесе оқиғаның екінші бөлігін көрсетуге мүмкіндік береді.",
    bulletsRu: ["вторая конфигурация сложного разворота", "хорошо подходит для продолжения композиции", "вариант раскрытия: сторона 2"],
    bulletsKz: ["күрделі развороттың екінші конфигурациясы", "композиция жалғасына өте ыңғайлы", "ашылу нұсқасы: 2-жағы"]
  }
];


function PartnerPricePhotoBoard({ lang }) {
  const [selectedId, setSelectedId] = useState("gatefold-na-oblozhke");
  const [hoveredId, setHoveredId] = useState(null);
  const previewId = hoveredId || selectedId;
  const current = PARTNER_PRICE_POSITIONS.find((item) => item.id === previewId) || PARTNER_PRICE_POSITIONS[0];

  const localize = (item) => ({
    title: lang === "kz" ? item.titleKz : item.titleRu,
    detail: lang === "kz" ? item.detailKz : item.detailRu,
    bullets: lang === "kz" ? item.bulletsKz : item.bulletsRu,
  });

  const localized = localize(current);
  const badge = hoveredId
    ? lang === "kz" ? "қарап жатырсыз" : "предпросмотр"
    : lang === "kz" ? "таңдалды" : "выбрано";

  return (
    <div className="price-shell pp-photo-price-shell">
      <div className="price-visual-grid" aria-label="Madeniet print price list">
        {PARTNER_PRICE_POSITIONS.map((item) => {
          const itemTitle = localize(item).title;
          const active = item.id === selectedId;
          const preview = item.id === previewId;

          return (
            <button
              className={`price-photo-card${active ? " is-active" : ""}${preview ? " is-preview" : ""}`}
              type="button"
              data-price-id={item.id}
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              onFocus={() => setHoveredId(item.id)}
              onBlur={() => setHoveredId(null)}
              onClick={() => {
                setSelectedId(item.id);
                setHoveredId(null);
              }}
            >
              <img src={item.image} alt={itemTitle} loading="lazy" />
            </button>
          );
        })}
      </div>

      <aside className="price-photo-detail" data-price-id={current.id}>
        <div className="magazine-preview__top">
          <span>{badge}</span>
          <h3>{localized.title}</h3>
          <b>{current.price}</b>
        </div>

        <div className="price-photo-detail__stage">
          <img src={current.image} alt={localized.title} />
        </div>

        <div className="magazine-preview__caption">
          <p>{localized.detail}</p>
          <ul>
            {localized.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default function PartnerPage({ page }) {
  const [lang, setLang] = useState(() => localStorage.getItem("madeniet-lang") || "ru");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const progressBarRef = useRef(null);
  const tickingRef = useRef(false);
  const t = useMemo(() => page.content[lang] || page.content.ru, [lang, page]);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "kz" ? "kk" : "ru";
  }, [lang]);

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, Math.max(0, scrollTop / scrollable)) : 0;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }

      tickingRef.current = false;
    };

    const requestUpdate = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateScrollState);
      }
    };

    updateScrollState();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);



  const changeLang = (nextLang) => {
    localStorage.setItem("madeniet-lang", nextLang);
    setLang(nextLang);
    setIsMenuOpen(false);
  };

  return (
    <div className="partner-page" style={{ "--brand-color": page.color }}>
      <div className="pp-scroll-progress" aria-hidden="true">
        <span ref={progressBarRef} />
      </div>

      <header id="top" className={`pp-header pp-header--island ${isMenuOpen ? "is-menu-open" : ""}`}>
        <nav className="pp-nav" aria-label={`${page.brand} proposal navigation`}>
          {t.nav.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </a>
          ))}
          <div className="pp-nav-lang" aria-label="Language switcher in menu">
            <button className={lang === "kz" ? "is-active" : ""} onClick={() => changeLang("kz")} type="button">
              kz
            </button>
            <span>/</span>
            <button className={lang === "ru" ? "is-active" : ""} onClick={() => changeLang("ru")} type="button">
              ru
            </button>
          </div>
        </nav>

        <a href="#top" className="pp-lockup" aria-label={`Madeniet × ${page.brand}`}>
          <MadeNietMark />
          <span className="pp-cross">×</span>
          <img src={page.logo} alt={page.brand} className="pp-brand-logo" />
        </a>

        <button
          className="pp-burger"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <div className="pp-lang" aria-label="Language switcher">
          <button className={lang === "kz" ? "is-active" : ""} onClick={() => changeLang("kz")} type="button">
            kz
          </button>
          <span>/</span>
          <button className={lang === "ru" ? "is-active" : ""} onClick={() => changeLang("ru")} type="button">
            ru
          </button>
        </div>
      </header>

      <main>
        <section
          className="pp-hero pp-hero--full"
          style={{ backgroundImage: `url(${page.images.hero})` }}
          aria-label={t.hero.visualAlt}
        >
          <div className="pp-hero__overlay" aria-hidden="true" />
          <div className="pp-hero__inner">
            <div className="pp-hero__text">
              <p className="pp-kicker">{t.hero.kicker}</p>
              <h1>{t.hero.title}</h1>
              <p className="pp-lead">{t.hero.lead}</p>
              <div className="pp-meta">
                {t.hero.meta.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <div className="pp-actions">
                <a href="#routes" className="pp-btn pp-btn--primary">
                  {t.hero.primaryCta}
                </a>
                <a href="#contacts" className="pp-btn pp-btn--ghost">
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="routes" className="pp-section pp-concept">
          <SectionHead kicker={t.concept.kicker} title={t.concept.title} lead={t.concept.lead} />
          {t.concept.note && <p className="pp-example-note">{t.concept.note}</p>}

          <div className="pp-concept-grid">
            {t.concept.cards.map((card, index) => (
              <article key={card.title}>
                <span>{numberLabel(index)}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>

          <figure className="pp-wide-mockup">
            <img src={page.images.mockup} alt={t.hero.visualAlt} />
            <figcaption>{t.concept.caption}</figcaption>
          </figure>
        </section>
        {t.moodboard && (
          <section
            id="moodboard"
            className="pp-section pp-moodboard pp-moodboard--pinterest pp-moodboard--hyundai"
            style={{ "--hyundai-mood-bg": `url(${page.images.hero})` }}
          >
            <SectionHead kicker={t.moodboard.kicker} title={t.moodboard.title} lead={t.moodboard.lead} />
            <div className="home-mood-grid home-mood-grid--balanced home-mood-grid--uniform pp-hyundai-pinterest-grid">
              {t.moodboard.items.map((item, index) => (
                <article className="home-mood-card" key={item.title}>
                  <img src={item.image} alt={item.alt || item.title} />
                  <div className="home-mood-card__meta">
                    <span>{item.tag || numberLabel(index)}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <p className="pp-moodboard-note">{t.moodboard.note}</p>
          </section>
        )}

        <section id="why" className="pp-blue">
          <div className="pp-blue__inner">
            <SectionHead kicker={t.why.kicker} title={t.why.title} lead={t.why.lead} light />
            <div className="pp-proof-grid">
              {t.why.proofs.map((proof) => (
                <article key={proof.title}>
                  <div className="pp-proof-img">
                    <img src={page.images[proof.image]} alt={proof.alt} />
                  </div>
                  <h3>{proof.title}</h3>
                  <p>{proof.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="value" className="pp-section pp-value">
          <SectionHead kicker={t.value.kicker} title={t.value.title} />
          <div className="pp-value-grid">
            {t.value.items.map((item, index) => (
              <article key={item}>
                <span>{numberLabel(index)}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="safety" className="pp-safety">
          <div>
            <p className="pp-kicker">{t.safety.kicker}</p>
            <h2>{t.safety.title}</h2>
          </div>
          <p>{t.safety.text}</p>
        </section>

        <section id="stats" className="pp-section pp-stats">
          <SectionHead kicker={t.stats.kicker} title={t.stats.title} lead={t.stats.note} />
          <div className="pp-stats-grid">
            {page.stats.map((stat) => (
              <article key={stat.label.ru}>
                <strong>{formatStat(stat.value, stat.kind, lang)}</strong>
                <span>{stat.label[lang] || stat.label.ru}</span>
              </article>
            ))}
          </div>
          <div className="pp-about-card">
            <span>{t.stats.aboutTitle}</span>
            <p>{t.stats.aboutText}</p>
          </div>
        </section>

        <section id="issue" className="pp-issue">
          <div className="pp-issue__content">
            <p className="pp-kicker">{t.issue.kicker}</p>
            <h2>{t.issue.title}</h2>
            <p>{t.issue.lead}</p>
          </div>
          <div className="pp-issue__cards">
            {t.issue.facts.map((fact) => (
              <article key={fact.label}>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </article>
            ))}
          </div>
        </section>

        <section id="formats" className="pp-section pp-formats">
          <SectionHead kicker={t.formats.kicker} title={t.formats.title} lead={t.formats.lead} />
          <div className="pp-package-grid">
            {t.formats.packages.map((item, index) => (
              <article className={item.featured ? "pp-package--featured" : ""} key={item.title}>
                <div className="pp-package-top">
                  <span>{numberLabel(index)}</span>
                  <b>{item.label}</b>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        {t.price && (
          <section id="price" className="pp-section pp-price-list pp-price-list--reference">
            <SectionHead kicker={t.price.kicker} title={t.price.title} lead={t.price.lead} />
            <div className="price-reference-wrap pp-price-reference-wrap">
              <figure className="price-reference-card">
                <img src="/assets/price-board/price-reference-board.jpg" alt="Рекламные позиции журнала Madeniet" loading="lazy" />
              </figure>
            </div>
          </section>
        )}

        <footer id="contacts" className="pp-footer">
          <div>
            <p className="pp-kicker">{t.contact.kicker}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
          </div>
          <div className="pp-contact-card">
            <a href={page.contactLinks.telegram} target="_blank" rel="noopener noreferrer">
              {t.contact.telegram}
            </a>
            <a href={page.mediaKit} download="Madeniet_Media_Kit.pdf">
              {t.contact.mediaKit}
            </a>
            <span>{t.contact.note}</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
