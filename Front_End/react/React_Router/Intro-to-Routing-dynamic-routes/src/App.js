import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";
import Navbar from "./components/Navbar";
import ItemDetails from "./pages/itemDetails";

function App() {
  /**** *** NESTED ROUTES****** */
  // const routes = createRoutesFromElements(
  //   <>
  //     <Route path="/" element={<Navbar />}>
  //       <Route index element={<Home />} />
  //       <Route path="/about" element={<About />} />
  //       <Route path="/items" element={<Items />} />
  //       <Route path="/items/:id" element={<ItemDetails />} />
  //     </Route>
  //   </>
  // );
  // const router = createBrowserRouter(routes);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "items", element: <Items /> },
        { path: "items/:itemId", element: <ItemDetails /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
