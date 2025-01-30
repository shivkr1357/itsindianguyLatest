import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faUser, faClock } from "@fortawesome/free-regular-svg-icons";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const BlogCard = ({ title, description, image, author, date, readTime, slug }: BlogCardProps) => {
  return (
    <Link 
      href={`/blog/${slug}`}
      className="block bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-100">
          {title}
        </h3>
        
        <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="w-4 h-4" />
            <span>{author}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard; 