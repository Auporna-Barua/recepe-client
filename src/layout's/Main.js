import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default Main;
