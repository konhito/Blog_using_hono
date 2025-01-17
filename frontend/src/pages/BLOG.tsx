const Blog = () => {
  return (
    <div className="grid lg:grid-cols-[70%_30%] grid-cols-0 h-screen">
      <div className=" bg-blue-100 p-4">70% Section</div>

      <div className=" bg-green-100 p-4 invisible lg:visible"></div>
    </div>
  );
};

export default Blog;
