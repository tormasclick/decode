"use client"; // Ensures that the component is a client-side component

import React, { useEffect, useState } from 'react';
import { fetchFeaturedPosts } from '@/utils/fetchPosts';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const FeaturedSlider: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    // Fetch featured posts on component mount
    async function loadPosts() {
      const featuredPosts = await fetchFeaturedPosts();
      setPosts(featuredPosts);
    }
    loadPosts();
  }, []);

  const items = posts.map((post) => (
    <div key={post.id} className="relative w-full h-full">
      {post._embedded && post._embedded['wp:featuredmedia'] && (
        <Image
          src={post._embedded['wp:featuredmedia'][0].source_url}
          alt={post.title.rendered}
          width={600}
          height={400}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
        <h2>{post.title.rendered}</h2>
      </div>
    </div>
  ));

  return (
    <div className="relative w-full h-[75vh] overflow-hidden">
      <AliceCarousel
        autoPlay
        autoPlayInterval={3000}
        items={items}
        infinite
      />
    </div>
  );
};

export default FeaturedSlider;