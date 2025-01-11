export const mockData = {
  'prayer-times': [
    { id: 1, name: 'Fajr', time: '06:46', arabic: 'الفجر' },
    { id: 2, name: 'Sunrise', time: '08:16', arabic: 'الشروق' },
    { id: 3, name: 'Dhuhr', time: '12:41', arabic: 'الظهر' },
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
      description: 'Apprentissage de la langue arabe pour tous les niveaux, du débutant à l\'avancé. Cours adaptés aux enfants et aux adultes.',
      icon: '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/></svg>'
    },
    {
      id: 2,
      title: 'École Coranique',
      description: 'Enseignement du Coran avec tajwid pour enfants et adultes. Mémorisation et compréhension des versets.',
      icon: '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/></svg>'
    },
    {
      id: 3,
      title: 'Conférences',
      description: 'Conférences régulières sur des thèmes variés : religion, société, culture et histoire islamique.',
      icon: '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/></svg>'
    },
    {
      id: 4,
      title: 'Activités Jeunesse',
      description: 'Activités éducatives et récréatives pour les jeunes : sports, sorties culturelles et ateliers créatifs.',
      icon: '<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20"><path d="M13 5a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0V9H9a1 1 0 110-2h3V6a1 1 0 011-1zm-7 4a1 1 0 011 1v1h1a1 1 0 110 2H8v1a1 1 0 11-2 0v-1H5a1 1 0 110-2h1V9a1 1 0 011-1z"/></svg>'
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