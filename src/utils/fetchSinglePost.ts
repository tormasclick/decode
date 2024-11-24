// src/utils/fetchSinglePost.ts

export const fetchSinglePost = async (postId: number) => {
    try {
        const response = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/posts/${postId}`);
        const post = await response.json();

        if (post.featured_media) {
            const mediaResponse = await fetch(`https://decode.tormasclick.co.ke/wp-json/wp/v2/media/${post.featured_media}`);
            const media = await mediaResponse.json();
            post.featured_image = media.source_url;
        }

        return post;
    } catch (error) {
        console.error('Error fetching post:', error);
        return null;
    }
};
