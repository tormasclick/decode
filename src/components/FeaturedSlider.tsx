"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchSliderPosts } from "../utils/fetchSliderPosts";

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

  if (posts.length === 0) {
    console.log("No posts available for the slider."); // Log if no posts found
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
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-300">
              <p className="text-xl text-gray-700">No Image Available</p>
            </div>
          )}
          {/* Centered Caption */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 bg-black bg-opacity-50 text-white p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p
                className="mt-2"
                dangerouslySetInnerHTML={{
                  __html:
                    post.content.length > 100
                      ? post.content.slice(0, 100) + "..."
                      : post.content,
                }}
              ></p>
              <Link href={`/post/${post.id}`} className="text-yellow-400 mt-4 inline-block underline">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={handlePrevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
      >
        &#9664;
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
      >
        &#9654;
      </button>
    </div>
  );
};

export default FeaturedSlider;