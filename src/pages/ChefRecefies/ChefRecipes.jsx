import Navbar from "../../components/navbar/Navbar";
import { useLoaderData, useParams } from "react-router-dom";
import ChefRecipe from "./ChefRecipe";
import Footer from "../../components/footer/Footer";

const ChefRecipes = () => {
  const { id } = useParams();
  const recipes = useLoaderData();
  const {
    ChefPicture,
    ChefName,
    YearsOfExperience,
    NumberOfRecipes,
    Likes,
    bio,
  } = recipes[0];

  return (
    <div>
      <Navbar></Navbar>
      <div className="card lg:card-side bg-opacity-40 mx-8 my-3 mt-20 shadow-lg border-black p-5 bg-orange-400">
        <div className="w-full mt-10 p-5">
          <h2 className="card-title text-4xl font-bold border-b-2 border-black">
            {ChefName}
          </h2>
          <p className="font-semibold mt-3 leading-loose">{bio}</p>
          <p className="mt-5 font-bold text-xl">
            Experience: {YearsOfExperience} years.
          </p>
          <p className="mt-5 font-bold text-xl">
            Total Recipes: {NumberOfRecipes}.
          </p>
          <p className="mt-5 font-bold text-xl">Like: {Likes}.</p>
        </div>
        <div className="w-full">
          <img
            className="border-8 border-orange-400 rounded"
            src={ChefPicture}
            alt="Album"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mx-8">
        <p className="text-4xl font-bold border-b-4 border-orange-400 pb-2 w-fit mx-auto mt-10">
          Recipes
        </p>
        {recipes.map((recipe) => (
          <ChefRecipe key={recipe.unic_id} recipe={recipe}></ChefRecipe>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ChefRecipes;
