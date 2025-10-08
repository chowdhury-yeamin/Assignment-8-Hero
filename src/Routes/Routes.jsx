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
    element:<MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/apps",
        errorElement:<ErrorApp></ErrorApp>,
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        element: <Installation></Installation>,
      },
    ],
  },
  {
    path:'*',
    element:<ErrorPage></ErrorPage>
  }
]);

export default Router;
