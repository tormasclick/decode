import React from 'react';
import { fetchSinglePost } from '@/utils/fetchSinglePost';
import Image from 'next/image';

interface Post {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    featured_image: string;
}

// The component accepts params directly, no need to wrap it in a Promise or await
const PostPage = async ({ params }: { params: { id: string } }) => {
    // Make sure the params are handled correctly (not as a promise)
    const post: Post | null = await fetchSinglePost(Number(params.id)); // Fetch post data by ID

    if (!post) {
        return <div className="text-center">Post not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4">{post.title.rendered}</h1>
            {post.featured_image && (
                <div className="relative w-full h-80 mb-6">
                    <Image
                        src={post.featured_image}
                        alt={post.title.rendered}
                        width={800}
                        height={320}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
        </div>
    );
};

export default PostPage;