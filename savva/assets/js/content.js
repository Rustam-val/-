/* =============================================================
   SAVVA — ВСЁ СОДЕРЖИМОЕ САЙТА В ОДНОМ ФАЙЛЕ
   Чтобы поменять текст, цену или блюдо — правьте только этот файл.
   en = английский, ar = арабский.
   ВНИМАНИЕ: телефон, часы работы и цены — ПЛЕЙСХОЛДЕРЫ.
   Замените их на реальные данные кофейни (помечено TODO).
   ============================================================= */

const SITE = {
  /* Показывать цены в меню?
     false — цены скрыты (по умолчанию, т.к. реальные цены не подтверждены).
     Впишите настоящие цены ниже и поставьте true. */
  showPrices: false,

  /* ---------- Контакты и общие данные ---------- */
  info: {
    instagram: 'https://www.instagram.com/savva_cafe/',
    mapsUrl: 'https://maps.app.goo.gl/KLpbbtp5SRyDRMia8',   // ссылка из био Instagram
    linktree: 'https://linktr.ee/savva.cafe2',              // ссылка из био Instagram
    tiktok: 'https://www.tiktok.com/@savva_cafe',
    coords: '24.4926931, 39.5797816',
    phone: '+966 50 000 0000',           // TODO: реальный номер
    phoneHref: 'tel:+966500000000',      // TODO: реальный номер
    email: 'hello@savva.cafe',           // TODO: реальный e-mail
  },

  /* ---------- Часы работы (TODO: подтвердить) ---------- */
  hours: [
    { key: 'sunThu', en: 'Sunday – Thursday', ar: 'الأحد – الخميس', time: '07:00 — 01:00' },
    { key: 'fri',    en: 'Friday',            ar: 'الجمعة',        time: '13:30 — 01:00' },
    { key: 'sat',    en: 'Saturday',          ar: 'السبت',         time: '07:00 — 01:00' },
  ],

  /* ---------- Меню ---------- */
  menuCategories: [
    { id: 'espresso', en: 'Espresso bar', ar: 'بار الإسبريسو' },
    { id: 'brew',     en: 'Filter & brew', ar: 'التخمير والفلتر' },
    { id: 'cold',     en: 'Cold drinks',   ar: 'مشروبات باردة' },
    { id: 'bakery',   en: 'Bakery',        ar: 'المخبوزات' },
    { id: 'food',     en: 'Bites',         ar: 'مأكولات' },
  ],

  // price — цена в риалах (SAR). TODO: заменить на реальные цены.
  menu: [
    { cat:'espresso', img:'espresso.svg',  price:12, tag:null,
      en:{n:'Espresso', d:'Single origin, 25 sec extraction, chocolate & citrus.'},
      ar:{n:'إسبريسو', d:'أصل واحد، استخلاص ٢٥ ثانية، شوكولاتة وحمضيات.'} },
    { cat:'espresso', img:'cortado.svg',  price:15, tag:null,
      en:{n:'Cortado', d:'Double ristretto with a thin layer of warm milk.'},
      ar:{n:'كورتادو', d:'ريستريتو مزدوج مع طبقة رقيقة من الحليب الدافئ.'} },
    { cat:'espresso', img:'cappuccino.svg',  price:17, tag:'popular',
      en:{n:'Cappuccino', d:'Velvet microfoam, balanced and sweet. Our bestseller.'},
      ar:{n:'كابتشينو', d:'رغوة حريرية، متوازن وحلو. الأكثر طلباً لدينا.'} },
    { cat:'espresso', img:'flatwhite.svg',  price:17, tag:null,
      en:{n:'Flat White', d:'Ristretto base, silky milk, intense coffee finish.'},
      ar:{n:'فلات وايت', d:'قاعدة ريستريتو، حليب حريري، نهاية قهوة مركّزة.'} },

    { cat:'brew', img:'brew-v60.svg', price:22, tag:'signature',
      en:{n:'V60', d:'Hand poured, 1:16 ratio. Ask the barista for today’s lot.'},
      ar:{n:'V60', d:'تحضير يدوي بنسبة ١:١٦. اسأل الباريستا عن محصول اليوم.'} },
    { cat:'brew', img:'beans.svg', price:14, tag:null,
      en:{n:'Coffee of the Day', d:'Batch brew that changes with every new roast.'},
      ar:{n:'قهوة اليوم', d:'تخمير الدفعة يتغيّر مع كل تحميص جديد.'} },
    { cat:'brew', img:'filter-cups.svg', price:24, tag:null,
      en:{n:'Chemex', d:'Clean, tea-like cup for two. Best with washed beans.'},
      ar:{n:'كيمكس', d:'فنجان نقي يشبه الشاي، يكفي لشخصين. الأفضل مع حبوب مغسولة.'} },

    { cat:'cold', img:'coffee-iced.svg', price:19, tag:'popular',
      en:{n:'Freddo', d:'Shaken espresso over ice, bright and refreshing.'},
      ar:{n:'الفريدو', d:'إسبريسو مخفوق على الثلج، منعش ومشرق.'} },
    { cat:'cold', img:'coffee-iced.svg', price:18, tag:null,
      en:{n:'Iced Latte', d:'Cold milk, double shot, soft caramel sweetness.'},
      ar:{n:'آيس لاتيه', d:'حليب بارد، جرعتان، حلاوة كراميل ناعمة.'} },
    { cat:'cold', img:'coffee-iced.svg', price:20, tag:null,
      en:{n:'Iced Spanish Latte', d:'Condensed milk, espresso, a lot of ice.'},
      ar:{n:'آيس سبانيش لاتيه', d:'حليب مكثّف، إسبريسو، وكثير من الثلج.'} },

    { cat:'cold', img:'matcha-berry.svg', price:26, tag:'signature',
      en:{n:'Matcha Berry', d:'Ceremonial matcha over a berry compote layer.'},
      ar:{n:'ماتشا بيري', d:'ماتشا احتفالية فوق طبقة من كومبوت التوت.'} },
    { cat:'cold', img:'melon.svg', price:24, tag:'signature',
      en:{n:'Savva Melon', d:'Our seasonal cantaloupe cooler — sweet and light.'},
      ar:{n:'شمام سافا', d:'مشروب الشمام الموسمي — حلو وخفيف.'} },
    { cat:'cold', img:'berry.svg', price:23, tag:null,
      en:{n:'Berry Refresher', d:'Cold-pressed berries, citrus and sparkling water.'},
      ar:{n:'منعش التوت', d:'توت معصور على البارد مع حمضيات وماء فوار.'} },

    { cat:'food', img:'sandwich.svg', price:28, tag:null,
      en:{n:'Turkey & Cheese Sandwich', d:'Seeded bread, smoked turkey, cheddar, greens.'},
      ar:{n:'ساندويتش الديك الرومي والجبن', d:'خبز بالحبوب، ديك رومي مدخّن، شيدر، وخضار.'} },
    { cat:'food', img:'sandwich.svg', price:26, tag:null,
      en:{n:'Avocado Toast', d:'Sourdough, smashed avocado, lemon and chili flakes.'},
      ar:{n:'توست الأفوكادو', d:'خبز العجين المخمّر، أفوكادو مهروس، ليمون ورقائق فلفل.'} },

    { cat:'bakery', img:'cheesecake.svg', price:24, tag:'popular',
      en:{n:'Blueberry Cheesecake', d:'Baked daily, berry top, biscuit base.'},
      ar:{n:'تشيز كيك التوت', d:'يُخبز يومياً، توت طازج وقاعدة بسكويت.'} },
    { cat:'bakery', img:'cinnamon.svg', price:20, tag:null,
      en:{n:'Pecan Cinnamon Roll', d:'Warm roll, cinnamon butter and pecans.'},
      ar:{n:'سينابون البيكان', d:'رول دافئ بزبدة القرفة والبيكان.'} },
    { cat:'bakery', img:'cinnamon.svg', price:22, tag:null,
      en:{n:'Berry Tart', d:'Vanilla cream, fresh raspberry and blueberry.'},
      ar:{n:'تارت التوت', d:'كريمة فانيليا مع توت أحمر وأزرق طازج.'} },
  ],

  /* ---------- Галерея ---------- */
  gallery: [
    { img:'interior.svg',    en:'Seating area', ar:'منطقة الجلوس' },
    { img:'cappuccino.svg',  en:'Latte art',    ar:'فن اللاتيه' },
    { img:'cheesecake.svg',  en:'Cheesecake',   ar:'تشيز كيك' },
    { img:'brew-v60.svg',    en:'Brew bar',     ar:'بار التخمير' },
    { img:'coffee-iced.svg', en:'Cold menu',    ar:'المشروبات الباردة' },
    { img:'beans.svg',       en:'Our beans',    ar:'حبوبنا' },
    { img:'filter-cups.svg', en:'Filter bar',   ar:'بار الفلتر' },
    { img:'matcha-berry.svg',en:'Matcha Berry', ar:'ماتشا بيري' },
    { img:'sandwich.svg',    en:'Bites',        ar:'مأكولات' },
  ],
};

/* ---------- Переводы интерфейса ---------- */
const I18N = {
  en: {
    dir:'ltr', langName:'العربية', htmlLang:'en',
    'meta.title':'SAVVA — Specialty Coffee in Madinah',
    'nav.menu':'Menu', 'nav.about':'About', 'nav.gallery':'Gallery', 'nav.visit':'Visit', 'nav.contact':'Contact',
    'hero.badge':'Specialty coffee · Madinah',
    'hero.title':'A day in SAVVA is what you need',
    'hero.text':'Carefully sourced beans, slow brewing and pastry baked the same morning — in the heart of Sultanah district.',
    'hero.cta1':'View the menu', 'hero.cta2':'Get directions',
    'hero.scroll':'Scroll',
    'stats.roast':'Fresh roast', 'stats.roastV':'Weekly',
    'stats.brew':'Brew methods', 'stats.brewV':'V60 · Chemex · Batch',
    'stats.open':'Open daily', 'stats.openV':'Till late',
    'about.kicker':'About us',
    'about.title':'Coffee made with intention',
    'about.p1':'SAVVA is a specialty coffee house in Madinah. We roast light, brew slow and serve every cup the way it tastes best — no shortcuts, no burnt espresso.',
    'about.p2':'The room is built for staying: soft seats, quiet music, fast Wi‑Fi and a terrace that catches the evening breeze.',
    'about.f1':'Single origin beans', 'about.f1d':'Rotating lots from Ethiopia, Colombia and Yemen.',
    'about.f2':'Fresh bakery', 'about.f2d':'Cheesecakes and cinnamon rolls baked every morning.',
    'about.f3':'Work friendly', 'about.f3d':'Fast Wi‑Fi, sockets at every table, calm corners.',
    'about.f4':'Terrace seating', 'about.f4d':'Outdoor tables, open until late every night.',
    'menu.kicker':'The menu',
    'menu.title':'What we pour',
    'menu.note':'Prices in SAR. Ask the barista about today’s single origin.',
    'menu.popular':'Popular', 'menu.signature':'Signature',
    'menu.cta':'Full menu via QR in the café',
    'menu.full':'All links & full menu',
    'gallery.kicker':'Gallery', 'gallery.title':'Inside SAVVA',
    'visit.kicker':'Visit us', 'visit.title':'Find us in Sultanah',
    'visit.address':'Omeir Ibn Al Hareth St, Sultanah, Madinah, Saudi Arabia',
    'visit.addressLabel':'Address', 'visit.hoursLabel':'Opening hours', 'visit.contactLabel':'Contact',
    'visit.map':'Open in Google Maps', 'visit.copy':'Copy coordinates', 'visit.copied':'Copied!',
    'contact.kicker':'Say hello', 'contact.title':'Book a table or ask us anything',
    'contact.name':'Your name', 'contact.phone':'Phone or e‑mail', 'contact.msg':'Message',
    'contact.send':'Send message', 'contact.sent':'Thank you! We will reply soon.',
    'contact.err':'Please fill in your name and contact.',
    'contact.hint':'We usually answer within a few hours.',
    'footer.tag':'Specialty coffee · Madinah',
    'footer.rights':'All rights reserved.',
    'footer.built':'Made with care.',
    'a11y.toggleMenu':'Open menu', 'a11y.toggleLang':'Switch to Arabic',
  },
  ar: {
    dir:'rtl', langName:'English', htmlLang:'ar',
    'meta.title':'سافا — قهوة مختصة في المدينة المنورة',
    'nav.menu':'المنيو', 'nav.about':'عنّا', 'nav.gallery':'المعرض', 'nav.visit':'زورونا', 'nav.contact':'تواصل',
    'hero.badge':'قهوة مختصة · المدينة المنورة',
    'hero.title':'يومٌ في سافا هو ما تحتاجه',
    'hero.text':'حبوب مختارة بعناية، تخمير على مهل، ومخبوزات طازجة من الصباح ذاته — في قلب حي سلطانة.',
    'hero.cta1':'تصفّح المنيو', 'hero.cta2':'الوصول إلينا',
    'hero.scroll':'مرّر للأسفل',
    'stats.roast':'تحميص طازج', 'stats.roastV':'أسبوعياً',
    'stats.brew':'طرق التخمير', 'stats.brewV':'V60 · كيمكس · دفعة',
    'stats.open':'مفتوح يومياً', 'stats.openV':'حتى وقت متأخر',
    'about.kicker':'من نحن',
    'about.title':'قهوة تُحضَّر بنيّة صافية',
    'about.p1':'سافا بيت قهوة مختصة في المدينة المنورة. نحمّص فاتحاً، ونخمّر على مهل، ونقدّم كل فنجان بأفضل ما يكون — بلا اختصارات ولا إسبريسو محروق.',
    'about.p2':'المكان مصمَّم للبقاء: مقاعد مريحة، موسيقى هادئة، إنترنت سريع، وتراس يلتقط نسيم المساء.',
    'about.f1':'حبوب أصل واحد', 'about.f1d':'محاصيل متجددة من إثيوبيا وكولومبيا واليمن.',
    'about.f2':'مخبوزات طازجة', 'about.f2d':'تشيز كيك وسينابون يُخبز كل صباح.',
    'about.f3':'مناسب للعمل', 'about.f3d':'إنترنت سريع، مقابس عند كل طاولة، وزوايا هادئة.',
    'about.f4':'جلسات خارجية', 'about.f4d':'طاولات في التراس، مفتوحة حتى وقت متأخر.',
    'menu.kicker':'المنيو',
    'menu.title':'ماذا نقدّم',
    'menu.note':'الأسعار بالريال السعودي. اسأل الباريستا عن أصل اليوم.',
    'menu.popular':'الأكثر طلباً', 'menu.signature':'مميّز',
    'menu.cta':'المنيو الكامل عبر رمز QR داخل الكافيه',
    'menu.full':'كل الروابط والمنيو الكامل',
    'gallery.kicker':'المعرض', 'gallery.title':'داخل سافا',
    'visit.kicker':'زورونا', 'visit.title':'تجدوننا في سلطانة',
    'visit.address':'شارع عمير بن الحارث، حي سلطانة، المدينة المنورة، السعودية',
    'visit.addressLabel':'العنوان', 'visit.hoursLabel':'ساعات العمل', 'visit.contactLabel':'للتواصل',
    'visit.map':'افتح في خرائط جوجل', 'visit.copy':'نسخ الإحداثيات', 'visit.copied':'تم النسخ!',
    'contact.kicker':'سلّم علينا', 'contact.title':'احجز طاولة أو اسألنا عن أي شيء',
    'contact.name':'الاسم', 'contact.phone':'الجوال أو البريد', 'contact.msg':'الرسالة',
    'contact.send':'إرسال', 'contact.sent':'شكراً لك! سنرد قريباً.',
    'contact.err':'يرجى تعبئة الاسم ووسيلة التواصل.',
    'contact.hint':'عادةً نرد خلال ساعات قليلة.',
    'footer.tag':'قهوة مختصة · المدينة المنورة',
    'footer.rights':'جميع الحقوق محفوظة.',
    'footer.built':'صُنع بعناية.',
    'a11y.toggleMenu':'فتح القائمة', 'a11y.toggleLang':'التبديل إلى الإنجليزية',
  },
};
