import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-screen">
      <h1 className="text-7xl font-black">Welcome to my simple Blog</h1>
      <Link
        className="py-2 px-4 bg-stone-500 text-stone-300 font-semibold border border-stone-950"
        to={"/blog"}
      >
        Blog
      </Link>
    </div>
  );
};

export default HomePage;
