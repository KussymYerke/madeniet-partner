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
        <p data-i18n="heroLead" class="home-lead">Первый печатный номер Madeniet: 5000 экземпляров разойдутся по музеям, магазинам, ресторанам и культурным пространствам Алматы.</p>
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
        <h2 data-i18n="aboutTitle">Не рекламный носитель, а вещь, которую оставляют себе</h2>
      </div>
      <div class="home-about__grid">
        <article>
          <span>01</span>
          <h3 data-i18n="aboutCard1Title">Первый номер</h3>
          <p data-i18n="aboutCard1Text">Печатный выпуск Madeniet о кино, музыке, моде, стендапе, архивах и людях, которые делают новую культурную сцену.</p>
        </article>
        <article>
          <span>02</span>
          <h3 data-i18n="aboutCard2Title">5000 экземпляров</h3>
          <p data-i18n="aboutCard2Text">Мы подняли тираж до 5000 — это уже не выпуск «для своих», а журнал, который реально видно в городе.</p>
        </article>
        <article>
          <span>03</span>
          <h3 data-i18n="aboutCard3Title">Долго живёт</h3>
          <p data-i18n="aboutCard3Text">Сторис исчезает через сутки. Журнал лежит на столе неделями: его листают гости, забирают домой и ставят на полку.</p>
        </article>
      </div>
    </section>

    <section id="distribution" class="home-section home-distribution">
      <div class="home-section-head">
        <p data-i18n="distributionKicker" class="home-kicker">где будет журнал</p>
        <h2 data-i18n="distributionTitle">Дистрибуция в местах, где культура уже происходит</h2>
        <p data-i18n="distributionLead">Нажмите на любую точку — справа появится фото и то, как журнал встречается с людьми именно там.</p>
      </div>

      <div class="distribution-showcase" data-distribution-root>
        <div class="distribution-showcase__tabs">
          <button class="is-active" type="button" data-distribution-btn data-i18n="distTab1" data-image="/assets/dist-store.jpeg" data-ru-title="магазины и concept stores" data-ru-text="Журнал лежит у кассы и на полках рядом с вещами, которые выбирают со вкусом. Его замечают, листают и часто уносят с собой." data-kz-title="дүкендер мен concept stores" data-kz-text="Журнал касса маңында және талғаммен таңдалатын заттардың қасында жатады. Оны байқап, парақтап, жиі өзімен алып кетеді.">магазины</button>
          <button type="button" data-distribution-btn data-i18n="distTab2" data-image="/assets/dist-abr.jpeg" data-ru-title="рестораны ABR+" data-ru-text="Пока ждут заказ, журнал листают за столом, показывают друг другу страницы — и никто не воспринимает его как рекламу." data-kz-title="ABR+ мейрамханалары" data-kz-text="Тапсырысты күтіп отырғанда журналды үстелде парақтап, бір-біріне көрсетеді — оны ешкім жарнама деп қабылдамайды.">abr+</button>
          <button type="button" data-distribution-btn data-i18n="distTab3" data-image="/assets/dist-tselinny.png" data-ru-title="Целинный и культурные пространства" data-ru-text="Здесь журнал берут те, кто сам делает культурную жизнь города: кураторы, художники, музыканты и их аудитория." data-kz-title="Целинный және мәдени кеңістіктер" data-kz-text="Мұнда журналды қаланың мәдени өмірін өздері жасайтындар алады: кураторлар, суретшілер, музыканттар және олардың аудиториясы.">целинный</button>
          <button type="button" data-distribution-btn data-i18n="distTab4" data-image="/assets/dist-ama.jpg" data-ru-title="Almaty Museum of Arts" data-ru-text="Рядом с искусством журнал читается как экспонат: его хочется сохранить, а не выбросить на выходе из музея." data-kz-title="Almaty Museum of Arts" data-kz-text="Өнердің қасында журнал экспонат сияқты оқылады: оны музейден шыға сала тастамай, сақтап қалғысы келеді.">almaty museum of arts</button>
        </div>

        <div class="distribution-showcase__preview">
          <div class="distribution-preview__image-wrap">
            <img id="distribution-image" class="distribution-preview__image" src="/assets/dist-store.jpeg" alt="Distribution visual" />
          </div>
          <div class="distribution-preview__content">
            <span class="distribution-preview__eyebrow" data-i18n="distributionEyebrow">точки распространения</span>
            <h3 id="distribution-title">магазины и concept stores</h3>
            <p id="distribution-text">Журнал лежит у кассы и на полках рядом с вещами, которые выбирают со вкусом. Его замечают, листают и часто уносят с собой.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="mockups" class="home-section home-mockups">
      <div class="home-section-head">
        <p data-i18n="mockupKicker" class="home-kicker">visual moodboard</p>
        <h2 data-i18n="mockupTitle">Как могут выглядеть страницы будущего номера</h2>
        <p data-i18n="mockupLead">Референсы визуального языка: крупная типографика, открытая сетка, много воздуха и сильные развороты.</p>
      </div>

      <div class="home-mood-grid home-mood-grid--balanced home-mood-grid--uniform">
        <article class="home-mood-card">
          <img src="/assets/mood-basquiat.png" alt="Art research magazine spread reference" />
          <div class="home-mood-card__meta">
            <span>01</span>
            <h3 data-i18n="pin1Title">Art research spread</h3>
            <p data-i18n="pin1Text">Разворот, где текст, архивный объект и цветовая плоскость складываются в исследование героя.</p>
          </div>
        </article>
        <article class="home-mood-card">
          <img src="/assets/mood-textile.webp" alt="Textile editorial magazine spread reference" />
          <div class="home-mood-card__meta">
            <span>02</span>
            <h3 data-i18n="pin2Title">Object as story</h3>
            <p data-i18n="pin2Text">Предмет, силуэт и крупная типографика рассказывают культурный сюжет — вместо привычного рекламного макета.</p>
          </div>
        </article>
        <article class="home-mood-card">
          <img src="/assets/mood-deem-spread.jpg" alt="Night culture editorial magazine spread reference" />
          <div class="home-mood-card__meta">
            <span>03</span>
            <h3 data-i18n="pin3Title">Manifest layout</h3>
            <p data-i18n="pin3Text">Большая цитата, живая фотография и плотная редакционная сетка — ощущение настоящего журнала, а не буклета.</p>
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
        <p data-i18n="formatsLead">Мы не продаём квадратные сантиметры — собираем формат под задачу: журнал, спецпроект, физический объект, digital.</p>
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
          <p data-i18n="format3Text">Визуальный разворот или брендированный материал, который читается как часть журнала, а не как баннер.</p>
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
          <p data-i18n="format6Text">Отдельный акцент на точках, где журнал окажется в руках: магазины, музеи, рестораны и культурные пространства.</p>
          <div class="format-card__meta">
            <i data-i18n="format6Meta1">5000 экземпляров</i>
            <i data-i18n="format6Meta2">городские точки</i>
          </div>
        </article>
        <article>
          <span>07</span>
          <h3 data-i18n="format7Title">QR / промокод</h3>
          <p data-i18n="format7Text">QR, промокод или landing-ссылка внутри печатного материала — чтобы читатель со страницы приходил к бренду.</p>
          <div class="format-card__meta">
            <i data-i18n="format7Meta1">trackable action</i>
            <i data-i18n="format7Meta2">offline → online</i>
          </div>
        </article>
        <article>
          <span>08</span>
          <h3 data-i18n="format8Title">Премиальное размещение</h3>
          <p data-i18n="format8Text">Обложка, гейтфолд, первый разворот — самые заметные места номера для брендов, которым важно быть первыми.</p>
          <div class="format-card__meta">
            <i data-i18n="format8Meta1">cover / gatefold</i>
            <i data-i18n="format8Meta2">maximum visibility</i>
          </div>
        </article>
      </div>
    </section>

    <section id="price" class="home-section home-price">
      <div class="home-section-head">
        <p data-i18n="priceKicker" class="home-kicker">прайс-лист</p>
        <h2 data-i18n="priceTitle">Выберите позицию — журнал покажет размещение</h2>
        <p data-i18n="priceLead">Нажмите на строку прайса — справа журнал подсветит, где именно окажется ваш макет.</p>
      </div>

      <div class="price-interactive">
        <div class="price-table" aria-label="Madeniet print price list">
          <button class="price-row is-active" type="button" data-price-row data-placement="inner" data-ru-title="Внутренняя полоса" data-kz-title="Ішкі бет" data-price="300 000 ₸"><span>Внутренняя полоса</span><b>300 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="contents" data-ru-title="Содержание / Выходные данные" data-kz-title="Мазмұн / шығу деректері" data-price="350 000 ₸"><span>Содержание / Выходные данные</span><b>350 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="editor" data-ru-title="Письмо редактора" data-kz-title="Редактор хаты" data-price="450 000 ₸"><span>Письмо редактора</span><b>450 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="insert" data-ru-title="Инсерт" data-kz-title="Инсерт" data-price="500 000 ₸"><span>Инсерт</span><b>500 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="spread" data-ru-title="Внутренний разворот" data-kz-title="Ішкі жайылма" data-price="600 000 ₸"><span>Внутренний разворот</span><b>600 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="premium-spread" data-ru-title="Премиальный разворот" data-kz-title="Премиум жайылма" data-price="800 000 ₸"><span>Премиальный разворот</span><b>800 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="third-spread" data-ru-title="Третий разворот" data-kz-title="Үшінші жайылма" data-price="950 000 ₸"><span>Третий разворот</span><b>950 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="second-spread" data-ru-title="Второй разворот" data-kz-title="Екінші жайылма" data-price="1 100 000 ₸"><span>Второй разворот</span><b>1 100 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="first-spread" data-ru-title="Первый разворот" data-kz-title="Бірінші жайылма" data-price="1 500 000 ₸"><span>Первый разворот</span><b>1 500 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="cover3" data-ru-title="Третья обложка" data-kz-title="Үшінші мұқаба" data-price="1 400 000 ₸"><span>Третья обложка</span><b>1 400 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="cover4" data-ru-title="Четвёртая обложка" data-kz-title="Төртінші мұқаба" data-price="1 700 000 ₸"><span>Четвёртая обложка</span><b>1 700 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="gatefold" data-ru-title="Гейтфолд на обложке" data-kz-title="Мұқабадағы гейтфолд" data-price="1 850 000 ₸"><span>Гейтфолд на обложке</span><b>1 850 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="cover1" data-ru-title="Первая обложка" data-kz-title="Бірінші мұқаба" data-price="2 000 000 ₸"><span>Первая обложка</span><b>2 000 000 ₸</b></button>
          <button class="price-row" type="button" data-price-row data-placement="special" data-ru-title="Спецпроект" data-kz-title="Спецжоба" data-price="по запросу"><span>Спецпроект</span><b>по запросу</b></button>
        </div>

        <div class="price-preview price-preview--detailed">
          <div class="price-preview__head">
            <span data-i18n="pricePreviewKicker">выбранный формат</span>
            <h3 id="price-selected-title">Внутренняя полоса</h3>
            <b id="price-selected-value">300 000 ₸</b>
          </div>

          <div class="price-detail-card">
            <p id="price-selected-detail">Одна рекламная страница внутри журнала. Хорошо работает для аккуратного имиджевого макета или короткого сообщения от бренда.</p>
            <ul id="price-selected-list">
              <li>1 полоса внутри номера</li>
              <li>адаптация макета под стиль журнала</li>
              <li>подходит для QR, промокода или имиджевого сообщения</li>
            </ul>
          </div>

          <div class="price-magazine price-magazine--clear" data-price-magazine data-placement="inner">
            <div class="price-placement-label" id="price-placement-label">Внутренняя полоса</div>
            <div class="price-book">
              <div class="price-page price-page--left">
                <span>madeniet</span><i>12</i>
                <div class="price-page__grid"></div>
              </div>
              <div class="price-page price-page--right">
                <span>culture story</span><i>13</i>
                <div class="price-page__grid"></div>
              </div>
              <div class="price-insert">insert</div>
              <div class="price-gatefold price-gatefold--left"></div>
              <div class="price-gatefold price-gatefold--right"></div>
            </div>
            <div class="price-legend">
              <span></span>
              <p data-i18n="pricePreviewText">Красная зона показывает, какую часть журнала займёт выбранный формат.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="contacts" class="home-section home-contacts">
      <div>
        <p data-i18n="contactKicker" class="home-kicker">контакты</p>
        <h2 data-i18n="contactTitle">Обсудить партнёрство</h2>
        <p data-i18n="contactLead">Напишите пару слов о бренде и задаче — вернёмся с 2–3 вариантами, как войти в первый номер.</p>
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
`