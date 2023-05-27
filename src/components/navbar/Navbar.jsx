import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import logo from "../../assets/logo.jpg";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:px-8 p-3 lg:p-0 lg:py-3 border-b-2 border-sky-400 ">
      <Link to={"/"}>
        <p>
          <span className="text-5xl font-bold">
            Hea<span className="font-extrabold text-sky-400">lth</span>y
          </span>
          <span className="text-2xl">Food</span>
        </p>
      </Link>

      <div className="lg:flex space-x-6 lg:items-center my-4 lg:my-0">
        <li className="list-none ms-6 lg:ms-0">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "font-bold lg:text-2xl duration-300 text-sky-400"
                : "font-bold text-lg"
            }
          >
            Home
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-2xl duration-300 text-sky-400"
                : "font-bold text-lg"
            }
          >
            About-Us
          </NavLink>
        </li>

        <li className="list-none">
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-2xl duration-300 text-sky-400"
                : "font-bold text-lg"
            }
          >
            Blog
          </NavLink>
        </li>
      </div>

      <div className="flex items-center mt-8 lg:mt-0">
        {user ? (
          <img
            className="w-10 h-10 rounded-full  me-5"
            src={user.photoURL}
            alt=""
            title={user.displayName}
          />
        ) : (
          <></>
        )}
        {user ? (
          <button
            onClick={handleLogOut}
            className="bg-sky-400 font-bold text-white btn border-none text-lg rounded hover:bg-sky-400"
          >
            logOut
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="bg-sky-400 font-bold text-white btn border-none text-lg rounded hover:bg-sky-400">
              login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
