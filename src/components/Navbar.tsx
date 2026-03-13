import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <span className="logo">REDUX STORE</span>
        <div>
            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/cart">Cart</Link>
            <span className="cartCount">Cart Items: 0</span>
        </div>
    </div>
  )
}

export default Navbar