import { useInView } from "react-intersection-observer";
import BlogCard from "@/components/Blog/BlogCard";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList = ({ posts }: BlogListProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <div
          key={post.id}
          ref={ref}
          className={`transform transition-all duration-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <BlogCard
            title={post.title}
            description={post.description}
            image={post.image}
            author={post.author}
            date={post.date}
            readTime={post.readTime}
            slug={post.slug}
          />
        </div>
      ))}
    </div>
  );
};

export default BlogList; 