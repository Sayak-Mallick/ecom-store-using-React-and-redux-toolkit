import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import CartLayout from "./layouts/CartLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CartLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
