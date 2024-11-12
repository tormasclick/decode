// src/utils/fetchPageData.ts
export async function fetchPageData(pageId: number) {
    const response = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/pages/${pageId}`);
    const data = await response.json();
  
    return {
      title: data.title.rendered,
      content: data.content.rendered,
      featuredImage: data._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    };
  }