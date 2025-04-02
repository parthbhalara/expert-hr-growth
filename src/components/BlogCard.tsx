
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, date, category, imageUrl, slug }: BlogCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-hr-gray-200 hover:shadow-lg transition-shadow">
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center text-sm text-hr-gray-500 mb-3">
          <span className="bg-hr-blue-light text-hr-blue px-2 py-1 rounded text-xs font-medium">
            {category}
          </span>
          <div className="flex items-center ml-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-hr-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-hr-gray-600 mb-5 line-clamp-3">
          {excerpt}
        </p>
        <Link 
          to={`/blog/${slug}`} 
          className="text-hr-blue hover:text-hr-blue-dark font-medium"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
