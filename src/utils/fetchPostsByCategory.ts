export const fetchPostsByCategory = async (categoryId: number) => {
    try {
        const response = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/posts?categories=${categoryId}`);
        const posts = await response.json();

        // Map the posts to include featured image
        const postsWithImages = await Promise.all(posts.map(async (post: any) => {
            if (post.featured_media) {
                const mediaResponse = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/media/${post.featured_media}`);
                const media = await mediaResponse.json();
                post.featured_image = media.source_url;
            }
            return post;
        }));

        return postsWithImages;
    } catch (error) {
        console.error('Error fetching posts by category:', error);
        return [];
    }
};
