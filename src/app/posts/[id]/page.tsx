import { GetServerSideProps } from 'next';
import { fetchSinglePost } from '@/utils/fetchSinglePost';
import Image from 'next/image';

// Define the Post type
interface Post {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    featured_image: string;
}

// Define the type for `PostPageProps`
interface PostPageProps {
    post: Post;
}

// Refactor to use getServerSideProps
export const getServerSideProps: GetServerSideProps<PostPageProps> = async ({ params }) => {
    const postId = Number(params?.id); // Ensure the ID is a number
    const post = await fetchSinglePost(postId);

    if (!post) {
        return { notFound: true }; // Handle the case where the post doesn't exist
    }

    return {
        props: { post }, // Return the post as props
    };
};

const PostPage = ({ post }: PostPageProps) => {
    if (!post) {
        return <div>Post not found</div>;
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