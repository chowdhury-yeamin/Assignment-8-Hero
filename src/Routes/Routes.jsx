import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import { createBrowserRouter } from "react-router";
import ErrorPage from "../Pages/ErrorPage";
import ErrorApp from "../Pages/ErrorApp";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorApp></ErrorApp>,
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading....</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("./AppData.json"),
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
        loader: () => fetch("./AppData.json"),
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default Router;
