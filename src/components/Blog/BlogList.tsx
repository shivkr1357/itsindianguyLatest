"use client";
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <div key={post.id}>
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