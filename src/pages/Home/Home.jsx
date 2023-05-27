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
      <div className="w-11/12 mx-auto">
        <p className="text-5xl font-bold mt-10 text-center  border-b-4 border-sky-400 w-fit mx-auto p-3">
          Reword's
        </p>

        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-10 p-3">
          <div className="border-2 border-sky-400 rounded-lg p-4">
            <img className="mx-auto w-22" src={img1} alt="" />
            <p className="font-bold text-3xl text-center my-3">
              International Cooking <br /> championship
            </p>
            <p className="font-semibold text-2xl text-center">
              12 time's Winner
            </p>
          </div>
          <div className="border-2 border-sky-400 rounded-lg p-4">
            <img className="mx-auto w-52" src={img2} alt="" />
            <p className="font-bold text-3xl text-center my-3">
              National Cooking <br /> championship
            </p>
            <p className="font-semibold text-2xl text-center">
              22 time's Winner
            </p>
          </div>
          <div className="border-2 border-sky-400 rounded-lg p-4">
            <img className="mx-auto w-56" src={img3} alt="" />
            <p className="font-bold text-3xl text-center my-3">
              American Cooking <br /> championship
            </p>
            <p className="font-semibold text-2xl text-center">
              5 time's Winner
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-5xl font-bold mt-10 text-center  border-b-4 border-sky-400 w-fit mx-auto p-3">
          Contact Us
        </p>

        <div className=" lg:p-5 px-5 bg-sky-400 bg-opacity-25  w-full lg:mx-auto mt-10 ">
          <div className="w-6/12 mx-auto flex flex-col">
            <input
              type="email"
              placeholder="Your Full Name"
              className="input input-bordered input-primary w-full  my-3"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="input input-bordered input-primary w-full  my-3"
            />
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered input-primary w-full  my-3"
            />
            <textarea
              className="textarea textarea-primary h-40"
              placeholder="Type Here"
            ></textarea>
            <button
              // onClick={handleSubmit}
              className="btn font-bold text-xl bg-sky-400 text-white border-none hover:bg-sky-400 w-fit mt-3 rounded"
            >
              Message send
            </button>
          </div>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
