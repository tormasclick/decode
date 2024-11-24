"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPostsByCategory } from "../../../utils/fetchPostsByCategory";
import Image from "next/image";
import Link from "next/link";

interface Post {
    id: number;
    title: { rendered: string };
    excerpt: { rendered: string };
    featured_image?: string;
}

const categories = {
    trending: 7,
    business: 8,
    technology: 9,
    cryptocurrency: 10,
    education: 11,
    healthcare: 12,
    entertainment: 13,
    sports: 8,
    lifestyle: 15,
    youth: 16,
    politics: 17,
    science: 18,
    social: 19,
    investment: 25,
    travel: 21,
    marketing: 22,
    realestate: 23,
    careers: 24,
    startups: 19,
    economy: 26,
    womeninbusiness: 27,
    agriculture: 28,
    legal: 29,
    events: 31,
    data: 31
};

const CategoryPage: React.FC = () => {
    const { category } = useParams();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        if (category) {
            const categoryId = categories[category as keyof typeof categories];
            fetchPostsByCategory(categoryId).then(setPosts);
        }
    }, [category]);

    return (
        <div>
            {/* Full Width Banner Image */}
            <div className="relative w-full h-64 mb-8">
                <Image
                    src="/images/discover-banner.jpg"
                    alt={`${category} banner`}
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-4xl font-bold text-white capitalize">{category}</h1>
                    <nav className="text-white text-sm mt-2">
                        <Link href="/">Home</Link> / <span className="capitalize">{category}</span>
                    </nav>
                </div>
            </div>

            {/* Post Cards */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                    {posts.map((post) => (
                        <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            {post.featured_image && (
                                <div className="relative w-full h-48">
                                    <Image
                                        src={post.featured_image}
                                        alt={post.title.rendered}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                        <h2 className="text-lg font-bold text-white">{post.title.rendered}</h2>
                                    </div>
                                </div>
                            )}
                            <div className="p-4">
                                <div
                                    className="text-gray-700 leading-relaxed mb-4"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                ></div>
                                <a href={`/posts/${post.id}`} className="text-[#33ff00] hover:underline">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
