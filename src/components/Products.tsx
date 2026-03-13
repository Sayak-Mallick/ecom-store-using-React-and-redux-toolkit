import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/cart.endpoints";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating: { rate: number; count: number };
}

const starString = (rate: number) => {
  const full = Math.round(rate);
  return "★".repeat(full) + "☆".repeat(5 - full);
};

const Products = () => {
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
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

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
              <button className="btnAdd">Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
