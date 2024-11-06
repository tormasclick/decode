// Add this at the top of your FeaturedSlider.tsx file
'use client';

import React, { useEffect, useState } from 'react';
import { fetchFeaturedPosts } from '@/utils/fetchPosts';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Image from 'next/image';

const FeaturedSlider: React.FC = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            const featuredPosts = await fetchFeaturedPosts();
            setPosts(featuredPosts);
        }
        loadPosts();
    }, []);

    if (posts.length === 0) return <p>No featured posts available.</p>;

    const items = posts.map((post) => (
        <div key={post.id} className="relative w-full h-full">
            {post._embedded && post._embedded['wp:featuredmedia'] && (
                <Image
                    src={post._embedded['wp:featuredmedia'][0].source_url}
                    alt={post.title.rendered}
                    width={800}
                    height={600}
                    className="w-full h-[75vh] object-cover"
                />
            )}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                <h3 className="font-bold text-4xl mb-2">{post.title.rendered}</h3>
                <p className="text-lg mb-4">
                    {post.excerpt.rendered.slice(0, 100)}...
                </p>
                <a href={`/post/${post.slug}`} className="bg-[#33ff00] text-black py-2 px-4 rounded transition duration-300 hover:bg-[#2C324a] hover:text-white">
                    Read more
                </a>
            </div>
        </div>
    ));

    return (
        <div className="relative w-full h-[75vh] overflow-hidden">
            <AliceCarousel
                autoPlay
                autoPlayInterval={3000}
                fadeOutAnimation
                items={items}
                infinite
            />
        </div>
    );
};

export default FeaturedSlider;