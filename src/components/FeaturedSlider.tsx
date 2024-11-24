"use client";  // Ensure this is a client component

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchSliderPosts } from "../utils/fetchSliderPosts";
import Image from "next/image";

interface Post {
  id: number;
  title: string;
  content: string;
  featuredImage: string | null;
}

const FeaturedSlider: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const sliderPosts = await fetchSliderPosts();
      setPosts(sliderPosts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (posts.length > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % posts.length);
      }, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [posts]);

  const decodeHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.documentElement.textContent || "";
  };

  if (posts.length === 0) {
    console.log("No posts available for the slider.");
    return <div>Loading slider...</div>;
  }

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + posts.length) % posts.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % posts.length);
  };

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      {posts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {post.featuredImage ? (
            <Image
              src={post.featuredImage}
              alt={post.title}
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-xl text-gray-700">No Image Available</p>
            </div>
          )}
          {/* Centered Caption with Border and Increased Transparency */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 md:w-3/4 lg:w-3/4 bg-black bg-opacity-75 text-white p-4 md:p-6 text-center border-4" style={{ borderColor: '#33ff00', borderRadius: '0' }}>
              <h2 className="text-2xl md:text-4xl font-bold">{decodeHtml(post.title)}</h2>
              <p
                className="mt-2 text-sm md:text-base"
                dangerouslySetInnerHTML={{
                  __html:
                    post.content.length > 100
                      ? decodeHtml(post.content.slice(0, 100)) + "..."
                      : decodeHtml(post.content),
                }}
              ></p>
              <Link href={`/posts/${post.id}`}>
                <button className="mt-4 px-4 py-2 md:px-6 md:py-2 bg-[#33ff00] text-blank rounded-full transition-colors duration-300 hover:bg-[#2C324a] hover:text-white">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 md:p-2"
      >
        &#9664;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-1 md:p-2"
      >
        &#9654;
      </button>
    </div>
  );
};

export default FeaturedSlider;
