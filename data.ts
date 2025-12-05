import { ActivityType, DaySchedule } from './types';

export const ITINERARY_DATA: DaySchedule[] = [
  {
    id: 'day1',
    date: '16 Aralık Salı',
    title: 'Tarih, Kiliseler ve Alışveriş',
    items: [
      {
        id: 'd1-lunch',
        time: 'Öğle',
        title: 'La Mala Branch (Öğle Yemeği)',
        description: 'Otele sadece 5-6 dk yürüme mesafesinde. Güne hızlı ve lezzetli başlamak için ideal.',
        price: '4.5€ - 6.5€',
        type: ActivityType.FOOD,
        tips: ['Bagel ve sandviçleri çok meşhur.']
      },
      {
        id: 'd1-cathedral',
        title: 'Sevilla Katedrali & Giralda Kulesi',
        description: 'Dünyanın en büyük gotik katedrali. Kristof Kolomb\'un mezarı burada.',
        location: 'Otel yanı',
        price: '~13-14€',
        type: ActivityType.SIGHTSEEING,
        tips: [
          'Mutlaka bileti online al, kapıda sıra çok uzun.',
          'Biletini sakla! El Salvador Kilisesi\'ne bununla ücretsiz gireceksin.',
          'Giralda Kulesi\'ne rampa ile çıkılıyor, merdiven yok.'
        ]
      },
      {
        id: 'd1-shopping',
        title: 'Calle Sierpes & Calle Tetuán Alışverişi',
        description: 'Üstü tentelerle kapalı ana alışveriş caddeleri. İspanyol markaları (Zara, Mango vs.) burada.',
        location: 'Katedralden kuzeye doğru',
        type: ActivityType.SHOPPING,
        tips: [
          'Ale-Hop mağazasını (inek logolu) bul. Uygun fiyatlı eğlenceli hediyelikler var.'
        ]
      },
      {
        id: 'd1-salvador',
        title: 'Iglesia del Salvador (El Salvador Kilisesi)',
        description: 'Barok mimarinin zirvesi.',
        location: 'Alışveriş caddelerinin yanı',
        price: 'Ücretsiz (Katedral bileti ile)',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd1-metropol',
        title: 'Metropol Parasol (Las Setas)',
        description: 'Dev mantar şeklindeki ahşap yapı. Altında arkeolojik kalıntılar var.',
        location: 'Kuzey bölgesi',
        price: '15€',
        type: ActivityType.SIGHTSEEING,
        tips: ['Gün batımına yakın üzerine çıkıp şehri tepeden izleyebilirsin.']
      },
      {
        id: 'd1-dinner',
        time: 'Akşam',
        title: 'El Rinconcillo (Akşam Yemeği)',
        description: '1670\'ten beri açık, İspanya\'nın en eski barı.',
        location: 'Las Setas yakını',
        price: 'Tapaslar 3-4€',
        type: ActivityType.FOOD,
        tips: ['Yer bulamazsan bile ayakta bir şeyler atıştırıp atmosferi solumalısın.']
      }
    ]
  },
  {
    id: 'day2',
    date: '17 Aralık Çarşamba',
    title: 'Saraylar, Parklar ve Flamenko',
    items: [
      {
        id: 'd2-alcazar',
        time: '09:30',
        title: 'Real Alcázar Sarayı',
        description: 'Game of Thrones (Dorne) çekildiği yer. Devasa bahçeler ve saray.',
        location: 'Otel yakını',
        price: '~15€',
        type: ActivityType.SIGHTSEEING,
        tips: [
          'Bileti kesinlikle önceden online al!',
          'Gezmesi en az 2-3 saat sürer.'
        ]
      },
      {
        id: 'd2-santacruz',
        title: 'Barrio Santa Cruz & Öpücük Sokağı',
        description: 'Dar sokaklar, beyaz evler. Balkonların birbirine değdiği Calle de los Besos burada.',
        location: 'Saray çıkışı',
        type: ActivityType.SIGHTSEEING,
        tips: ['El yapımı seramik ve yelpaze alışverişi için uygun.']
      },
      {
        id: 'd2-duenas',
        title: 'Palacio de las Dueñas (Opsiyonel)',
        description: 'Çok estetik, çiçeklerle dolu bir avlusu var. "Cennetten bir bahçe".',
        type: ActivityType.SIGHTSEEING,
        isBonus: true,
        tips: ['Alcázar\'dan sonra yorulduysan pas geçebilirsin.']
      },
      {
        id: 'd2-lunch',
        time: 'Öğle',
        title: '100 Montaditos (Fırsat!)',
        description: 'Çarşamba günleri menüdeki sandviçler 1€\'ya düşüyor.',
        location: 'Plaza de España yakını veya merkez',
        price: 'Kişi başı 5-7€',
        type: ActivityType.FOOD,
        tips: ['Çarşamba indirimini kaçırma!']
      },
      {
        id: 'd2-plaza',
        title: 'Plaza de España & Maria Luisa Parkı',
        description: 'Star Wars\'un çekildiği meşhur yarım daire meydan.',
        type: ActivityType.SIGHTSEEING,
        tips: ['Seramik banklarda fotoğraf çekil.', 'Parkta yürüyüş yap.']
      },
      {
        id: 'd2-river',
        title: 'Nehir Kenarı & Torre del Oro',
        description: 'Altın Kule dışarıdan görülebilir.',
        location: 'Nehir kenarı',
        price: '3€ (İçeri girersen)',
        type: ActivityType.SIGHTSEEING
      },
      {
        id: 'd2-flamenko',
        time: 'Akşam',
        title: 'Teatro Flamenco Sevilla',
        description: 'Sadece dans odaklı profesyonel şov.',
        price: 'Kapıda 20€ / Online 25€',
        type: ActivityType.ENTERTAINMENT
      },
      {
        id: 'd2-dinner',
        title: 'Bodega Palo Santo (Akşam Yemeği)',
        description: 'Boğa kuyruğu ve kızartma ahtapot meşhur.',
        price: '12-16€ civarı',
        type: ActivityType.FOOD
      }
    ]
  },
  {
    id: 'day3',
    date: '18 - 20 Aralık',
    title: 'Dönüş ve Lojistik',
    items: [
      {
        id: 'd3-train',
        time: '18 Aralık 10:11',
        title: 'Madrid Treni',
        description: 'Otelden Santa Justa Tren İstasyonu\'na geçiş.',
        type: ActivityType.TRANSPORT,
        tips: ['En az 45 dk önce taksiye bin.', 'Yürünecek mesafe değil.']
      },
      {
        id: 'd3-return',
        time: '20 Aralık 09:54',
        title: 'Sevilla\'ya Varış & Havalimanı Transferi',
        description: 'Madrid treninden inip direkt havalimanına geçiş.',
        type: ActivityType.TRANSPORT,
        tips: [
          'Şehre hiç girme.',
          'Trenden inince direkt taksi veya otobüs ile havalimanına geç.',
          'Uçak saati: 13:25'
        ]
      }
    ]
  }
];