// src/utils/fetchSliderPosts.ts

export const fetchSliderPosts = async () => {
    try {
      const response = await fetch('https://decode.tormasclick.co.ke/wp-json/wp/v2/posts?categories=3&_embed');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
  
      const posts = await response.json();
      
      // Extract necessary information from the posts
      return posts.map((post: any) => ({
        id: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        featuredImage: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
      }));
    } catch (error) {
      console.error('Error fetching posts:', error);
      return [];
    }
  };