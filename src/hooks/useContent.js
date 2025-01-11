import { useState, useEffect } from 'react';
import { mockData } from '../lib/mockData';

export function useContent(contentType, id = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 100));
        
        if (id) {
          const items = mockData[contentType];
          const item = items?.find(item => item.id === id);
          setData(item || null);
        } else {
          setData(mockData[contentType] || null);
        }
      } catch (err) {
        setError(err);
        console.error('Error fetching content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [contentType, id]);

  return { data, loading, error };
}