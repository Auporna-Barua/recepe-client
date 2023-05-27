import { createBrowserRouter } from "react-router-dom";
import Main from "../layout's/Main";
import Home from "../pages/Home/Home";
import ChefRecipe from "../pages/ChefRecefies/ChefRecipes";

import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/registration/Registration";
import About from "../pages/About/About";
import Blog from "../pages/Blog/Blog";
// import PrivetRoute from "./PrivetRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/recipes/:id",
    element: (
      // <PrivetRoute>
      <ChefRecipe></ChefRecipe>
      // </PrivetRoute>
    ),
    loader: ({ params }) =>
      fetch(
        `https://food-city-server-hridoy-shill.vercel.app/recipes/${params.id}`
      ),
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Registration></Registration>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

export default router;
