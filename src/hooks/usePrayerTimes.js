import { useState, useEffect } from 'react';
import { fetchPrayerTimes } from '../lib/prayerTimesAPI';
import { getContent } from '../lib/cms';

/**
 * Custom hook to fetch prayer times from API with fallback to CMS
 * @returns {Object} Prayer times data, loading state, and error
 */
export function usePrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPrayerTimes = async () => {
      try {
        setLoading(true);
        
        // First try to get times from API
        const apiTimes = await fetchPrayerTimes();
        
        if (apiTimes) {
          console.log('Prayer times from API:', apiTimes);
          setPrayerTimes(apiTimes);
          setLoading(false);
          return;
        }
        
        // Fallback to CMS content
        const cmsContent = await getContent('prayer-times');
        
        if (cmsContent) {
          console.log('Prayer times from CMS:', cmsContent);
          setPrayerTimes(cmsContent);
        } else {
          // Use hardcoded default times as last resort
          console.log('Using default prayer times');
          setPrayerTimes({
            fajr: "07:33",
            dohr: "13:00",
            asr: "15:26",
            maghrib: "17:45",
            icha: "19:19"
          });
        }
      } catch (err) {
        console.error('Error fetching prayer times:', err);
        setError(err);
        
        // Use hardcoded default times on error
        setPrayerTimes({
          fajr: "07:33",
          dohr: "13:00",
          asr: "15:26",
          maghrib: "17:45",
          icha: "19:19"
        });
      } finally {
        setLoading(false);
      }
    };

    getPrayerTimes();
  }, []);

  return { prayerTimes, loading, error };
}