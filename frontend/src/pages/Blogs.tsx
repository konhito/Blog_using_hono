import BlogCard from "../components/BlogCard";
const Blogs = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <div className=" max-w-2xl">
          <BlogCard
            authorName="aditya"
            title="How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"
            content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for managers"
            publishedDate="03-12-2024"
          />
          <BlogCard
            authorName="aditya"
            title="How an Ugly Single-Page Website Makes $5,000 a Month with Affiliate Marketing"
            content="No need to create a fancy and modern website with hundreds of pages to make money online. -Making money online is the dream for managers"
            publishedDate="03-12-2024"
          />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
