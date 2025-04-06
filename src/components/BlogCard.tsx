export type BlogCardProps = {
  id: number;
  title: string;
  published_date: string;
  author: string;
  description: string;
  img_url: string;
};

const BlogCard = ({
  title,
  published_date,
  description,
  author,
  img_url,
}: BlogCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <img src={img_url} alt={title} />

      <div className="flex items-center justify-evenly w-full">
        <h1 className="text-3xl font-black">{title}</h1>
        <h2 className="text-3xl font-black">{published_date}</h2>
      </div>
      <p>{description}</p>
      <p>{author}</p>
    </div>
  );
};

export default BlogCard;
