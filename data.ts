import { ActivityType, DaySchedule, Ticket } from './types';

export const ITINERARY_DATA: DaySchedule[] = [
  {
    id: 'day1',
    date: '16 Aralık Salı',
    title: 'Sevilla: Katedral, Alışveriş ve İlk Tapas',
    items: [
      {
        id: 'd1-lunch',
        time: '12:00',
        title: 'Öğle Yemeği: La Mala Branch',
        description: 'Otele 5 dk yürüme mesafesinde. Bagel ve sandviçleri çok meşhur. Hızlı ve lezzetli bir başlangıç.',
        location: 'La Mala Branch Sevilla',
        price: '4.5€ - 6.5€',
        type: ActivityType.FOOD,
        tips: ['Kahvaltı ve öğle yemeği için uygun.']
      },
      {
        id: 'd1-cathedral',
        time: '13:30',
        title: 'Sevilla Katedrali & Giralda Kulesi',
        description: 'Dünyanın en büyük gotik katedrali. Kristof Kolomb\'un mezarı burada. Kuleye rampa ile çıkılıyor.',
        location: 'Catedral de Sevilla',
        price: '13-14€',
        type: ActivityType.SIGHTSEEING,
        tips: ['Mutlaka Online al.', 'Bu bileti sakla, El Salvador Kilisesi\'ne ücretsiz giriş sağlıyor.']
      },
      {
        id: 'd1-shopping',
        time: '15:30',
        title: 'Calle Sierpes & Calle Tetuán (Alışveriş)',
        description: 'Üstü tenteli ikonik caddeler. Zara, Mango ve yerel mağazalar.',
        location: 'Calle Sierpes',
        type: ActivityType.SHOPPING,
        tips: ['Ale-Hop mağazasına uğra (İnek logolu, ucuz ve eğlenceli).']
      },
      {
        id: 'd1-xmas-belen',
        time: '17:00',
        title: 'Feria del Belén (Noel Pazarı)',
        description: 'Katedralin yanında. İspanyolların "Doğuş Sahnesi" (Belen) figürlerinin satıldığı pazar.',
        location: 'Feria del Belén Sevilla',
        type: ActivityType.CHRISTMAS_MARKET
      },
      {
        id: 'd1-cabildo',
        title: 'Plaza del Cabildo (Opsiyonel)',
        description: 'Katedralin arkasında gizli, yarım daire şeklinde muazzam bir meydan. Fotoğraf için harika.',
        location: 'Plaza del Cabildo',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd1-salvador',
        title: 'Iglesia del Salvador (Opsiyonel)',
        description: 'Barok mimari şaheseri. Katedral biletinle giriş Bedava.',
        location: 'Iglesia del Salvador Sevilla',
        price: 'Ücretsiz (Katedral biletiyle)',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd1-dinner',
        time: 'Akşam',
        title: 'Akşam Yemeği: El Rinconcillo',
        description: '1670\'ten beri açık en eski tapas barı. Çok turistik ama atmosferi için ayakta bir tapas yenir.',
        location: 'El Rinconcillo',
        price: '3-4€ (Tapas)',
        type: ActivityType.FOOD
      }
    ]
  },
  {
    id: 'day2',
    date: '17 Aralık Çarşamba',
    title: 'Sevilla: Game of Thrones ve 1€ Şenliği',
    items: [
      {
        id: 'd2-alcazar',
        time: '09:30',
        title: 'Real Alcázar Sarayı',
        description: 'Game of Thrones (Dorne) burada çekildi. Bahçeleri ve tavus kuşları büyüleyici.',
        location: 'Real Alcázar de Sevilla',
        price: '~15€',
        type: ActivityType.SIGHTSEEING,
        tips: ['Biletini şimdiden online al!', 'Gezmesi en az 2-3 saat sürer.']
      },
      {
        id: 'd2-santacruz',
        time: '12:30',
        title: 'Barrio Santa Cruz & Öpücük Sokağı',
        description: 'Saray çıkışında bu mahalleye dal. "Calle de los Besos" balkonların birbirine en yakın olduğu sokak.',
        location: 'Barrio Santa Cruz',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd2-lunch',
        time: '13:30',
        title: 'Öğle Yemeği: 100 Montaditos (FIRSAT!)',
        description: 'Çarşamba günleri menüdeki neredeyse her şey 1€. 10€-15€\'ya masayı donatırsın.',
        location: '100 Montaditos (Plaza de España yakını)',
        price: '1€/parça',
        type: ActivityType.FOOD
      },
      {
        id: 'd2-plaza',
        time: '15:00',
        title: 'Plaza de España (İspanya Meydanı)',
        description: 'Star Wars\'un çekildiği o devasa meydan. Seramiklerde illeri bulup fotoğraf çekil.',
        location: 'Plaza de España',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd2-xmas-park',
        time: '16:30',
        title: 'Prado de San Sebastián (Navidad Park)',
        description: 'Plaza de España\'ya 5 dk. Buz pisti, dönme dolap ve yemek stantlarının olduğu "Noel Eğlence Parkı".',
        location: 'Prado de San Sebastián',
        type: ActivityType.CHRISTMAS_MARKET
      },
      {
        id: 'd2-duenas',
        title: 'Palacio de las Dueñas (Opsiyonel)',
        description: 'Alcázar çok kalabalıksa, burası çiçeklerle dolu daha huzurlu bir saray. "Cennetten bir bahçe".',
        location: 'Palacio de las Dueñas',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd2-metropol',
        title: 'Metropol Parasol (Las Setas) (Opsiyonel)',
        description: 'Gün batımında şehri tepeden izlemek istersen dev mantar yapıya çık.',
        location: 'Setas de Sevilla',
        price: '15€',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd2-flamenco',
        time: 'Akşam',
        title: 'Teatro Flamenco Sevilla',
        description: 'Sadece dans odaklı profesyonel şov. Ardından Bodega Palo Santo\'da yemek yiyebilirsin.',
        location: 'Teatro Flamenco Sevilla',
        price: '20-25€',
        type: ActivityType.ENTERTAINMENT
      }
    ]
  },
  {
    id: 'day3',
    date: '18 Aralık Perşembe',
    title: 'Madrid\'e Varış & Şehrin Kalbi',
    items: [
      {
        id: 'd3-taxi',
        time: '09:00',
        title: 'Taksi ile İstasyona',
        description: 'Sevilla otelden taksiyle istasyona geç.',
        type: ActivityType.TRANSPORT
      },
      {
        id: 'd3-train',
        time: '10:11',
        title: 'Tren Yolculuğu: Sevilla -> Madrid',
        description: 'Madrid\'e hareket (Varış 12:45).',
        type: ActivityType.TRANSPORT
      },
      {
        id: 'd3-hotel',
        time: '13:30',
        title: 'Otele Yerleşme: OLBLANC Plaza de España',
        description: 'Otel tam olayların merkezinde.',
        location: 'OLBLANC Plaza de España',
        type: ActivityType.TRANSPORT
      },
      {
        id: 'd3-granvia',
        time: '14:30',
        title: 'Gran Vía Caddesi',
        description: 'Madrid\'in en meşhur caddesi. Muhteşem binalar ve mağazalarla dolu. Yürüyerek Callao meydanına in.',
        location: 'Gran Vía',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd3-puerta',
        time: '15:30',
        title: 'Puerta del Sol (Güneş Kapısı)',
        description: 'Şehrin kalbi. "Ayı ve Kocayemiş Ağacı" heykeli ve Yılbaşı ağacı burada.',
        location: 'Puerta del Sol',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd3-plazamayor',
        time: '16:30',
        title: 'Plaza Mayor (Ana Meydan)',
        description: 'Madrid\'in en ikonik kare meydanı.',
        location: 'Plaza Mayor Madrid',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd3-food-campana',
        time: '17:00',
        title: 'Atıştırma: La Campana',
        description: 'Meşhur Bocadillo de Calamares (Kalamar Ekmek). Madrid\'e gelip bunu yemeyen dövülür.',
        location: 'Bar La Campana',
        price: '4-5€',
        type: ActivityType.FOOD
      },
      {
        id: 'd3-xmas-mayor',
        time: '17:30',
        title: 'Mercado de Navidad (Plaza Mayor)',
        description: 'Meydanın içi kulübelerle doludur. "Şaka malzemeleri" ve peruklar almak bir gelenektir.',
        location: 'Plaza Mayor',
        type: ActivityType.CHRISTMAS_MARKET
      },
      {
        id: 'd3-xmas-hotel',
        time: 'Akşam',
        title: 'La Navideña (Otelinin Önü!)',
        description: 'Plaza de España\'da kurulan dev Noel pazarı ve buz pisti tam otelinin kapısında. Sıcak şarap içerek kapat.',
        location: 'Plaza de España',
        type: ActivityType.CHRISTMAS_MARKET
      },
      {
        id: 'd3-sanmiguel',
        title: 'Mercado de San Miguel (Opsiyonel)',
        description: 'Plaza Mayor\'un yanında camdan yapılmış gurme pazar. İçerisi görsel şölen.',
        location: 'Mercado de San Miguel',
        type: ActivityType.FOOD,
        isOptional: true
      },
      {
        id: 'd3-debod',
        title: 'Templo de Debod (Opsiyonel)',
        description: 'Oteline 5 dk yürüme mesafesinde Mısır tapınağı. Gün batımında manzara efsanedir.',
        location: 'Templo de Debod',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      }
    ]
  },
  {
    id: 'day4',
    date: '19 Aralık Cuma',
    title: 'Madrid: Kraliyet, Sanat ve Alışveriş',
    items: [
      {
        id: 'd4-palace',
        time: '09:30',
        title: 'Palacio Real (Kraliyet Sarayı)',
        description: 'Avrupa\'nın en büyük saraylarından biri. Dışından ve yanındaki Almudena Katedrali\'nden güzel fotoğraflar çıkar.',
        location: 'Palacio Real de Madrid',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd4-churros',
        time: '11:00',
        title: 'Chocolatería San Ginés (Tatlı Molası)',
        description: '1894\'ten beri açık. "Churros & Sıcak Çikolata" yemek için en ikonik yer.',
        location: 'Chocolatería San Ginés',
        type: ActivityType.FOOD
      },
      {
        id: 'd4-retiro',
        time: '12:30',
        title: 'Retiro Parkı',
        description: 'İçindeki "Kristal Saray" (Palacio de Cristal) göl kenarında harika görünür.',
        location: 'Parque de El Retiro',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd4-shopping',
        time: '15:00',
        title: 'Alışveriş: Primark, Zara, Mango',
        description: 'Gran Vía üzerindeki mağazalar. Primark çok katlı ve ucuz.',
        location: 'Gran Vía',
        type: ActivityType.SHOPPING
      },
      {
        id: 'd4-prado',
        title: 'Prado Müzesi (Opsiyonel)',
        description: 'Dünyanın en iyi sanat müzelerinden biri. Retiro parkına yakındır.',
        location: 'Museo del Prado',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd4-dinner',
        time: 'Akşam',
        title: 'Akşam Yemeği: Takos al Pastor',
        description: 'Gran Vía yakınlarında, önünde hep sıra olan çok ucuz ve lezzetli bir Meksikacı.',
        location: 'Takos al Pastor',
        price: '1.5-2€ (Tane)',
        type: ActivityType.FOOD
      }
    ]
  },
  {
    id: 'day5',
    date: '20 Aralık Cumartesi',
    title: 'Dönüş (KRİTİK UYARI)',
    items: [
      {
        id: 'd5-warning',
        time: '09:54',
        title: '⚠️ ÇOK KRİTİK UYARI: Tren & Uçak Riski',
        description: 'Tren 12:30\'da Sevilla\'ya varıyor, uçak 13:25\'te. Bu çok riskli!',
        type: ActivityType.TRANSPORT,
        tips: [
          'Trenden iner inmez koşarak taksiye bin.',
          'Bavulun kabin boy değilse bagaj teslimi kapanmış olabilir.',
          'Şehre inip gezme şansın o gün kesinlikle yok.'
        ],
        isUrgent: true
      },
      {
        id: 'd5-train',
        time: '09:54',
        title: 'Tren: Madrid -> Sevilla',
        description: 'Sevilla\'ya dönüş (Varış 12:30).',
        type: ActivityType.TRANSPORT
      },
      {
        id: 'd5-flight',
        time: '13:25',
        title: 'Uçak: Sevilla -> İstanbul',
        description: 'Eve dönüş.',
        type: ActivityType.TRANSPORT
      }
    ]
  }
];

export const TICKETS: Ticket[] = [
  {
    id: 't-alcazar',
    title: 'Real Alcázar (Sevilla)',
    url: 'https://www.alcazarsevilla.org',
    description: 'Bunu hemen şimdi al, tükeniyor.',
    isUrgent: true
  },
  {
    id: 't-cathedral',
    title: 'Sevilla Katedrali',
    url: 'https://www.catedraldesevilla.es',
    description: 'Sıra beklememek için al.',
    isUrgent: true
  },
  {
    id: 't-train',
    title: 'Tren Biletleri (Renfe / Iryo)',
    url: 'https://www.renfe.com',
    description: 'Hâlâ almadıysan Renfe veya Iryo uygulamasından al.',
    isUrgent: false
  }
];