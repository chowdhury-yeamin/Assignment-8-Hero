import MainLayout from "../LayOuts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import { createBrowserRouter } from "react-router";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    hydrateFallbackElement: <p>Loading....</p>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
      {
        path: "/app-details/:id",
        element: <AppDetails></AppDetails>, 
      },
    ],
  },

]);

export default Router;
