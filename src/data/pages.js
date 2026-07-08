export const partnersHtml = `
<div class="home-page home-v4">
  <header id="top" class="home-header">
    <a href="#top" class="home-logo" aria-label="Madeniet">
      <span>made</span><span>niet</span>
    </a>

    <nav class="home-nav" aria-label="Home navigation">
      <a data-i18n="navAbout" href="#about">о выпуске</a>
      <a data-i18n="navDistribution" href="#distribution">дистрибуция</a>
      <a data-i18n="navMockups" href="#mockups">макеты</a>
      <a data-i18n="navFormats" href="#formats">форматы</a>
      <a data-i18n="navPrice" href="#price">прайс</a>
      <a data-i18n="navContacts" href="#contacts">контакты</a>
    </nav>

    <div class="home-lang" aria-label="Language switcher">
      <button data-lang-btn="kz" type="button">kz</button>
      <span>/</span>
      <button data-lang-btn="ru" type="button">ru</button>
    </div>

    <button class="home-burger" type="button" aria-label="Open menu" aria-expanded="false">
      <span></span>
      <span></span>
    </button>
  </header>

  <main>
    <section class="home-hero home-hero--photo" style="background-image:url('/assets/home-hero-yurt-flipped.jpg')">
      <div class="home-hero__overlay"></div>
      <div class="home-hero__copy">
        <p data-i18n="heroKicker" class="home-kicker home-kicker--light">madeniet · печатный выпуск №1 · сентябрь 2026</p>
        <h1 data-i18n="heroTitle">Культура Казахстана в печати</h1>
        <p data-i18n="heroLead" class="home-lead">Первый печатный номер Madeniet: 5000 экземпляров в музеях, магазинах, ресторанах и культурных пространствах Алматы.</p>
        <div class="home-chip-row">
          <span class="home-chip">5000 экз.</span>
          <span class="home-chip" data-i18n="heroChip1">городская дистрибуция</span>
          <span class="home-chip" data-i18n="heroChip2">печатный выпуск №1</span>
        </div>
        <div class="home-actions">
          <a data-i18n="heroPrimary" href="#formats" class="home-btn home-btn--dark">форматы партнёрства</a>
          <a data-i18n="heroSecondary" href="#mockups" class="home-btn home-btn--ghost">посмотреть макеты</a>
        </div>
      </div>
    </section>

    <section id="about" class="home-section home-about">
      <div class="home-section-head">
        <p data-i18n="aboutKicker" class="home-kicker">что это</p>
        <h2 data-i18n="aboutTitle">Не просто медиа-кит, а культурный объект для брендов</h2>
      </div>
      <div class="home-about__grid">
        <article>
          <span>01</span>
          <h3 data-i18n="aboutCard1Title">Первый номер</h3>
          <p data-i18n="aboutCard1Text">Печатный выпуск Madeniet о кино, музыке, моде, стендапе, архивах и людях, которые формируют новую культурную сцену.</p>
        </article>
        <article>
          <span>02</span>
          <h3 data-i18n="aboutCard2Title">5000 экземпляров</h3>
          <p data-i18n="aboutCard2Text">Тираж увеличен до 5000: это уже не сувенирный выпуск, а заметное офлайн-присутствие в городе.</p>
        </article>
        <article>
          <span>03</span>
          <h3 data-i18n="aboutCard3Title">Долго живёт</h3>
          <p data-i18n="aboutCard3Text">Журнал не исчезает через 24 часа как сторис: его оставляют на столах, забирают домой и сохраняют как вещь.</p>
        </article>
      </div>
    </section>

    <section id="distribution" class="home-section home-distribution">
      <div class="home-section-head">
        <p data-i18n="distributionKicker" class="home-kicker">где будет журнал</p>
        <h2 data-i18n="distributionTitle">Дистрибуция в местах, где культура уже происходит</h2>
        <p data-i18n="distributionLead">Кликайте по точкам: справа меняется фотография и сценарий контакта с аудиторией.</p>
      </div>

      <div class="distribution-showcase" data-distribution-root>
        <div class="distribution-showcase__tabs">
          <button class="is-active" type="button" data-distribution-btn data-i18n="distTab1" data-image="/assets/dist-store.jpeg" data-ru-title="магазины и concept stores" data-ru-text="Журнал появляется в магазинах и lifestyle-точках: его можно заметить, взять в руки и забрать как красивый physical-объект." data-kz-title="дүкендер мен concept stores" data-kz-text="Журнал дүкендер мен lifestyle-нүктелерде тарайды: оны байқап, қолға алып, әдемі physical-объект ретінде алып кетуге болады.">магазины</button>
          <button type="button" data-distribution-btn data-i18n="distTab2" data-image="/assets/dist-abr.jpeg" data-ru-title="рестораны ABR+" data-ru-text="В ресторанной среде журнал работает мягко: его листают за столом, обсуждают и возвращаются к нему без ощущения рекламы." data-kz-title="ABR+ мейрамханалары" data-kz-text="Мейрамхана ортасында журнал жұмсақ жұмыс істейді: оны үстелде қарайды, талқылайды және жарнама сияқты қабылдамайды.">abr+</button>
          <button type="button" data-distribution-btn data-i18n="distTab3" data-image="/assets/dist-tselinny.png" data-ru-title="Целинный и культурные пространства" data-ru-text="Через культурные площадки журнал попадает к сообществу, которое реально формирует городскую повестку и культурные разговоры." data-kz-title="Целинный және мәдени кеңістіктер" data-kz-text="Мәдени алаңдар арқылы журнал қалалық күн тәртібін және мәдени әңгімелерді қалыптастыратын аудиторияға жетеді.">целинный</button>
          <button type="button" data-distribution-btn data-i18n="distTab4" data-image="/assets/dist-ama.jpg" data-ru-title="Almaty Museum of Arts" data-ru-text="В музейной среде журнал воспринимается как коллекционный культурный объект, а не как одноразовая рекламная листовка." data-kz-title="Almaty Museum of Arts" data-kz-text="Музей ортасында журнал бір реттік жарнама емес, коллекциялық мәдени объект ретінде қабылданады.">almaty museum of arts</button>
        </div>

        <div class="distribution-showcase__preview">
          <div class="distribution-preview__image-wrap">
            <img id="distribution-image" class="distribution-preview__image" src="/assets/dist-store.jpeg" alt="Distribution visual" />
          </div>
          <div class="distribution-preview__content">
            <span class="distribution-preview__eyebrow" data-i18n="distributionEyebrow">точки распространения</span>
            <h3 id="distribution-title">магазины и concept stores</h3>
            <p id="distribution-text">Журнал появляется в магазинах и lifestyle-точках: его можно заметить, взять в руки и забрать как красивый physical-объект.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="mockups" class="home-section home-mockups">
      <div class="home-section-head">
        <p data-i18n="mockupKicker" class="home-kicker">visual moodboard</p>
        <h2 data-i18n="mockupTitle">Как могут выглядеть страницы будущего номера</h2>
        <p data-i18n="mockupLead">Референсы на визуальный язык: крупная типографика, открытая сетка, много воздуха и сильные развороты.</p>
      </div>

      <div class="home-mood-grid home-mood-grid--balanced home-mood-grid--uniform">
        <article class="home-mood-card">
          <img src="/assets/mood-basquiat.png" alt="Art research magazine spread reference" />
          <div class="home-mood-card__meta">
            <span>01</span>
            <h3 data-i18n="pin1Title">Art research spread</h3>
            <p data-i18n="pin1Text">Разворот, где текст, архивный объект и цветовая плоскость собираются в исследование героя.</p>
          </div>
        </article>
        <article class="home-mood-card">
          <img src="/assets/mood-textile.webp" alt="Textile editorial magazine spread reference" />
          <div class="home-mood-card__meta">
            <span>02</span>
            <h3 data-i18n="pin2Title">Object as story</h3>
            <p data-i18n="pin2Text">Предмет, силуэт и крупная типографика работают как культурный сюжет, а не как обычный рекламный макет.</p>
          </div>
        </article>
        <article class="home-mood-card">
          <img src="/assets/mood-deem-spread.jpg" alt="Night culture editorial magazine spread reference" />
          <div class="home-mood-card__meta">
            <span>03</span>
            <h3 data-i18n="pin3Title">Manifest layout</h3>
            <p data-i18n="pin3Text">Большая цитата, живая фотография и плотная редакционная сетка дают ощущение настоящего журнала.</p>
          </div>
        </article>
        <article class="home-mood-card">
          <img src="/assets/mood-raw-01.jpg" alt="Editorial magazine page reference" />
          <div class="home-mood-card__meta">
            <span>04</span>
            <h3 data-i18n="pin4Title">Archive page</h3>
            <p data-i18n="pin4Text">Квадратная композиция, бумажная фактура и спокойный текстовый блок для архивных материалов.</p>
          </div>
        </article>
        <article class="home-mood-card">
          <img src="/assets/mood-japan.webp" alt="Graphic typography magazine spread reference" />
          <div class="home-mood-card__meta">
            <span>05</span>
            <h3 data-i18n="pin5Title">Graphic typography</h3>
            <p data-i18n="pin5Text">Яркий типографический разворот для материалов про дизайн, стиль, моду и визуальную культуру.</p>
          </div>
        </article>
        <article class="home-mood-card">
          <img src="/assets/mood-editorial.jpg" alt="Monochrome editorial spread reference" />
          <div class="home-mood-card__meta">
            <span>06</span>
            <h3 data-i18n="pin6Title">Editorial opening</h3>
            <p data-i18n="pin6Text">Строгая сетка и сильный заголовок — хороший тон для вводных страниц и брендовых эссе.</p>
          </div>
        </article>
      </div>
    </section>

    <section id="formats" class="home-section home-formats">
      <div class="home-section-head">
        <p data-i18n="formatsKicker" class="home-kicker">форматы партнёрства</p>
        <h2 data-i18n="formatsTitle">Не “рекламная полоса”, а формат внутри культурной истории</h2>
        <p data-i18n="formatsLead">Фокус — на журнале, макете, спецпроекте, физическом объекте и digital-поддержке.</p>
      </div>

      <div class="format-list format-list--clean format-list--expanded">
        <article>
          <span>01</span>
          <h3 data-i18n="format1Title">Партнёр выпуска</h3>
          <p data-i18n="format1Text">Статусное присутствие в первом печатном номере, коммуникациях выпуска и партнёрских материалах.</p>
          <div class="format-card__meta">
            <i data-i18n="format1Meta1">1 статусный партнёр</i>
            <i data-i18n="format1Meta2">до 5 точек касания</i>
          </div>
        </article>
        <article>
          <span>02</span>
          <h3 data-i18n="format2Title">Индивидуальный спецпроект</h3>
          <p data-i18n="format2Text">Отдельная идея под бренд: маршруты, герои, фотосъёмка, городская история или культурный PR-актив.</p>
          <div class="format-card__meta">
            <i data-i18n="format2Meta1">1 кастомная идея</i>
            <i data-i18n="format2Meta2">объём под задачу</i>
          </div>
        </article>
        <article>
          <span>03</span>
          <h3 data-i18n="format3Title">Разворот в номере</h3>
          <p data-i18n="format3Text">Визуальный разворот или брендированный материал, который выглядит как часть журнала, а не как баннер.</p>
          <div class="format-card__meta">
            <i data-i18n="format3Meta1">2–4 страницы</i>
            <i data-i18n="format3Meta2">editorial integration</i>
          </div>
        </article>
        <article>
          <span>04</span>
          <h3 data-i18n="format4Title">Постер / вкладыш</h3>
          <p data-i18n="format4Text">Открытка, постер, стикеры, промокод или другой физический элемент внутри выпуска.</p>
          <div class="format-card__meta">
            <i data-i18n="format4Meta1">1 физический носитель</i>
            <i data-i18n="format4Meta2">внутри всего тиража</i>
          </div>
        </article>
        <article>
          <span>05</span>
          <h3 data-i18n="format5Title">Digital support</h3>
          <p data-i18n="format5Text">Поддержка материала в соцсетях Madeniet и адаптация визуала под digital.</p>
          <div class="format-card__meta">
            <i data-i18n="format5Meta1">3–5 digital касаний</i>
            <i data-i18n="format5Meta2">post / story / анонс</i>
          </div>
        </article>
        <article>
          <span>06</span>
          <h3 data-i18n="format6Title">Дистрибуционный пакет</h3>
          <p data-i18n="format6Text">Отдельный акцент на точках, где журнал будет раздаваться: магазины, музеи, рестораны и культурные пространства.</p>
          <div class="format-card__meta">
            <i data-i18n="format6Meta1">5000 экземпляров</i>
            <i data-i18n="format6Meta2">городские точки</i>
          </div>
        </article>
        <article>
          <span>07</span>
          <h3 data-i18n="format7Title">QR / промокод</h3>
          <p data-i18n="format7Text">Интеграция QR, промокода или landing-ссылки внутри печатного материала, чтобы связать offline с digital.</p>
          <div class="format-card__meta">
            <i data-i18n="format7Meta1">trackable action</i>
            <i data-i18n="format7Meta2">offline → online</i>
          </div>
        </article>
        <article>
          <span>08</span>
          <h3 data-i18n="format8Title">Премиальное размещение</h3>
          <p data-i18n="format8Text">Обложка, гейтфолд, первый разворот или другой заметный формат для брендов, которым нужна максимальная видимость.</p>
          <div class="format-card__meta">
            <i data-i18n="format8Meta1">cover / gatefold</i>
            <i data-i18n="format8Meta2">maximum visibility</i>
          </div>
        </article>
      </div>
    </section>

    <section id="price" class="home-section home-price home-price--premium">
      <div class="home-section-head">
        <p data-i18n="priceKicker" class="home-kicker">прайс-лист</p>
        <h2 data-i18n="priceTitle">Выберите позицию — журнал покажет размещение</h2>
        <p data-i18n="priceLead">Интерактивный прайс: наведите на строку для временного превью или кликните, чтобы зафиксировать выбранную позицию.</p>
      </div>

      <div class="price-shell" data-price-component>
        <div class="price-list-panel">
          <div class="price-list-panel__top">
            <span>MADENIET PRICE</span>
            <b>Print</b>
          </div>
          <div class="price-table-v2" data-price-list aria-label="Madeniet print price list"></div>
        </div>

        <aside class="magazine-preview" data-magazine-preview data-state="open" data-zone="inner">
          <div class="magazine-preview__top">
            <span id="price-selected-badge">выбрано</span>
            <h3 id="price-selected-title">Внутренняя полоса</h3>
            <b id="price-selected-value">300 000 ₸</b>
          </div>

          <div class="magazine-stage" aria-label="Magazine advertising position preview">
            <div class="magazine-closed" aria-hidden="true">
              <div class="mag-cover mag-cover--front"><span>madeniet</span></div>
              <div class="mag-cover mag-cover--back"><span>back cover</span></div>
              <div class="mag-gatefold mag-gatefold--left"></div>
              <div class="mag-gatefold mag-gatefold--right"></div>
            </div>

            <div class="magazine-open" aria-hidden="true">
              <div class="mag-page mag-page--left">
                <span class="mag-page__eyebrow">madeniet</span>
                <div class="mag-editor-column"></div>
                <div class="mag-content-lines"></div>
                <i>12</i>
              </div>
              <div class="mag-page mag-page--right">
                <span class="mag-page__eyebrow">culture story</span>
                <div class="mag-visual-block"></div>
                <div class="mag-content-lines mag-content-lines--short"></div>
                <i>13</i>
              </div>
              <div class="mag-insert-sheet"><span>insert</span></div>
            </div>
          </div>

          <div class="magazine-preview__caption">
            <p id="price-selected-detail">Одна рекламная страница внутри журнала. Подходит для аккуратного имиджевого макета, визуального объявления или короткого бренд-сообщения.</p>
            <ul id="price-selected-list">
              <li>1 полоса внутри номера</li>
              <li>адаптация макета под стиль журнала</li>
              <li>подходит для QR, промокода или имиджевого сообщения</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>

    <section id="contacts" class="home-section home-contacts">
      <div>
        <p data-i18n="contactKicker" class="home-kicker">контакты</p>
        <h2 data-i18n="contactTitle">Обсудить партнёрство</h2>
        <p data-i18n="contactLead">Расскажите, какой бренд и какая задача — мы предложим 2–3 формата участия в первом номере.</p>
      </div>

      <div class="contact-card">
        <span>Head of PR & Commercial</span>
        <h3>Ильляра</h3>
        <a href="tel:+77771990209">+7 777 199 02 09</a>
        <a href="https://t.me/illyara" target="_blank" rel="noopener noreferrer">@illyara</a>
        <a href="mailto:themadeniett@gmail.com">themadeniett@gmail.com</a>
      </div>
    </section>
  </main>
</div>
`;