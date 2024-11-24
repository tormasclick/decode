// src/app/posts/[id]/page.tsx
import React from 'react';
import { fetchSinglePost } from '@/utils/fetchSinglePost';

interface Post {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    featured_image: string;
}

interface PostPageProps {
    params: {
        id: string;
    };
}

const PostPage = async ({ params }: PostPageProps) => {
    // Fetch the post data directly within the component
    const post = await fetchSinglePost(Number(params.id));

    if (!post) {
        return <div className="text-center">Post not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4">{post.title.rendered}</h1>
            {post.featured_image && (
                <img
                    src={post.featured_image}
                    alt={post.title.rendered}
                    className="w-full h-80 object-cover mb-6"
                />
            )}
            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
        </div>
    );
};

export default PostPage;