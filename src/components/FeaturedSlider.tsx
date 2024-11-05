// src/components/FeaturedSlider.tsx
"use client";

import React, { useEffect, useState, useRef } from 'react';
import { fetchFeaturedPosts } from '@/utils/fetchPosts';
import Slider from 'react-slick'; // Importing react-slick
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Importing icons from React Icons

// Import slick-carousel styles
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const FeaturedSlider = () => {
    const [posts, setPosts] = useState([]);
    const sliderRef = useRef<any>(null); // Ref to access the slider methods

    useEffect(() => {
        async function loadPosts() {
            const featuredPosts = await fetchFeaturedPosts();
            setPosts(featuredPosts);
        }

        loadPosts();
    }, []);

    if (posts.length === 0) {
        return <p>No featured posts available.</p>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        appendDots: dots => (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center z-10">
                <ul className="flex space-x-2">{dots}</ul>
            </div>
        ),
        customPaging: (i: number) => (
            <button className="dot bg-white rounded-full w-3 h-3" />
        )
    };

    return (
        <div className="relative w-full h-[75vh] overflow-hidden"> {/* Added overflow-hidden to prevent elements from overflowing */}
            <Slider ref={sliderRef} {...settings}>
                {posts.map((post: any) => (
                    <div key={post.id} className="relative w-full h-full">
                        {post._embedded && post._embedded['wp:featuredmedia'] && (
                            <img
                                src={post._embedded['wp:featuredmedia'][0].source_url}
                                alt={post.title.rendered}
                                className="w-full h-[75vh] object-cover" // Set the image height to match the slider height
                            />
                        )}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50"> {/* Background for the caption area */}
                            <div className="border-4 border-[#33ff00] p-7"> {/* Changed border width to 4 */}
                                <h3 className="font-bold text-4xl mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h3>
                                <p className="text-lg mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.slice(0, 100) }}></p>
                                <a
                                    href={`/post/${post.slug}`}
                                    className="bg-[#33ff00] text-black py-2 px-4 rounded transition duration-300 hover:bg-[#2C324a] hover:text-white" // Styled as a button
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
            {/* Custom left and right navigation buttons inside the slider */}
            <div className="absolute top-[50%] left-0 right-0 flex justify-between z-20 transform -translate-y-1/2 px-4">
                <button
                    className="bg-gray-800 text-white p-2" // Basic button style
                    onClick={() => {
                        console.log('Previous button clicked'); // Debug log
                        sliderRef.current?.slickPrev(); // Go to the previous slide
                    }}
                >
                    <FaChevronLeft className="text-xl" /> {/* Use basic icon size for clarity */}
                </button>
                <button
                    className="bg-gray-800 text-white p-2" // Basic button style
                    onClick={() => {
                        console.log('Next button clicked'); // Debug log
                        sliderRef.current?.slickNext(); // Go to the next slide
                    }}
                >
                    <FaChevronRight className="text-xl" /> {/* Use basic icon size for clarity */}
                </button>
            </div>
        </div>
    );
};

export default FeaturedSlider;