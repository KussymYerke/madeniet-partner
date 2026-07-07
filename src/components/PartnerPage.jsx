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
          <section id="moodboard" className="pp-section pp-moodboard">
            <SectionHead kicker={t.moodboard.kicker} title={t.moodboard.title} lead={t.moodboard.lead} />
            <div className="pp-moodboard-grid">
              {t.moodboard.items.map((item, index) => (
                <article key={item.title}>
                  <div className={`pp-mood-card pp-mood-card--${item.variant || "clean"}`}>
                    {item.image ? (
                      <img src={item.image} alt={item.alt || item.title} />
                    ) : (
                      <div className="pp-mood-card__fallback" aria-hidden="true">
                        <span>{item.tag}</span>
                        <b>{numberLabel(index)}</b>
                      </div>
                    )}
                  </div>
                  <div className="pp-moodboard-copy">
                    <span>{item.tag}</span>
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
          <section id="price" className="pp-section pp-price-list">
            <SectionHead kicker={t.price.kicker} title={t.price.title} lead={t.price.lead} />
            <div className="pp-price-grid">
              {t.price.items.map((item) => (
                <article key={item.title} className={item.featured ? "pp-price--featured" : ""}>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <b>{item.price}</b>
                </article>
              ))}
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
