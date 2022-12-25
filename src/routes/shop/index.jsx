import { useContext } from "react";
import { ProductsContext } from "../../context/product.context";
import ProductCard from "../../components/product-cards/product-card";

import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="shop-container">
      {products.map((data) => {
        return <ProductCard key={data.id} product={data} />;
      })}
    </div>
  );
};

export default Shop;
