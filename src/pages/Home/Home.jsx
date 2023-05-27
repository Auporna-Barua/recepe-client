import { useEffect, useState, Suspense, lazy } from "react";
import bannerImg from "../../assets/lunchcopy.jpg";
import { FaAngleDoubleRight } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ChefDetails = lazy(() => import("../../components/SingleChef/Chef"));

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
        <button className="btn btn-square loading bg-white border-none text-sky-400 font-bold text-lg"></button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <img className="lg:w-full lg:h-3/4 relative" src={bannerImg} alt="" />
        <div className="absolute lg:top-52 top-72 lg:left-16 left-10">
          <p className="font-bold lg:text-6xl text-3xl leading-tight">
            <span className="text-sky-400">choose</span> better Food <br />
            choose better Life..!
          </p>
          <div className="mt-4">
            <button className="btn text-white font-bold text-xl bg-sky-400 border-none hover:bg-sky-400">
              Explore More{" "}
              <FaAngleDoubleRight className="ms-3"></FaAngleDoubleRight>
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <p className="text-5xl font-bold mt-10 text-center  border-b-4 border-sky-400 w-fit mx-auto p-3">
          The Chef's
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-3 mt-10">
          <Suspense fallback={<p>img is loading</p>}>
            {!loading &&
              chefs.map((chef) => (
                <ChefDetails key={chef.id} chef={chef}></ChefDetails>
              ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Home;
