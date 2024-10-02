import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "./pages/app/details/Details";
import Learn from "./pages/app/learn/Learn";
import Chapter from "./pages/app/chapter/Chapter";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { path: "", element: <Hero /> },
        {
          path: "courses",
          children: [
            { path: "", element: <Courses /> },
            { path: "courses/:id", element: <Details /> },
          ],
        },
        {
          path: "learningpage/:id",
          element: <Learn />,
          children: [{ path: "chapter/:chapId", element: <Chapter /> }],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
