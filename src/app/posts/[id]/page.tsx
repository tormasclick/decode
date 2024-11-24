"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchSinglePost } from '@/utils/fetchSinglePost';

interface Post {
    id: number;
    featured_image: string;
    title: { rendered: string };
    content: { rendered: string };
}

const PostPage: React.FC = () => {
    const { id } = useParams();
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getPost = async () => {
            if (id) {
                const fetchedPost = await fetchSinglePost(Number(id));
                setPost(fetchedPost);
                setLoading(false);
            }
        };

        getPost();
    }, [id]);

    if (loading) return <div className="text-center">Loading...</div>;
    if (!post) return <div className="text-center">Post not found</div>;

    return (
        <div className="my-6 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-3xl font-bold mb-4">{post.title.rendered}</h1>
            {post.featured_image && (
                <div className="mb-4">
                    <img src={post.featured_image} alt={post.title.rendered} className="w-full h-auto rounded-lg shadow-md" />
                </div>
            )}
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
    );
};

export default PostPage;
