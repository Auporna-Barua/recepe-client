import { useState } from "react";
import { FaGratipay, FaStar } from "react-icons/fa";
import Rating from "react-rating";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipe = ({ recipe }) => {
  // console.log(recipe);
  const [disabled, setDisable] = useState(false);
  const { cooking_mathod, img, ingredients, rating, recipe_name } = recipe;

  const handleFavorite = () => {
    setDisable(!disabled);
    toast("Add on favorite list ❤");
  };

  return (
    <div className="border-2 border-sky-400 rounded mt-10  hover:bg-sky-600 hover:bg-opacity-20 duration-500">
      <div className="grid grid-cols-3 gap-5">
        <div className="w-full">
          <img src={img} alt="" className=" w-full h-full p-4" />
        </div>
        <div className="w-full col-span-2 p-5">
          <p className="font-bold text-2xl border-b-4 border-sky-400 w-fit pb-2">
            {recipe_name}
          </p>
          <p className="mt-2 font-semibold text-base">{cooking_mathod}</p>
          <p className="font-bold text-2xl border-b-4 border-sky-400 w-fit pb-2 mt-3">
            Ingredients
          </p>
          <p className="mt-2">
            {ingredients.map((li) => (
              <li key={li} className="font-bold">
                {li}
              </li>
            ))}
          </p>
          <p className="font-bold text-2xl border-b-4 border-sky-400 w-fit pb-2 mt-3">
            Ratings
          </p>
          <div className="flex justify-between items-center">
            <div className="flex flex-grow items-center">
              <p>
                <Rating
                  initialRating={rating}
                  placeholderRating={<FaStar></FaStar>}
                  readonly
                  emptySymbol={<FaStar className="text-gray-500"></FaStar>}
                  placeholderSymbol={<FaStar></FaStar>}
                  fullSymbol={<FaStar className="text-sky-400"></FaStar>}
                ></Rating>
              </p>
              <p className="font-bold ms-2">({rating})</p>
            </div>

            <button
              onClick={handleFavorite}
              disabled={disabled}
              className="btn text-base text-white bg-sky-400 border-none mt-10 hover:bg-sky-400"
            >
              Add to Favorite<FaGratipay className="ms-2"></FaGratipay>
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefRecipe;
