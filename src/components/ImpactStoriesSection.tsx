// src/components/ImpactStoriesSection.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { fetchSinglePost } from '@/utils/fetchSinglePost';

const ImpactStoriesSection = () => {
    const [post, setPost] = useState<any>(null);
    const postId = 43; // ID for "See How Decode Africa is Making a Difference"

    useEffect(() => {
        const getPost = async () => {
            const data = await fetchSinglePost(postId);
            setPost(data);
        };

        getPost();
    }, [postId]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="my-6 p-4 bg-gray-100 rounded-lg shadow-md flex">
            {post.featured_image && (
                <img
                    src={post.featured_image}
                    alt={post.title.rendered}
                    className="w-1/2 h-auto rounded-lg ml-4"
                />
            )}
            <div className="flex-1">
                <h2 className="text-xl font-bold">{post.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
        </div>
    );
};

export default ImpactStoriesSection;