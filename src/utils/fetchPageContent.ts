// src/utils/fetchPageContent.ts
export const fetchPageContent = async (pageId: number) => {
    try {
      const response = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/pages/${pageId}`);
      const page = await response.json();
  
      // Fetch featured media if it exists
      if (page.featured_media) {
        const mediaResponse = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/media/${page.featured_media}`);
        const media = await mediaResponse.json();
        page.featured_image = media.source_url;
      }
  
      return page;
    } catch (error) {
      console.error(`Error fetching page ${pageId}:`, error);
      return null;
    }
  };