import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import type { Product } from "../types";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const items = useSelector((state: { cart: Product[] }) => state.cart);
  return (
    <div className="navbar">
      <div className="navbarTop">
        <span className="logo">REDUX STORE</span>
        <button
          className="hamburger"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={open ? "navMenu open" : "navMenu"}>
        <Link className="navlink" to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link className="navlink" to="/cart" onClick={() => setOpen(false)}>
          Cart
        </Link>
        <span className="cartCount">Cart Items: {items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
