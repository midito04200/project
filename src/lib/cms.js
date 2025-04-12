import frontMatter from 'front-matter';

// Cache for content to avoid unnecessary file reads
const contentCache = new Map();

export async function getContent(collection, slug = 'default') {
  const cacheKey = `${collection}/${slug}`;
  
  // Check cache first
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey);
  }

  try {
    const response = await fetch(`/content/${collection}/${slug}.md`);
    if (!response.ok) {
      console.error(`Failed to fetch ${collection}/${slug}: ${response.status}`);
      return null;
    }
    
    const text = await response.text();
    const { attributes, body } = frontMatter(text);
    
    console.log(`Loaded content for ${collection}/${slug}:`, attributes);
    
    const content = {
      ...attributes,
      body,
      slug,
      collection
    };

    // Cache the content
    contentCache.set(cacheKey, content);
    return content;
  } catch (error) {
    console.error(`Error loading content for ${collection}/${slug}:`, error);
    return null;
  }
}

export async function getAllContent(collection) {
  try {
    const response = await fetch(`/content/${collection}/index.json`);
    if (!response.ok) {
      console.error(`Failed to fetch index for ${collection}: ${response.status}`);
      // If index.json doesn't exist, return default content
      const defaultContent = await getContent(collection);
      return defaultContent ? [defaultContent] : [];
    }
    
    const index = await response.json();
    console.log(`Loaded index for ${collection}:`, index);
    
    const contents = await Promise.all(
      index.map(slug => getContent(collection, slug))
    );
    
    return contents.filter(Boolean);
  } catch (error) {
    console.error(`Error loading all content for ${collection}:`, error);
    // Fallback to default content
    const defaultContent = await getContent(collection);
    return defaultContent ? [defaultContent] : [];
  }
}