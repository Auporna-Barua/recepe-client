import { FaFire } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const ChefDetails = ({ chef }) => {
  // console.log(chef);
  const {
    id,
    ChefName,
    ChefPicture,
    Likes,
    NumberOfRecipes,
    YearsOfExperience,
  } = chef;
  return (
    <div className="border-2 border-orange-400 w-fit p-5 rounded">
      <img src={ChefPicture} alt="" className="w-full rounded" />
      <p className="font-bold text-xl mt-3">Name: {ChefName}.</p>
      <p className="font-bold text-xl mt-3">
        Experience: {YearsOfExperience} years.
      </p>
      <p className="font-bold text-xl mt-3">Recipes: {NumberOfRecipes}.</p>
      <p className="font-bold text-xl mt-3">Total Likes: {Likes}.</p>
      <Link to={`/recipes/${id}`}>
        <button className="btn text-base text-black bg-orange-400 border-none mt-10 hover:bg-orange-400">
          View Recipes
          <BsFillArrowRightCircleFill className="ms-2 text-white"></BsFillArrowRightCircleFill>
        </button>
      </Link>
    </div>
  );
};

export default ChefDetails;
