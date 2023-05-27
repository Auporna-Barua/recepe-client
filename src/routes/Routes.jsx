import { createBrowserRouter } from "react-router-dom";
import Main from "../layout's/Main";
import Home from "../pages/Home/Home";
import ChefRecipe from "../pages/ChefRecefies/ChefRecipes";

import ErrorPage from "../pages/ErrorPage";
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
]);

export default router;
