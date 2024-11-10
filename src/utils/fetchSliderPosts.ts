// src/utils/fetchSliderPosts.ts

interface PostApiResponse {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    _embedded?: {
        'wp:featuredmedia'?: [{ source_url: string }];
    };
}

interface Post {
    id: number;
    title: string;
    content: string;
    featuredImage: string | null;
}

export const fetchSliderPosts = async (): Promise<Post[]> => {
    try {
        const response = await fetch(
            'https://decode.tormasclick.co.ke/wp-json/wp/v2/posts?categories=5&_embed'
        );
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        // Specify the type of the response data
        const posts: PostApiResponse[] = await response.json();
        console.log("Fetched posts:", posts); // Check the API response

        // Extract necessary information from the posts
        return posts.map((post) => ({
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