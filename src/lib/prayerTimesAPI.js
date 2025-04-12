import axios from 'axios';

// Thonon-les-Bains coordinates
const LATITUDE = 46.3705;
const LONGITUDE = 6.4784;

// API endpoints
const ALADHAN_API = 'https://api.aladhan.com/v1/timings';
const PRAYER_TIMES_API = 'https://api.pray.zone/v2/times/today.json';

/**
 * Fetch prayer times from Aladhan API
 * @returns {Promise<Object>} Prayer times object
 */
export const fetchPrayerTimesFromAladhan = async () => {
  try {
    const date = new Date();
    const response = await axios.get(ALADHAN_API, {
      params: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        method: 2, // Islamic Society of North America (ISNA)
        date: `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
      }
    });

    if (response.data && response.data.data && response.data.data.timings) {
      const { Fajr, Dhuhr, Asr, Maghrib, Isha } = response.data.data.timings;
      return {
        fajr: Fajr,
        dohr: Dhuhr,
        asr: Asr,
        maghrib: Maghrib,
        icha: Isha
      };
    }
    throw new Error('Invalid response format from Aladhan API');
  } catch (error) {
    console.error('Error fetching prayer times from Aladhan:', error);
    return null;
  }
};

/**
 * Fetch prayer times from Pray.Zone API
 * @returns {Promise<Object>} Prayer times object
 */
export const fetchPrayerTimesFromPrayZone = async () => {
  try {
    const response = await axios.get(PRAYER_TIMES_API, {
      params: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        elevation: 372, // Elevation of Thonon-les-Bains in meters
        timeformat: '24h'
      }
    });

    if (response.data && response.data.results && response.data.results.datetime && response.data.results.datetime[0]) {
      const times = response.data.results.datetime[0].times;
      return {
        fajr: times.Fajr,
        dohr: times.Dhuhr,
        asr: times.Asr,
        maghrib: times.Maghrib,
        icha: times.Isha
      };
    }
    throw new Error('Invalid response format from Pray.Zone API');
  } catch (error) {
    console.error('Error fetching prayer times from Pray.Zone:', error);
    return null;
  }
};

/**
 * Fetch prayer times from multiple APIs with fallback
 * @returns {Promise<Object>} Prayer times object
 */
export const fetchPrayerTimes = async () => {
  // Try the first API
  const aladhanTimes = await fetchPrayerTimesFromAladhan();
  if (aladhanTimes) return aladhanTimes;
  
  // If first API fails, try the second API
  const prayZoneTimes = await fetchPrayerTimesFromPrayZone();
  if (prayZoneTimes) return prayZoneTimes;
  
  // If all APIs fail, return fallback times
  return getFallbackPrayerTimes();
};

/**
 * Get fallback prayer times based on the current month
 * @returns {Object} Fallback prayer times
 */
export const getFallbackPrayerTimes = () => {
  const month = new Date().getMonth(); // 0-11
  
  // Simplified prayer times by month (these should be replaced with more accurate data)
  const monthlyTimes = [
    // January
    { fajr: "06:30", dohr: "13:00", asr: "14:45", maghrib: "17:15", icha: "18:45" },
    // February
    { fajr: "06:15", dohr: "13:00", asr: "15:15", maghrib: "17:45", icha: "19:15" },
    // March
    { fajr: "05:45", dohr: "13:00", asr: "15:45", maghrib: "18:15", icha: "19:45" },
    // April
    { fajr: "05:15", dohr: "13:00", asr: "16:15", maghrib: "18:45", icha: "20:15" },
    // May
    { fajr: "04:45", dohr: "13:00", asr: "16:45", maghrib: "19:15", icha: "20:45" },
    // June
    { fajr: "04:30", dohr: "13:00", asr: "17:00", maghrib: "19:45", icha: "21:15" },
    // July
    { fajr: "04:45", dohr: "13:00", asr: "17:00", maghrib: "19:45", icha: "21:15" },
    // August
    { fajr: "05:15", dohr: "13:00", asr: "16:45", maghrib: "19:15", icha: "20:45" },
    // September
    { fajr: "05:45", dohr: "13:00", asr: "16:15", maghrib: "18:45", icha: "20:15" },
    // October
    { fajr: "06:15", dohr: "13:00", asr: "15:45", maghrib: "18:15", icha: "19:45" },
    // November
    { fajr: "06:45", dohr: "13:00", asr: "15:15", maghrib: "17:45", icha: "19:15" },
    // December
    { fajr: "07:15", dohr: "13:00", asr: "14:45", maghrib: "17:15", icha: "18:45" }
  ];
  
  // Return the prayer times for the current month
  return monthlyTimes[month];
};