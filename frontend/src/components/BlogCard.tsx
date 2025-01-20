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
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 mb-2">
        <Avatar authorInitials={authorName} />
        <span>
          {authorName} • {publishedDate}
        </span>
      </div>
      <div className="font-bold text-lg mb-2">{title}</div>
      <div className="text-gray-700 mb-2">
        {content.length > 100 ? content.substring(0, 150) + "..." : content}
      </div>
      <div className="text-sm text-gray-500">
        {Math.ceil(content.length / 100)} min Read(s)
      </div>
    </div>
  );
};

function Avatar({ authorInitials }: { authorInitials: string }) {
  const initials = authorInitials?.[0]?.toUpperCase() || "?";
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {initials}
      </span>
    </div>
  );
}

export default BlogCard;
