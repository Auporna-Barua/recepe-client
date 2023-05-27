import { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Footer from "../../components/footer/Footer";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const { user, logInUser, loginWithGoogle, loginWithGitHub } =
    useContext(AuthContext);
  console.log(user);

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
        form.reset();
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogIn = () => {
    loginWithGoogle()
      .then((result) => {
        const loggedUser = result.loggedUser;
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  const handleGitHubLogIn = () => {
    loginWithGitHub()
      .then((result) => {
        const loggedUser = result.loggedUser;
        navigate(from, { replace: true });
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <Navbar></Navbar>
      <Form onSubmit={handleLogIn} className="w-2/4 mx-auto mt-32 p-3">
        <p className="text-3xl font-bold border-black pb-6 text-center ">
          Login your account
        </p>
        <hr />
        <div className="flex flex-col my-3">
          <label htmlFor="" className="font-bold text-xl">
            Email address
          </label>
          <input
            className="bg-gray-100 p-3 mt-3 rounded-lg"
            type="email"
            name="email"
            id=""
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="" className="font-bold text-xl">
            Password
          </label>
          <input
            className="bg-gray-100 p-3 mt-3 rounded-md"
            type="password"
            name="password"
            id=""
            placeholder="Enter your password"
            required
          />
          <p className="font-bold text-red-500">{error}</p>
        </div>
        <div className="text-center">
          <button className="btn w-full  bg-sky-400 font-bold hover:bg-sky-400 border-none mt-5">
            Login
          </button>
        </div>
      </Form>
      <div className="flex justify-center items-center mt-5">
        <button
          onClick={handleGoogleLogIn}
          className="btn btn-outline font-bold hover:bg-sky-500 hover:border-transparent"
        >
          Login with google{" "}
          <FaGoogle className="text-lg font bold ms-2"></FaGoogle>
        </button>
        <p className="mx-2 text-xl font-bold">or</p>
        <button
          onClick={handleGitHubLogIn}
          className="btn btn-outline font-bold hover:bg-sky-500 hover:border-transparent"
        >
          Login with gitHub{" "}
          <FaGithub className="text-lg font bold ms-2"></FaGithub>
        </button>
      </div>
      <p className="text-lg font-semibold text-center mt-4  mb-3">
        Dont’t Have An Account ?{" "}
        <Link
          to={"/register"}
          className="font-bold text-lg text-sky-400 underline"
        >
          Register
        </Link>
      </p>

      <Footer></Footer>
    </div>
  );
};

export default Login;
