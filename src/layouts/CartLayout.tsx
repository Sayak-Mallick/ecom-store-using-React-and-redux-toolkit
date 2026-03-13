import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const CartLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default CartLayout;
