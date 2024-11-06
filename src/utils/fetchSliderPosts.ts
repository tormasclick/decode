// src/utils/fetchSliderPosts.ts
export const fetchSliderPosts = async () => {
    try {
      const response = await fetch(
        "https://decode.tormasclick.co.ke/wp-json/wp/v2/posts?categories=3"
      );
      const posts = await response.json();
  
      return posts.map((post: any) => ({
        id: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        featuredImage: post.featured_media ? post.featured_media : null,
      }));
    } catch (error) {
      console.error("Error fetching slider posts:", error);
      return [];
    }
  };