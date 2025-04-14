import { useState, useEffect } from 'react';
import axios from 'axios';
import { textStyles } from '../config/design';

export default function PrayerTimes() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hijriDate, setHijriDate] = useState(null);

  // Thonon-les-Bains coordinates
  const LATITUDE = 46.3705;
  const LONGITUDE = 6.4784;

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.aladhan.com/v1/timings', {
          params: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            method: 4, // Umm Al-Qura University, Makkah
            adjustment: 1, // Daylight Savings adjustment
          }
        });

        if (response.data?.data) {
          const { timings, date } = response.data.data;
          setPrayerTimes({
            fajr: timings.Fajr,
            dohr: timings.Dhuhr,
            asr: timings.Asr,
            maghrib: timings.Maghrib,
            icha: timings.Isha
          });
          setHijriDate(date.hijri);
        }
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('fr-FR', options);
  };

  const prayerTimesConfig = [
    { 
      name: 'FAJR',
      key: 'fajr',
      arabic: 'الفجر',
      bgColor: 'bg-[#8B6F47]',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V7h-1a1 1 0 1 1 0-2h1V4a1 1 0 0 1 1-1z"/>
          <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10z"/>
        </svg>
      )
    },
    {
      name: 'DOHR',
      key: 'dohr',
      arabic: 'الظهر',
      bgColor: 'bg-[#E6C86E]',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2m0 16v2M2 12h2m16 0h2"/>
        </svg>
      )
    },
    {
      name: 'ASR',
      key: 'asr',
      arabic: 'العصر',
      bgColor: 'bg-[#6B7FA3]',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z"/>
          <path d="M12 7v5l3 3"/>
        </svg>
      )
    },
    {
      name: 'MAGHRIB',
      key: 'maghrib',
      arabic: 'المغرب',
      bgColor: 'bg-[#A15B4C]',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
          <path d="M12 16a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4z"/>
        </svg>
      )
    },
    {
      name: 'ICHA',
      key: 'icha',
      arabic: 'العشاء',
      bgColor: 'bg-[#2C3440]',
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4 text-white">
          HORAIRES DES PRIÈRES (15°)
        </h2>
        <p className="text-xl text-white mb-2">
          {formatDate(currentDate)}
        </p>
        {hijriDate && (
          <p className="text-xl text-white">
            {hijriDate.day} {hijriDate.month.ar} {hijriDate.year}
          </p>
        )}
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 shadow-xl rounded-lg overflow-hidden">
          {prayerTimesConfig.map((prayer, index) => (
            <div
              key={index}
              className={`${prayer.bgColor} p-8 text-white flex flex-col items-center justify-center`}
            >
              <div className="mb-4">
                {prayer.icon}
              </div>
              
              <div className="text-center mb-2">
                <div className="text-2xl font-bold mb-1">
                  {prayer.name}
                </div>
                <div className="text-xl font-amiri">
                  {prayer.arabic}
                </div>
              </div>
              
              <div className="text-4xl font-bold">
                {prayerTimes ? prayerTimes[prayer.key] : '--:--'}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}