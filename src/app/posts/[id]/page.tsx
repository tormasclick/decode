import { fetchSinglePost } from '@/utils/fetchSinglePost';
import { notFound } from 'next/navigation';
import Image from 'next/image';

// Refactor to use the correct route parameter structure
const PostPage = async ({ params }: { params: { id: string } }) => {
    const postId = Number(params.id); // Ensure the ID is a number
    const post = await fetchSinglePost(postId);

    if (!post) {
        notFound(); // This will display the 404 page if no post is found
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