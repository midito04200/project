export const mockData = {
  'prayer-times': [
    { id: 1, name: 'Fajr', time: '06:46', arabic: 'الفجر' },
    { id: 2, name: 'Sunrise', time: '08:16', arabic: 'الشروق' },
    { id: 3, name: 'Dhuhr', time: '13:00', arabic: 'الظهر' },
    { id: 4, name: 'Asr', time: '15:22', arabic: 'العصر' },
    { id: 5, name: 'Maghrib', time: '17:07', arabic: 'المغرب' },
    { id: 6, name: 'Isha', time: '18:37', arabic: 'العشاء' }
  ],
  'events': [
    {
      id: 1,
      title: 'Ramadan 1445',
      date: '11 Mars 2024',
      description: 'Le mois sacré du Ramadan commence le 11 mars 2024, sous réserve de l\'observation du croissant lunaire.'
    },
    {
      id: 2,
      title: 'Aïd al-Fitr',
      date: '10 Avril 2024',
      description: 'La fête marquant la fin du Ramadan, célébrée par la prière de l\'Aïd et les festivités communautaires.'
    }
  ],
  'activities': [
    {
      id: 1,
      title: 'Cours d\'Arabe',
      description: 'Apprentissage de la langue arabe pour tous les niveaux',
      iconKey: 'prayer'
    },
    {
      id: 2,
      title: 'École Coranique',
      description: 'Enseignement du Coran avec tajwid pour enfants et adultes',
      iconKey: 'quran'
    },
    {
      id: 3,
      title: 'Conférences',
      description: 'Conférences régulières sur des thèmes variés',
      iconKey: 'conference'
    },
    {
      id: 4,
      title: 'Activités Jeunesse',
      description: 'Activités éducatives et récréatives pour les jeunes',
      iconKey: 'youth'
    }
  ],
  'mosque-project': {
    id: 1,
    title: 'Projet Nouvelle Mosquée',
    description: 'Un nouveau lieu de culte moderne et spacieux pour notre communauté',
    features: [
      { id: 1, text: 'Surface totale : 1000m²' },
      { id: 2, text: 'Capacité d\'accueil : 500 personnes' }
    ],
    bankDetails: {
      accountHolder: 'ASSOC. LES MUSULMANS DE THONON',
      bank: 'CA DES SAVOIE - THONON CONCORDE',
      iban: 'FR76 1810 6000 4896 7237 7517 275',
      bic: 'AGRIFRPP881'
    }
  }
};