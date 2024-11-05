// src/utils/fetchSinglePost.ts

export const fetchSinglePost = async (postId: number) => {
    try {
        const response = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/posts/${postId}`);
        const post = await response.json();

        // Check if the post has a featured media ID
        if (post.featured_media) {
            const mediaResponse = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/media/${post.featured_media}`);
            const media = await mediaResponse.json();
            post.featured_image = media.source_url; // Add the featured image URL to the post object
        }

        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};