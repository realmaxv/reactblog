import { useParams } from "react-router";
import BlogCard from "../components/BlogCard";
import dataBlog from "../lib/data";

const BlogArticle = () => {
  const params = useParams();

  if (!params) {
    return <h1>Falsche seite</h1>;
  }

  return (
    <div>
      <BlogCard
        id={Number(params.id)}
        title={dataBlog[Number(params.id)].title}
        published_date={dataBlog[Number(params.id)].published_date}
        author={dataBlog[Number(params.id)].author}
        description={dataBlog[Number(params.id)].description}
        img_url={dataBlog[Number(params.id)].img_url}
      />
    </div>
  );
};

export default BlogArticle;
