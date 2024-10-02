import {
  createRoutesFromElements,
  RouterProvider,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/ItemDetails";
import ErrorPage from "./pages/ErrorPage";
function App() {
  // Creating routes Mthod -1
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Navbar />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/about", element: <About /> },
  //       { path: "/item", element: <Items /> },
  //     ],
  //   },
  // ]);

  // Creating routes Mthod -2 and creating nested elements with url
  // const router2 = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Navbar />}>
  //       {/* used relative path instead of abosulte Path */}
  //       <Route path="" element={<Home />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="item" element={<Items />} />
  //       <Route path="item/items/:id" element={<ItemDetails />} />
  //     </Route>
  //   </>
  // );

  //creating Nested elements
  const router2 = createRoutesFromElements(
    <>
      {/* adding errorElement */}
      <Route path="/" element={<Navbar />} errorElement={<ErrorPage />}>
        {/* used relative path instead of abosulte Path */}
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="item">
          <Route path="" element={<Items />} />
          <Route path="items/:id" element={<ItemDetails />} />
        </Route>
      </Route>
    </>
  );
  const rou = createBrowserRouter(router2);
  return (
    <>
      <RouterProvider router={rou} />
    </>
  );
}

export default App;
