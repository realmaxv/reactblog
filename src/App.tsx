import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import Blog from "./pages/Blog";
import BlogArticle from "./pages/BlogArticle";
import Wrong from "./pages/Wrong";

const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { path: "/", Component: HomePage },
      { path: "/blog", Component: Blog },
      { path: "/blog/:id", Component: BlogArticle },
      { path: "*", Component: Wrong },
    ],
  },
]);

function Layout() {
  return (
    <>
      <header className="flex items-center justify-between h-15 px-14 bg-stone-600">
        <h1 className="text-4xl font-black text-stone-200">My Life</h1>
        <div className="flex items-center justify-evenly gap-8">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/blog"}>Blog</NavLink>
        </div>
      </header>
      <Outlet />
    </>
  );
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
