import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <div className="lg:flex lg:justify-between lg:items-center lg:px-8 p-3 lg:p-0 lg:py-3 border-b-2 border-sky-400 navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="list-none  lg:ms-0">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "font-bold text-lg duration-300 text-sky-400"
                    : " text-lg"
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
                    ? "font-bold text-lg duration-300 text-sky-400"
                    : "text-lg"
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
                    ? "font-bold text-lg duration-300 text-sky-400"
                    : "text-lg"
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/"}>
          <p>
            <span className="text-3xl md:text-5xl font-bold">
              Hea<span className="font-extrabold text-sky-400">lth</span>y
            </span>
            <span className="text-xl md:text-2xl">Food</span>
          </p>
        </Link>
      </div>

      <div className="space-x-6 lg:items-center my-4 lg:my-0 navbar-center hidden lg:flex">
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

      <div className="flex items-center mt-8 lg:mt-0 navbar-end">
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
