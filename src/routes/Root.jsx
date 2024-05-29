import { Outlet } from "react-router-dom";
import NavBar from "../Components/Navbar/NavBar";
import Footer from "../Components/Footer/Footer";
import Success from "../Components/Model/Success";
import ErrorModel from "../Components/Model/Error";

const Root = () => {
  return (
    <div className="flex relative  flex-col  min-h-screen">
      <div className="bg-slate-green">
        <div className="mx-auto  left-0  right-0 h-20   md:container">
          <NavBar></NavBar>
        </div>
      </div>
      <div className="mx-auto   w-full">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <Success></Success>
      <ErrorModel></ErrorModel>
    </div>
  );
};

export default Root;
