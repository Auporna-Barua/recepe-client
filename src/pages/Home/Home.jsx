import  { useEffect, useState, Suspense} from "react";
import bannerImg from "../../assets/lunchcopy.jpg";
import { FaAngleDoubleRight} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

// const ChefDetails = lazy(() => import("./SingleChef/ChefDetails"));

import img1 from "../../assets/world-food-championships-fb-icon.png";
import img2 from "../../assets/images.png";
import img3 from "../../assets/WCA_Logo_Circle_TEST.jpg";

const Home = () => {
  const [chefs, SetChefs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://food-city-server-hridoy-shill.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => {
        SetChefs(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <button className="btn btn-square loading bg-white border-none text-orange-400 font-bold"></button>
      </div>
    );
  }



  return (
    <div>
      <img className="lg:w-full lg:h-3/4 relative" src={bannerImg} alt="" />
      <div className="absolute lg:top-52 top-72 lg:left-16 left-10">
        <p className="font-bold lg:text-6xl text-3xl leading-tight">
          <span className="text-orange-400">choose</span> better Food <br />
          choose better Life..!
        </p>
        <div className="mt-4">
          <button className="btn text-black font-bold text-xl bg-orange-400 border-none hover:bg-orange-400">
            Explore More{" "}
            <FaAngleDoubleRight className="ms-3"></FaAngleDoubleRight>
          </button>
        </div>
      </div>
  
 
    </div>
  );
};

export default Home;
