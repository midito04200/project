import { useState, useEffect } from 'react';
import { getContent, getAllContent } from '../lib/cms';

export function useContent(collection, slug) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        console.log(`Fetching content for ${collection}${slug ? `/${slug}` : ''}`);
        
        const content = slug 
          ? await getContent(collection, slug)
          : await getAllContent(collection);
          
        console.log(`Content fetched for ${collection}:`, content);
        setData(content);
      } catch (err) {
        setError(err);
        console.error('Error fetching content:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [collection, slug]);

  return { data, loading, error };
}