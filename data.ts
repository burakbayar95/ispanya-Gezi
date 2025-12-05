import { ActivityType, DaySchedule, Ticket } from './types';

export const ITINERARY_DATA: DaySchedule[] = [
  {
    id: 'day1',
    date: '16 Aralık Salı',
    title: 'Tarih, Alışveriş ve İlk Noel Işıkları',
    items: [
      {
        id: 'd1-lunch',
        time: '12:00',
        title: 'Öğle Yemeği: La Mala Branch',
        description: 'Otele 5-6 dk yürüme mesafesinde. Bagel ve sandviçleri meşhur.',
        location: 'La Mala Branch',
        price: '4.5€ - 6.5€',
        type: ActivityType.FOOD,
        tips: ['Kahvaltı ve öğle yemeği için uygun.']
      },
      {
        id: 'd1-cathedral',
        time: '13:30',
        title: 'Sevilla Katedrali & Giralda Kulesi',
        description: 'Kristof Kolomb\'un mezarı burada. Kuleye rampa ile çıkılıyor.',
        location: 'Otel yanı',
        price: '13-14€',
        type: ActivityType.SIGHTSEEING,
        tips: ['Biletini online al, kapıda kuyruk olur.', 'Bu bileti sakla, Iglesia del Salvador\'a ücretsiz giriş sağlar.']
      },
      {
        id: 'd1-shopping',
        time: '15:30',
        title: 'Calle Sierpes & Calle Tetuán (Alışveriş)',
        description: 'Üstü tenteli alışveriş caddeleri. Zara, Mango, Pull&Bear gibi mağazalar.',
        location: 'Katedral kuzeyi',
        type: ActivityType.SHOPPING,
        tips: ['Ale-Hop mağazasına uğra (İnek logolu, ucuz hediyelik).']
      },
      {
        id: 'd1-xmas-belen',
        time: '17:00',
        title: 'Feria del Belén (Noel Pazarı)',
        description: 'İspanyolların meşhur "Noel Doğuş Sahneleri" (biblolar, evler) satılır.',
        location: 'Katedral ile Archivo de Indias arası',
        type: ActivityType.CHRISTMAS_MARKET
      },
      {
        id: 'd1-xmas-crafts',
        time: '18:00',
        title: 'Mercado de Artesanía (El Sanatları Pazarı)',
        description: 'Kaliteli hediyelikler ve takılar.',
        location: 'Plaza Nueva',
        type: ActivityType.CHRISTMAS_MARKET
      },
      {
        id: 'd1-salvador',
        title: 'Iglesia del Salvador (Opsiyonel)',
        description: 'Barok mimarinin zirvesi. Katedral biletinle ücretsiz.',
        location: 'Alışveriş caddelerine yakın',
        price: 'Ücretsiz (Katedral biletiyle)',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd1-metropol',
        title: 'Metropol Parasol (Opsiyonel)',
        description: 'Dev mantar yapı. Gün batımında manzara izlemek istersen.',
        location: 'Las Setas',
        price: '15€',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd1-dinner',
        time: 'Akşam',
        title: 'Akşam Yemeği: El Rinconcillo',
        description: '1670\'ten beri açık en eski bar. Atmosferi için tapas yenir.',
        location: 'El Rinconcillo',
        price: '3-4€ (Tapas)',
        type: ActivityType.FOOD
      }
    ]
  },
  {
    id: 'day2',
    date: '17 Aralık Çarşamba',
    title: 'Saraylar, Parklar ve 1€ Şenliği',
    items: [
      {
        id: 'd2-alcazar',
        time: '09:30',
        title: 'Real Alcázar Sarayı (Günün Yıldızı)',
        description: 'Game of Thrones (Dorne) çekildi. Bahçeleri büyüleyici.',
        location: 'Real Alcázar',
        price: '~15€',
        type: ActivityType.SIGHTSEEING,
        tips: ['Biletini şimdiden online al!', 'Gezmesi en az 2-3 saat sürer.']
      },
      {
        id: 'd2-santacruz',
        time: '12:30',
        title: 'Barrio Santa Cruz & Öpücük Sokağı',
        description: 'Saray çıkışı dar sokaklara dal. "Calle de los Besos"u bul.',
        location: 'Barrio Santa Cruz',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd2-lunch',
        time: '13:30',
        title: 'Öğle Yemeği: 100 Montaditos (FIRSAT!)',
        description: 'Çarşamba günleri menüdeki neredeyse her şey 1€.',
        location: 'Plaza de España yakını',
        price: '1€/parça',
        type: ActivityType.FOOD,
        tips: ['10€\'ya masayı donatırsın.']
      },
      {
        id: 'd2-plaza',
        time: '15:00',
        title: 'Plaza de España',
        description: 'Star Wars çekilen devasa meydan. Seramiklerde illeri bul.',
        location: 'Plaza de España',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd2-xmas-park',
        time: '16:30',
        title: 'Prado de San Sebastián (Navidad Park)',
        description: 'Noel Eğlence Parkı. Dönme dolap, buz pisti, yemek stantları.',
        location: 'Plaza de España\'ya 5 dk',
        type: ActivityType.CHRISTMAS_MARKET,
        tips: ['Akşamüstü gitmek harikadır.']
      },
      {
        id: 'd2-duenas',
        title: 'Palacio de las Dueñas (Opsiyonel)',
        description: 'Çiçeklerle dolu, şiir gibi bir saray. "Cennet bahçesi".',
        location: 'Palacio de las Dueñas',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd2-torre',
        title: 'Torre del Oro (Opsiyonel)',
        description: 'Nehir kenarında yürüyüş ve gün batımı.',
        location: 'Nehir kenarı',
        type: ActivityType.SIGHTSEEING,
        isOptional: true
      },
      {
        id: 'd2-flamenco',
        time: 'Akşam',
        title: 'Teatro Flamenco Sevilla',
        description: 'Sadece dans odaklı profesyonel şov.',
        price: '20-25€',
        type: ActivityType.ENTERTAINMENT
      }
    ]
  },
  {
    id: 'day3',
    date: '18 Aralık Perşembe',
    title: 'Madrid\'e Geçiş & Noel Pazarları',
    items: [
      {
        id: 'd3-taxi',
        time: '09:00',
        title: 'Taksi ile İstasyona',
        description: 'Otelden Santa Justa Tren İstasyonu\'na geç.',
        type: ActivityType.TRANSPORT,
        tips: ['Yürüme mesafesi değil, taksi kullan.']
      },
      {
        id: 'd3-train',
        time: '10:11',
        title: 'Tren: Sevilla -> Madrid',
        description: 'Madrid\'e hareket.',
        type: ActivityType.TRANSPORT
      },
      {
        id: 'd3-hotel',
        time: '13:00',
        title: 'Otele Yerleşme: OLBLANC Plaza de España',
        description: 'Konumun efsane, tam Noel pazarının önü.',
        location: 'Madrid',
        type: ActivityType.TRANSPORT
      },
      {
        id: 'd3-xmas-hotel',
        time: '14:00',
        title: 'La Navideña (Noel Pazarı)',
        description: 'Otelinin önünde kurulan dev Noel pazarı ve buz pisti.',
        location: 'Plaza de España',
        type: ActivityType.CHRISTMAS_MARKET
      },
      {
        id: 'd3-xmas-mayor',
        time: '16:00',
        title: 'Plaza Mayor Noel Pazarı',
        description: 'Madrid\'in en klasik Noel pazarı.',
        location: '15 dk yürüme mesafesi',
        type: ActivityType.CHRISTMAS_MARKET,
        tips: ['Kalamar ekmek (Bocadillo de Calamares) yemeyi unutma.']
      }
    ]
  },
  {
    id: 'day4',
    date: '20 Aralık Cumartesi',
    title: 'Dönüş (KRİTİK UYARI)',
    items: [
      {
        id: 'd4-warning',
        time: '09:54',
        title: '⚠️ ÇOK KRİTİK UYARI: Tren & Uçak Riski',
        description: 'Tren 12:30\'da Sevilla\'ya varıyor, uçak 13:25\'te. Bu çok riskli!',
        type: ActivityType.TRANSPORT,
        tips: [
          'Eğer biletleri almadıysan treni daha erkene çek.',
          'Aldıysan; trenden iner inmez koşarak taksiye bin.',
          'Bavulun kabin boy değilse bagaj teslimi kapanmış olabilir.',
          'Şehre inip gezme şansın o gün kesinlikle yok.'
        ],
        isUrgent: true
      },
      {
        id: 'd4-train',
        time: '09:54',
        title: 'Tren: Madrid -> Sevilla',
        description: 'Sevilla\'ya dönüş.',
        type: ActivityType.TRANSPORT
      },
      {
        id: 'd4-flight',
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