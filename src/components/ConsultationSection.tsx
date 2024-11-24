"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { fetchSinglePost } from '@/utils/fetchSinglePost';
import Link from 'next/link';

interface Post {
    id: number;
    featured_image: string;
    title: { rendered: string };
    content: { rendered: string };
}

const ConsultationSection: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const postIds = React.useMemo(() => [34, 37, 40, 43], []);

    useEffect(() => {
        const getPosts = async () => {
            const fetchedPosts = await Promise.all(postIds.map(id => fetchSinglePost(id)));
            setPosts(fetchedPosts);
        };

        getPosts();
    }, [postIds]);

    if (posts.length === 0) return <div className="text-center">Loading...</div>;

    return (
        <div className="my-6 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-center mb-6">
                Latest Articles From Consultation Desk
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {posts.map((post) => (
                    <Link key={post.id} href={`/posts/${post.id}`} passHref>
                        <div className="bg-gray-50 rounded-lg shadow overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer">
                            {post.featured_image && (
                                <div className="relative">
                                    <Image
                                        src={post.featured_image}
                                        alt={post.title.rendered}
                                        width={400}
                                        height={160}
                                        className="w-full h-40 object-cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg font-semibold p-4">
                                        {post.title.rendered}
                                    </div>
                                </div>
                            )}
                            <div className="p-4">
                                <div
                                    dangerouslySetInnerHTML={{ __html: post.content.rendered.substring(0, 150) + '...' }}
                                    className="text-gray-600 mb-4"
                                />
                                <span className="inline-block px-4 py-2 bg-[#33ff00] text-[#2C324a] rounded-full text-center transition-colors duration-300 hover:bg-[#2C324a] hover:text-white">
                                    Read More
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ConsultationSection;
