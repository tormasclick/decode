// src/components/ResourcesSection.tsx

"use client";

import React, { useEffect, useState } from 'react';
import { fetchSinglePost } from '@/utils/fetchSinglePost';

const ResourcesSection = () => {
    const [post, setPost] = useState<any>(null);
    const postId = 40; // ID for "Access Valuable Resources for Success"

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
            <div className="flex-1">
                <h2 className="text-xl font-bold">{post.title.rendered}</h2>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
            {post.featured_image && (
                <img
                    src={post.featured_image}
                    alt={post.title.rendered}
                    className="w-1/2 h-auto rounded-lg ml-4"
                />
            )}
        </div>
    );
};

export default ResourcesSection;