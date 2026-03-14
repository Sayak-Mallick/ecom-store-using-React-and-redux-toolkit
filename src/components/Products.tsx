import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/cart.endpoints";
import type { Product } from "../types";
import { useDispatch } from "react-redux";
import { add } from "../store/cart.slice";
import { ProductSkeleton } from "./ProductSkeleton";

const starString = (rate: number) => {
  const full = Math.round(rate);
  return "★".repeat(full) + "☆".repeat(5 - full);
};

const Products = () => {
  const dispatch = useDispatch();
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="productsWrapper">
        {Array.from({ length: 24 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Error...</div>;
  }

  const handleAddToCart = (product: Product) => {
    dispatch(add(product));
  };

  return (
    <div className="productsWrapper">
      {products?.map((product: Product) => (
        <div className="card" key={product.id}>
          <div className="cardImage">
            <img src={product.image} loading="lazy" alt={product.title} />
          </div>
          <div className="cardBody">
            <span className="cardCategory">{product.category}</span>
            <p className="cardTitle">{product.title}</p>
            <div className="cardRating">
              <span className="cardStars">
                {starString(product.rating.rate)}
              </span>
              <span>({product.rating.count})</span>
            </div>
            <div className="cardFooter">
              <span className="cardPrice">${product.price.toFixed(2)}</span>
              <button
                className="btnAdd"
                onClick={() => handleAddToCart(product)}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
