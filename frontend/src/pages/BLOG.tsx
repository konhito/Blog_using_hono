import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import BlogCard from "../components/BlogCard";
const Blog = () => {
  const { handle } = useParams();
  const { loading, blog } = useBlog(handle);
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-2xl w-full space-y-4">
          {(loading ? [...Array(5)] : blog).map((blogs, index) => (
            <div key={index}>
              {loading ? (
                <div className="animate-pulse space-y-4">
                  <div className="h-6 bg-gray-200 rounded dark:bg-gray-700 w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-full"></div>
                  <div className="h-4 bg-gray-200 rounded dark:bg-gray-700 w-5/6"></div>
                </div>
              ) : (
                <BlogCard
                  key={blogs.id}
                  authorName={blogs.author.name}
                  title={blogs.title}
                  content={blogs.content}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
