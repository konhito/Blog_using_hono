interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
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
        <Avatar authorInitials={authorName} />
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
  authorInitials,
  size = 5,
}: {
  authorInitials: string;
  size?: number;
}) {
  const initials = authorInitials?.[0]?.toUpperCase() || "?";
  const dimensionClass = `w-${size} h-${size}`;

  return (
    <div
      className={`relative inline-flex items-center justify-center ${dimensionClass} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}
    >
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {initials}
      </span>
    </div>
  );
}

export default BlogCard;
