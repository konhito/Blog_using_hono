interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate?: string;
}

const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate = "1-1-2025",
}: BlogCardProps) => {
  return (
    <div className="border-b cursor-pointer border-slate-200 p-4 rounded-lg shadow-md shadow-slate-900/20 shadow-b-2 ">
      <div className="flex items-center gap-2 mb-2">
        <Avatar name={authorName} size="small" />
        <span>
          {authorName} • {publishedDate}
        </span>
      </div>
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="text-gray-700 mb-2 text-wrap flex-wrap content-center">
        {content.length > 100 ? content.substring(0, 150) + "..." : content}
      </div>
      <div className="text-sm text-gray-500">
        {Math.ceil(content.length / 100)} min Read(s)
      </div>
    </div>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}

export default BlogCard;
