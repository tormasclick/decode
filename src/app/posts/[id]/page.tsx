import { fetchSinglePost } from '@/utils/fetchSinglePost'; // Ensure this utility function is correctly defined
import Image from 'next/image';

// Type definition for the post
interface Post {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    featured_image: string;
}

// Define the types for props that the page will accept
interface PostPageProps {
    params: { id: string }; // Params will always be passed as an object
}

const PostPage = async ({ params }: PostPageProps) => {
    const postId = Number(params.id); // Ensure the ID is a number
    const post: Post | null = await fetchSinglePost(postId); // Fetch post data using the ID

    if (!post) {
        return <div className="text-center">Post not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-semibold mb-4">{post.title.rendered}</h1>
            {post.featured_image && (
                <div className="relative w-full h-80 mb-6">
                    <Image
                        src={post.featured_image}
                        alt={post.title.rendered}
                        width={800}
                        height={320}
                        className="w-full h-full object-cover"
                    />
                </div>
            )}
            <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
        </div>
    );
};

export default PostPage;