import { Link } from "react-router";
import { BlogCardProps } from "../components/BlogCard";
import blogData from "../lib/data";

const Blog = () => {
  return (
    <div className="grid grid-cols-3 gap-4 items-center justify-center">
      {blogData.map((item: BlogCardProps) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 items-center justify-center"
        >
          <img src={item.img_url} alt={item.title.toLowerCase()} />
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <Link
            className="py-2 px-4 border cursor-pointer"
            to={`/blog/${item.id}`}
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
