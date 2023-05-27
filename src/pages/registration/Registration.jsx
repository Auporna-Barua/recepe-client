import { useContext, useState } from "react";
import { Form, Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../components/footer/Footer";

const Registration = () => {
  const [error, setError] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const { createNewUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser(result.user, name, photo);
        navigate(from, { replace: true });

        form.reset();
        setError("");
        toast("New User Created");
      })
      .catch((error) => setError(error.message));
  };

  const updateUser = (user, name, photo) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handlePass = (e) => {
    const pass = e.target.value;
    console.log(pass);
    if (pass.length < 6) {
      setErrorPass("Enter Password at least 6 character.");
    } else {
      setErrorPass("");
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <Form onSubmit={handleRegister} className="w-2/4 mx-auto p-4">
        <p className="text-3xl font-bold border-black pb-6 text-center ">
          Register your account
        </p>
        <hr />
        <div className="flex flex-col my-3">
          <label htmlFor="" className="font-bold text-xl">
            Your Name
          </label>
          <input
            className="bg-gray-100 p-3 mt-3 rounded-md"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="" className="font-bold text-xl">
            Photo URL
          </label>
          <input
            className="bg-gray-100 p-3 mt-3 rounded-md"
            type="text"
            name="photo"
            id=""
            placeholder="Profile photo url"
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="" className="font-bold text-xl">
            Email address
          </label>
          <input
            className="bg-gray-100 p-3 mt-3 rounded-md"
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
            onChange={(e) => handlePass(e)}
          />
          <p className="text-red-600 font-bold mt-3">{errorPass}</p>
        </div>
        <div className="flex">
          <input
            type="checkbox"
            className="checkbox"
            name="checkbox"
            id=""
            required
          />
          <p className="ms-2">Accept Term & Conditions</p>
        </div>
        <p className="text-red-600 font-bold mt-3">{error}</p>
        <div className="text-center">
          <button
            className="btn w-full bg-sky-400 font-bold hover:bg-sky-400 border-none mt-5"
            disabled={errorPass ? true : false}
          >
            Register
          </button>
          <p className="font-bold text-xl">or</p>
          <p className="font-bold">
            Already have an Account?{" "}
            <Link to={"/login"} className="text-sky-400 underline">
              Login
            </Link>
          </p>
        </div>
        <ToastContainer></ToastContainer>
      </Form>

      <Footer></Footer>
    </div>
  );
};

export default Registration;
