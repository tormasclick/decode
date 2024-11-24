// src/app/posts/[id]/page.tsx
import React from 'react';
import { fetchSinglePost } from '@/utils/fetchSinglePost';
import Image from 'next/image'; // Import the Image component

interface Post {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    featured_image: string;
}

// Fetch the post data using async function inside the component
const PostPage = async ({ params }: { params: { id: string } }) => {
    // Await params.id before using it
    const { id } = await params; // Wait for params to be available

    const post: Post | null = await fetchSinglePost(Number(id)); // Fetch post data by ID

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
                        layout="fill"
                        objectFit="cover" // Use objectFit to ensure the image covers the container
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