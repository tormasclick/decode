"use client";

import React, { useEffect, useState, useRef } from 'react';
import { fetchFeaturedPosts } from '@/utils/fetchPosts';
import Slider, { Settings } from 'react-slick'; // Import Settings to type the settings object
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Define the Post interface to strongly type the data from WordPress
interface Post {
    id: number;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    slug: string;
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
        }>;
    };
}

// FeaturedSlider Component
const FeaturedSlider: React.FC = () => {
    // State to hold the featured posts
    const [posts, setPosts] = useState<Post[]>([]);
    const sliderRef = useRef<Slider | null>(null);

    // Load posts when the component mounts
    useEffect(() => {
        async function loadPosts() {
            const featuredPosts = await fetchFeaturedPosts();
            setPosts(featuredPosts);
        }
        loadPosts();
    }, []);

    // Return a loading message if there are no posts
    if (posts.length === 0) {
        return <p>No featured posts available.</p>;
    }

    // Settings for the Slider component
    const settings: Settings = {  // Use the correct Settings type here
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        appendDots: (dots: React.ReactNode) => (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                <ul className="flex space-x-2">{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <button className="dot bg-white rounded-full w-3 h-3" />
        ),
    };

    return (
        <div className="relative w-full h-[75vh] overflow-hidden">
            <Slider ref={sliderRef} {...settings}>  {/* Pass settings directly */}
                {posts.map((post) => (
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
                            <div className="border-4 border-[#33ff00] p-7">
                                <h3
                                    className="font-bold text-4xl mb-2"
                                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                />
                                <p
                                    className="text-lg mb-4"
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt.rendered.slice(0, 100),
                                    }}
                                />
                                <a
                                    href={`/post/${post.slug}`}
                                    className="bg-[#33ff00] text-black py-2 px-4 rounded transition duration-300 hover:bg-[#2C324a] hover:text-white"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            <div className="absolute top-[50%] left-0 right-0 flex justify-between z-20 transform -translate-y-1/2 px-4">
                <button
                    className="bg-gray-800 text-white p-2"
                    onClick={() => sliderRef.current?.slickPrev()}
                >
                    <FaChevronLeft className="text-xl" />
                </button>
                <button
                    className="bg-gray-800 text-white p-2"
                    onClick={() => sliderRef.current?.slickNext()}
                >
                    <FaChevronRight className="text-xl" />
                </button>
            </div>
        </div>
    );
};

export default FeaturedSlider;