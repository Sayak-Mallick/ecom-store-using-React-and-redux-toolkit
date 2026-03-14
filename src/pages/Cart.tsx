import { useDispatch, useSelector } from "react-redux";
import type { Product } from "../types";
import { clear, remove } from "../store/cart.slice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: { cart: Product[] }) => state.cart);
  const subTotal = products.reduce((acc, curr) => acc + curr.price, 0);
  const tax = subTotal * 0.08;
  const total = subTotal + tax;

  const handleRemove = (id: number) => {
    dispatch(remove(id));
  };

  if (!products.length) {
    return (
      <div className="cartPage">
        <div className="cartEmpty">
          <p className="cartEmptyText">Your cart is empty.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="cartPage">
      <h1 className="heading">My cart</h1>
      <div className="cartLayout">
        <div className="cartItems">
          {products?.map((product) => (
            <div className="cartItem" key={product?.id}>
              <div className="cartItemImg">
                <img src={product?.image} alt={product?.title} />
              </div>
              <div className="cartItemInfo">
                <span className="cartItemCat">{product?.category}</span>
                <p className="cartItemTitle">{product?.title}</p>
                <p className="cartItemPrice">${product?.price.toFixed(2)}</p>
              </div>
              <button
                className="btnRemove"
                onClick={() => handleRemove(product?.id)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        <div className="cartSummary">
          <h2 className="summaryTitle">Order summary</h2>
          <div className="sumRow">
            <span>Items ({products.length})</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>
          <div className="sumRow">
            <span>Shipping</span>
            <span className="free">Free</span>
          </div>
          <div className="sumRow">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="sumTotal">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="btnCheckout">Checkout</button>
          <button className="btnClear" onClick={() => dispatch(clear())}>
            Clear cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
