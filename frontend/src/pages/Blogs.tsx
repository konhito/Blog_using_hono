// import BlogCard from "../components/BlogCard";
// import useBlog from "../hooks";
// const Blogs = () => {
//   const { loading, blogs } = useBlog();
//   if (!loading) {
//     return (
//       <div>
//         <div role="status" className="max-w-sm animate-pulse">
//           <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
//           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
//           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
//           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
//           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
//           <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
//           <span className="sr-only">Loading...</span>
//         </div>
//       </div>
//     );
//   }
//   return (
//     <div>
//       <div className="flex justify-center ">
//         <div className=" max-w-2xl">
//           {/* <BlogCard
//             authorName="aditya"
//             title="How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"
//             content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for managers"
//             publishedDate="03-12-2024"
//           />
//           <BlogCard
//             authorName="aditya"
//             title="How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"
//             content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for managers"
//             publishedDate="03-12-2024"
//           /> */}
//           {blogs.map((blog) => {
//             <BlogCard
//               key={blog.id}
//               authorName={blog.name}
//               title={blog.title}
//               content={blog.content}
//             />;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blogs;
import { useNavigate } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import { useBlogs } from "../hooks/index";

const Blogs = () => {
  const { loading, blogs } = useBlogs();
  const navigate = useNavigate();

  // if (loading) {
  //   return (
  //     <div>
  //       <div role="status" className="max-w-sm animate-pulse">
  //         <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
  //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
  //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
  //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
  //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
  //         <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-2xl w-full space-y-4">
          {(loading ? [...Array(5)] : blogs).map((blog, index) => (
            <div key={index}>
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-5/6"></div>
                </div>
              ) : (
                <div onClick={() => navigate(`/blog/${blog.id}`)}>
                  <BlogCard
                    key={blog.id}
                    authorName={blog.author.name}
                    title={blog.title}
                    content={blog.content}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
