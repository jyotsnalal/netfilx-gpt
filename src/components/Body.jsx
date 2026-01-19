import Login from "./Login";
import Browse from "./Browse";
import Watchlist from "./Watchlist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/watchlist",
    element: <Watchlist />,
  },
]);

const Body = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
