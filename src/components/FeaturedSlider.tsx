// // src/components/FeaturedSlider.tsx
// "use client";

// import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import { fetchSliderPosts } from "../utils/fetchSliderPosts";

// const FeaturedSlider = () => {
//   const [posts, setPosts] = useState<any[]>([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getSliderPosts = async () => {
//       const fetchedPosts = await fetchSliderPosts();
//       setPosts(fetchedPosts);
//       setIsLoading(false);
//     };
//     getSliderPosts();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   if (isLoading) return <div>Loading...</div>;

//   return (
//     <Slider {...settings}>
//       {posts.map((post) => (
//         <div key={post.id} className="slide">
//           {post.featuredImage && (
//             <Image
//               src={post.featuredImage}
//               alt={post.title}
//               width={800}
//               height={450}
//               layout="responsive"
//               objectFit="cover"
//             />
//           )}
//           <div className="caption">
//             <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
//             <p dangerouslySetInnerHTML={{ __html: post.content }} />
//           </div>
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default FeaturedSlider;