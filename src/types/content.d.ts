export interface PrayerTime {
  id: number;
  name: string;
  time: string;
  arabic: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  type: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface MosqueProject {
  id: number;
  title: string;
  description: string;
  features: {
    id: number;
    text: string;
  }[];
  bankDetails: {
    accountHolder: string;
    bank: string;
    iban: string;
    bic: string;
  };
}