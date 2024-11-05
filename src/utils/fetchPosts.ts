export const fetchFeaturedPosts = async () => {
    try {
        const categoryId = 3; // Your category ID
        
        // Fetch standard posts
        const postsResponse = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/posts?categories=${categoryId}&_embed`);
        
        // Fetch custom post types
        const consultationResponse = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/consultation?categories=${categoryId}&_embed`);
        const resourcesResponse = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/resources?categories=${categoryId}&_embed`);
        const impactResponse = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/impact?categories=${categoryId}&_embed`);
        
        if (!postsResponse.ok || !consultationResponse.ok || !resourcesResponse.ok || !impactResponse.ok) {
            throw new Error('Failed to fetch featured posts');
        }

        const posts = await postsResponse.json();
        const consultations = await consultationResponse.json();
        const resources = await resourcesResponse.json();
        const impacts = await impactResponse.json();

        // Combine all fetched posts
        const allPosts = [...posts, ...consultations, ...resources, ...impacts];

        return allPosts;
    } catch (error) {
        console.error(error);
        return [];
    }
};