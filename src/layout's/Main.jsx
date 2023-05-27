import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

function Main() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Main;
