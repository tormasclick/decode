"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchSinglePost } from '@/utils/fetchSinglePost';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

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

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';

    return (
        <div>
            {post.featured_image && (
                <div
                    className="relative w-full h-64 bg-cover bg-center flex flex-col items-center justify-center"
                    style={{ backgroundImage: `url(${post.featured_image})` }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    <h1 className="relative text-white text-4xl font-bold z-10">{post.title.rendered}</h1>
                    <nav className="relative text-white mt-2 z-10">
                        <Link href="/" className="hover:text-gray-300">Home</Link> / <Link href="/posts" className="hover:text-gray-300">Posts</Link> / {post.title.rendered}
                    </nav>
                </div>
            )}
            <div className="container mx-auto p-6">
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} className="prose lg:prose-xl mx-auto mb-6" />
                <div className="flex justify-center space-x-4 mb-6">
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                        <FaFacebook className="text-blue-600 w-6 h-6" />
                    </a>
                    <a href={`https://twitter.com/intent/tweet?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-blue-400 w-6 h-6" />
                    </a>
                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-blue-800 w-6 h-6" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostPage;
